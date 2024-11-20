import { View, TouchableOpacity } from 'react-native'
import Play from '../../../assets/svgs/play.svg'
import Pause from '../../../assets/svgs/pause.svg'
import Circle from '../../../assets/svgs/Circle.svg'
import { Audio } from 'expo-av'
import {RCDBtnProps} from '../../types/RCDBtnType'
import {useEffect, useState} from 'react'
const RCDBtn = ({
  record,
  pause,
  play,
  isPlaying,
  isPaused,
  isDone,
  recording,
}: RCDBtnProps) => {
  const [type,setType] = useState<'ready'|'recording'|'done'>('ready')// 버튼의 상태

  useEffect(()=>{//녹음 상태에 따라 버튼의 상태를 업데이트
    if(isDone)setType('done')
    else if(!recording || isPaused)setType('ready')
    else if(recording && !isPaused)setType('recording')
  },[recording,isDone,isPaused])

  const pressHandler=()=>{
    if(type==='ready' && !recording)record() //type이  ready 이고 진행중이던 녹음이 없으면 녹음을 시작
    else if(type==='ready' && recording)pause() //type이  ready 이고 진행중이던 녹음이 있으면 일시정지
    else if(type==='recording')pause() //녹음중 이면 일시정지
    else if(type==='done' || !isPlaying) play() // 녹음 완료 이면 재생, 재생중이지 않으면
  }
  return (

      <TouchableOpacity
        style={{
          width: 69,
          aspectRatio: 1,
          borderRadius: 50,
          borderWidth: 2,
          borderColor: 'white',
          justifyContent:'center',
          alignItems:'center',

        }}
        onPress={pressHandler}
      >
        {type==='ready' && <Circle/>}
        {type==='recording' && <Pause/>}
        {type==='done' && <Play/>}
      </TouchableOpacity>   
  )
}

export default RCDBtn
