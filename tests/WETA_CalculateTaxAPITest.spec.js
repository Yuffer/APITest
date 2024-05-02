// @ts-check
const { test, expect, request } = require('@playwright/test');
const assert = require('assert');

const url = 'https://nippur-8427.quadernoapp.com/api/tax_rates/calculate';

test('WETA GetTaxAPI', async ({ page }) => {
  const username = 'sk_live_y1NMmJwxrrmLPCHjELMS';
  const password = 'pk_live_5UU8LoqJg-qya4d_vN4M';
  const credentials = Buffer.from(`${username}:${password}`).toString('base64');
  const authHeader = `Basic ${credentials}`;

  // Make a request to the API endpoint
  const res = await page.request.get(url, {
    headers: {
      'Authorization': authHeader,
      // Add any other necessary headers here
    },
    data: {
      "from_country": "NL",
      "from_postal_code": "1011 AC",
      "to_country": "ES",
      "to_postal_code": "46702",
      "tax_code": "standard",
      "amount": "935.6634",
      "currency": "EUR"
    }
  });
  // Extract and log the response body
  const responseBody = await res.json();
  console.log(responseBody);

  assert.strictEqual(responseBody.rate, 21.0, 'Tax rate is not 21%');

  return Promise.resolve();
});
