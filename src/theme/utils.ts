export function px(n: string | number) {
  return (typeof n === 'string' ? n : n === 0 ? '0' : `${n}px`)
}

export function pxMap(values: Array<string | number>) {
  return values.reduce((o, n) => Object.assign(o, { [n]: px(n) }), {})
}

export function tokenMap(tokens: Record<string, { value: string }>): Record<string, string> {
  return Object.keys(tokens).reduce((obj, rule) => {
    const int = parseInt(tokens[rule].value, 10)
    obj[rule] = px(int)
    return obj
  }, {} as Record<string, string>)
}
