export const throttle = (callback: Function, delay: number): Function => {
  let timer: number
  let previous = 0

  function throttled (this: any, ...agrs: any[]) {
    const now = new Date().getTime()

    if (!previous) {
      previous = now
    }
    clearTimeout(timer)
    console.log(this)
    if (now - previous > delay) {
      previous = now
      clearTimeout(timer)
      callback.apply(this, agrs)
    } else {
      timer = setTimeout(() => {
        previous = new Date().getTime()
        clearTimeout(timer)
        callback.apply(this, agrs)
      }, delay)
    }
  }

  return throttled
}
