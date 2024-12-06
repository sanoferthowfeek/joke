import { defineContentScript } from 'wxt/sandbox'

export default defineContentScript({
  matches: ['https://www.linkedin.com/mynetwork/grow/*'],
  main() {
    const floatingButton = document.createElement('button')
    floatingButton.textContent = 'Connect with All'
    floatingButton.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      padding: 10px 20px;
      background-color: #0a66c2;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
    `

    document.body.appendChild(floatingButton)

    floatingButton.addEventListener('click', async () => {
      const connectButtons = Array.from(document.querySelectorAll('button')).filter(
        button => button.textContent?.toLowerCase().includes('connect') && !button.disabled
      )

      for (const button of connectButtons) {
        button.click()
        await new Promise(resolve => 
          setTimeout(resolve, Math.random() * 2000 + 1000)
        )
      }
    })
  }
})