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
  const [time, setTime] = useState(3000) // 15초를 밀리초로 변환
 
  useEffect(()=>{ // 녹음을 할때 마다 시간을 초기화
    if(!!recording)setTime(3000)
  },[recording])

  useInterval(() => {
    if (recording && !isPaused && time > 0) {
      const newTime = time - 10
      setTime(newTime)
      if (newTime <= 0) {
        setIsDone(true)
        stop()
      }
    }
  }, 10) // 10ms마다 실행

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000)
    const ss = String(totalSeconds).padStart(2, '0')
    const ms = String(Math.floor(milliseconds / 10) % 100).padStart(2, '0')
    return `${ss}:${ms}`
  }

  return (
    <View className="w-full h-20 justify-center items-center">
      <Txt type="recording" content={formatTime(time)} color="white" />
    </View>
  )
}

export default RCDTimer
