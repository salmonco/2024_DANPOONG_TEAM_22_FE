import { View } from 'react-native'
import Txt from './Txt'
import { useEffect, useState } from 'react'
import { Audio } from 'expo-av'
import useInterval from '@hooks/useInterval'

type RCDTimerProps = {
  recording: Audio.Recording | undefined
  isPaused: boolean
  setIsDone: (isDone: boolean) => void
  stop: () => void
}

const RCDTimer = ({
  recording,
  isPaused,
  setIsDone,
  stop,
}: RCDTimerProps) => {
  const [targetTime, setTargetTime] = useState<Date | null>(null)
  const [remainingTime, setRemainingTime] = useState(15000) // 15초를 밀리초로 변환

  useEffect(() => {
    if (!!recording) {
      const target = new Date()
      target.setSeconds(target.getSeconds() + 15)
      setTargetTime(target)
      setRemainingTime(15000)
    }
  }, [recording])

  useInterval(() => {
    if (recording && !isPaused && targetTime) {
      const now = new Date()
      const diff = targetTime.getTime() - now.getTime()
      setRemainingTime(diff)
      
      if (diff <= 0) {
        setIsDone(true)
        stop()
      }
    }
  }, 10)

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(Math.max(0, milliseconds) / 1000)
    const ss = String(totalSeconds).padStart(2, '0')
    const ms = String(Math.floor(Math.max(0, milliseconds) / 10) % 100).padStart(2, '0')
    return `${ss}:${ms}`
  }

  return (
    <View className="w-full h-20 justify-center items-center">
      <Txt type="recording" content={formatTime(remainingTime)} color="white" />
    </View>
  )
}

export default RCDTimer
