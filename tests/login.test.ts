import { chromium, test } from "@playwright/test"

test("Login test", async () => {
    // Launch chromium browser enigine (google chrome , microsoft edge)
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.thewarehouse.co.nz/");

    await page.hover("text=person Sign in Welcome >> [data-test-id=user-btn]");
    await page.click("text=Sign in");

    await page.fill("input[name=dwfrm_login_email]", "test-email.gmail.com")
    await page.fill("input[name=dwfrm_login_password]", "test-password")

    await page.click("button:has-text('Sign in')");

    await page.waitForTimeout(5000)
}) 