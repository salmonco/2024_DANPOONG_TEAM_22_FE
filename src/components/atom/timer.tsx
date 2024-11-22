import { View } from "react-native"
import { useState, useEffect } from "react"
import Txt from "./Txt"

const Timer = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 10) // 10ms마다 업데이트

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0')
    return `${hours}:${minutes}:${seconds}.${milliseconds}`
  }

  return (
    <View className="items-center justify-center">
      <Txt type="body1" content={formatTime(currentTime)} color="white"/>
    </View>
  )
}

export default Timer