import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/.+/);
});

test('all navigation links work', async ({ page }) => {
  await page.goto('/');

  const navLinks = page.locator('nav a');
  const count = await navLinks.count();
  const hrefs = [];
  for (let i = 0; i < count; i++) {
    const href = await navLinks.nth(i).getAttribute('href');
    if (href && href.startsWith('/')) hrefs.push(href);
  }

  // Dropdown items are only visible on hover, so navigate directly by href
  // rather than clicking — this also verifies each target renders without
  // relying on CSS hover state, which is what we actually care about here.
  for (const href of hrefs) {
    const response = await page.goto(href);
    expect(response?.status(), `${href} returned ${response?.status()}`).toBeLessThan(400);
    await expect(page).not.toHaveURL(/404/);
  }
});
