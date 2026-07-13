const { chromium } = require('playwright')

async function capture() {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 1440, height: 1080 })
  
  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' })
    await page.screenshot({ path: './apps/website/public/previews/business-landing.png' })
    console.log('✅ Screenshot captured successfully')
  } catch (e) {
    console.error('Screenshot failed:', e)
  } finally {
    await browser.close()
  }
}

capture()
