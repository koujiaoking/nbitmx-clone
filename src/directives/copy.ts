import { showToast } from 'vant'

const copy = {
  mounted(el: HTMLElement, binding: any) {
    el.addEventListener('click', () => {
      const text = binding.value
      if (!text) return

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
          .then(() => {
            showToast('複製成功')
          })
          .catch((err) => {
            console.error('Failed to copy: ', err)
            fallbackCopyText(text)
          })
      } else {
        fallbackCopyText(text)
      }
    })
  }
}

function fallbackCopyText(text: string) {
  const textArea = document.createElement('textarea')
  textArea.value = text

  // Avoid scrolling to bottom
  textArea.style.top = '0'
  textArea.style.left = '0'
  textArea.style.position = 'fixed'

  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    const successful = document.execCommand('copy')
    if (successful) {
      showToast('複製成功')
    } else {
      showToast('複製失敗')
    }
  } catch (err) {
    showToast('複製失敗')
  }

  document.body.removeChild(textArea)
}

export default copy
