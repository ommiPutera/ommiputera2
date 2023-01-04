function getClassProps<T>(props: T): string {
  if (!Boolean(Object.keys({props}).length)) return ''

  let className = ''
  for (var key in props) {
    let keyValue = props[key]
    if (typeof props[key] === 'boolean') className += ` ${key}`
    if (typeof props[key] === 'string') {
      const classCombined = key + ' ' + keyValue
      className += ` ${camelize(classCombined)}`
    }
  }
  return className
}

function camelize(str: string) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase()
    })
    .replace(/\s+/g, '')
}

export {getClassProps, camelize}
