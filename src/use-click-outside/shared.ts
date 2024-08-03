export type Fn = () => void
export type AnyFn = (...args: any[]) => any
export const noop = () => {}
export const isClient = typeof window !== 'undefined' && typeof document !== 'undefined'

const getIsIOS = () => {
  return (
    isClient &&
    window?.navigator?.userAgent &&
    (/iP(ad|hone|od)/.test(window.navigator.userAgent) ||
      // The new iPad Pro Gen3 does not identify itself as iPad, but as Macintosh.
      // https://github.com/vueuse/vueuse/issues/3577
      (window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent)))
  )
}

export const isIOS = getIsIOS()
