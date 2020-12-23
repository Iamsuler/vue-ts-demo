import { DirectiveOptions } from 'vue'

let pressTimer: null | number = null
let handleCallback: Function
const handler = (event: Event) => {
  handleCallback(event)
}
const start = (event: Event) => {
  if (event.type === 'click') {
    return
  }

  if (!pressTimer) {
    pressTimer = setTimeout(() => {
      handler(event)
    }, 2000)
  }
}
const cancle = () => {
  if (pressTimer !== null) {
    clearTimeout(pressTimer)
    pressTimer = null
  }
}

const longpress: DirectiveOptions = {
  bind (el, { value: callback }) {
    if (typeof callback !== 'function') {
      throw new Error('bing must be a function')
    }
    handleCallback = callback
    // 添加事件监听器
    el.addEventListener('mousedown', start)
    el.addEventListener('touchstart', start)

    // 取消定时器
    el.addEventListener('click', cancle)
    el.addEventListener('mouseout', cancle)
    el.addEventListener('touchend', cancle)
    el.addEventListener('touchcancel', cancle)
  },
  componentUpdated (el, { value: callback }) {
    handleCallback = callback
  },
  unbind (el) {
    // 添加事件监听器
    el.removeEventListener('mousedown', start)
    el.removeEventListener('touchstart', start)

    // 取消定时器
    el.removeEventListener('click', cancle)
    el.removeEventListener('mouseout', cancle)
    el.removeEventListener('touchend', cancle)
    el.removeEventListener('touchcancel', cancle)
  }
}

export default longpress
