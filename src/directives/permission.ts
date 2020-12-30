import { DirectiveOptions } from 'vue'

const currentRole = 'admin'

function checkPermissionByRole (roles: string[]) {
  return roles.includes(currentRole)
}

const permission: DirectiveOptions = {
  inserted (el, { value: roles }) {
    if (roles && Array.isArray(roles) && roles.length > 0) {
      const hasPermission = checkPermissionByRole(roles)
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      console.error('need roles! Like v-permission="[\'admin\',\'editor\']"')
    }
  }
}

export default permission
