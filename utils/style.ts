export function getClass(props: Object): string {
  return Object.keys(props)
    .reduce((result, key) => {
      if (typeof props[key] === "boolean" && props[key]) {
        result.push(key)
      }

      return result
    }, [])
    .join(" ")
}
