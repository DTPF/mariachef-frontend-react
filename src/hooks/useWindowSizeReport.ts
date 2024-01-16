import { useEffect, useState } from 'react'
import { mobileWidth } from 'scss/_variables'

function useWindowSizeReport() {
  const [isMobile, setIsMobile] = useState(false)
  const [innerWidth, setInnerWidth] = useState(0)
  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth)
      setIsMobile(window.innerWidth < mobileWidth)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return [isMobile, innerWidth]
}

export default useWindowSizeReport