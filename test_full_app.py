import asyncio
from playwright.async_api import async_playwright

async def run_test():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Test Home Page
        res = await page.goto('http://localhost:3000/')
        assert res.status == 200
        await page.screenshot(path='/home/jules/verification/screenshots/ssr_home.png')

        # Test Catalog Page
        res = await page.goto('http://localhost:3000/cursos')
        assert res.status == 200
        await page.screenshot(path='/home/jules/verification/screenshots/ssr_catalog.png')

        # Test Pieces Page
        res = await page.goto('http://localhost:3000/piezas')
        assert res.status == 200
        await page.screenshot(path='/home/jules/verification/screenshots/ssr_pieces.png')

        # Test Detail Course Page
        res = await page.goto('http://localhost:3000/cursos/velas-basico')
        assert res.status == 200
        await page.screenshot(path='/home/jules/verification/screenshots/ssr_velas_basico.png')

        # Test 404 Page
        res = await page.goto('http://localhost:3000/pagina-inexistente')
        assert res.status == 404
        await page.screenshot(path='/home/jules/verification/screenshots/ssr_404.png')

        await browser.close()
        print("All route checks passed successfully!")

asyncio.run(run_test())
