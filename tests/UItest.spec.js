const {test, expect} = require("@playwright/test");

test('test1', async ({page})=>{

    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");

    const title = await page.title();
    expect(title).toBe("Google");
    







});