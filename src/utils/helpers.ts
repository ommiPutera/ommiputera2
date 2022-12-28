function getClassProps<T>(props: T): string {
  if (!Boolean(Object.keys({props}).length)) return ''

  let className = ''
  for (var key in props) {
    let keyValue = props[key]
    if (typeof props[key] === 'boolean') className += ` ${key}`
    if (typeof props[key] === 'string') className += ` ${keyValue}`
  }
  return className
}

export {getClassProps}
