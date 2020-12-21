import { VueConstructor, DirectiveOptions } from 'vue'

import copy from './copy'

// TODO: 类型完善
interface CustomDirctives {
  copy: DirectiveOptions;
}

const directives: CustomDirctives = {
  copy
}

export default {
  install (Vue: VueConstructor) {
    Vue.directive('copy', directives.copy)
  }
}
