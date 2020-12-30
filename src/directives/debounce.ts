import { DirectiveOptions } from 'vue'

let timer: number | null = null
let handleCallback: Function
function handleClick () {
  if (timer) {
    clearTimeout(timer)
  }

  timer = setTimeout(() => {
    handleCallback()
  }, 2000)
}

const debounce: DirectiveOptions = {
  bind (el, { value }) {
    handleCallback = value
    el.addEventListener('click', handleClick)
  },
  componentUpdated (el, { value }) {
    handleCallback = value
  }
}

export default debounce
