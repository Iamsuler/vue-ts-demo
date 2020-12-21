import { DirectiveOptions } from 'vue'

let $value = ''
const handler: EventListenerOrEventListenerObject = () => {
  if (!$value) {
    console.warn('无复制内容')
    return
  }

  const textarea = document.createElement('textarea')

  // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
  textarea.readOnly = true
  textarea.style.position = 'absolute'
  textarea.style.left = '-9999px'
  textarea.value = $value
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('Copy')
  document.body.removeChild(textarea)
}
const copy: DirectiveOptions = {
  bind (el, { value }) {
    $value = value
    // 绑定点击事件，就是所谓的一键 copy 啦
    el.addEventListener('click', handler)
  },
  componentUpdated (el, { value }) {
    $value = value
  },
  unbind (el) {
    el.removeEventListener('click', handler)
  }
}

export default copy
