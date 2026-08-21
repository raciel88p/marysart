import asyncio
from playwright.async_api import async_playwright

async def run_test():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        res = await page.goto('http://localhost:3000/cursos/pintura-basico')
        assert res.status == 200
        await page.screenshot(path='/home/jules/verification/screenshots/ssr_pintura_basico.png')

        await browser.close()

asyncio.run(run_test())
