import { VueConstructor } from 'vue'

import copy from './copy'
import longpress from './longpress'
import debounce from './debounce'
import lazyload from './lazyload'
import permission from './permission'

const directives = {
  copy,
  longpress,
  debounce,
  lazyload,
  permission
}

type CustomDirctivesIndex = keyof typeof directives

export default {
  install (Vue: VueConstructor) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key as CustomDirctivesIndex])
    })
  }
}
