import { VueConstructor } from 'vue'

import copy from './copy'

const directives = {
  copy
}

type CustomDirctivesIndex = keyof typeof directives

export default {
  install (Vue: VueConstructor) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key as CustomDirctivesIndex])
    })
  }
}
