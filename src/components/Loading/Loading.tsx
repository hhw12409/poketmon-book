import { useRef, useEffect, useState } from 'react'
import { LoadingContainer, Message } from './Loading.styles'

const Loading = () => {
  const messageRef = useRef<HTMLHeadingElement>(null)
  const [dot, setDot] = useState('.')
  useEffect(() => {
    const interval = setInterval(() => {
      setDot(prev => prev + '.')
      if (messageRef.current) {
        messageRef.current.innerHTML = 'Loading' + dot
      }
      if (dot.length > 4) {
        setDot(prev => prev.slice(-1))
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [dot])

  return (
    <LoadingContainer>
      <Message ref={messageRef}>Loading</Message>
    </LoadingContainer>
  )
}

export default Loading
