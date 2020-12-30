import { DirectiveOptions } from 'vue'
import { throttle } from '@/utils/index'

const defaultSrc = '/img/logo.82b9c7a5.png'
const windowHeight = document.documentElement.clientHeight
console.log('windowHeight', windowHeight)

function init (el: HTMLElement, value: string) {
  el.setAttribute('data-src', value)
  el.setAttribute('src', defaultSrc)
}

// TODO: 多次调用可以优化
function observe (el: HTMLElement) {
  const IO = new IntersectionObserver((entries) => {
    const realSrc = el.dataset.src
    console.group(el.getAttribute('id'))
    console.log(entries[0].isIntersecting)
    console.groupEnd()

    if (entries[0].isIntersecting && realSrc) {
      console.log('setAttribute')
      el.setAttribute('src', realSrc)
      el.removeAttribute('data-src')
    }
  })

  IO.observe(el)
}

function load (el: HTMLElement) {
  const { top, bottom } = el.getBoundingClientRect()
  const realSrc = el.dataset.src
  console.group(el.getAttribute('id'))
  console.log(top, bottom, top - windowHeight)
  console.groupEnd()
  if (top - windowHeight < 50 && bottom > 0 && realSrc) {
    el.setAttribute('src', realSrc)
    el.removeAttribute('data-src')
  }
}

function listenerScroll (el: HTMLElement) {
  load(el)
  window.addEventListener('scroll', () => {
    throttle(load, 500)(el)
  })
}

const lazyload: DirectiveOptions = {
  bind (el, { value }) {
    init(el, value)
  },
  inserted (el) {
    if (IntersectionObserver) {
      observe(el)
    } else {
      listenerScroll(el)
    }
  }
}

export default lazyload
