import {useEffect} from 'react'

const useWindowFocusHandler = (onFocus: () => void, onBlur: () => void) => {
  useEffect(() => {
    window.addEventListener('focus', onFocus)
    window.addEventListener('blur', onBlur)

    onFocus()

    return () => {
      window.removeEventListener('focus', onFocus)
      window.removeEventListener('blur', onBlur)
    }
  }, [onFocus, onBlur])
}

export default useWindowFocusHandler
