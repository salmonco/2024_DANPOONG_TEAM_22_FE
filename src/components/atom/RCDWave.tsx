import { useEffect, useState } from 'react'
import { View, Dimensions, StyleSheet, ViewStyle } from 'react-native'
import useInterval from '@hooks/useInterval'
const { width } = Dimensions.get('window')

type RCDWaveProps = {
  volumeList: number[]
  isPlaying: boolean
  recording:boolean
}
const RCDWave = ({
  volumeList,
  isPlaying,
  recording
}: RCDWaveProps) => {
  const circleSize = 8
  const lineSize = 1
  const [toLeft, setToLeft] = useState<number>(0)
  const [waveStyle, setWaveStyle] = useState<ViewStyle>({
    justifyContent: 'flex-end',
    paddingRight: width / 2,
  })
  const [tmp,setTmp]=useState<number|null>(null)

  // useEffect(() => {
  //   console.log('toLeft', toLeft,'| tmp:',tmp)
  // }, [toLeft,tmp])
  useEffect(()=>{
    if(recording){setWaveStyle({
      justifyContent: 'flex-end',
      paddingRight: width / 2,
    })}
  },[recording])

  // 음성 녹음 시작 시 100ms 마다 움직임
  useEffect(() => {
    if (isPlaying && tmp === null) {
      setTmp(100)
    }
  }, [isPlaying, tmp])
  // 음성 녹음 시작 시 100ms 마다 움직임
  useInterval(()=>{
    if(tmp && toLeft> volumeList.length * -5)setToLeft(prev=>prev-5)
  },tmp)

  // 움직임 효과가 시작되면, wave의 스타일을 바꿔서 오른쪽에서 부터 오는 것처럼 보이데 한다.
useEffect(()=>{
  if(toLeft!==0){
  setWaveStyle({
    justifyContent: 'flex-start',
    paddingLeft: width / 2,
    transform:[{translateX:toLeft}]
  })
}
  if(toLeft<= volumeList.length * -5){setToLeft(0); setTmp(null)}
},[toLeft])

 
    
  

  const calculate_height = (item: number) => {
    if (item <= -110) {
      // 구간 1: -160 ~ -110 -> 1% ~ 10%
      return ((item + 160) / 50) * 9 + 1
    } else {
      // 구간 2: -110 ~ 0 -> 10% ~ 70%
      return ((item + 110) / 110) * 60 + 10
    }
  }

  // const newStyle = () => {
  //     return isPlaying ?
  //     {
  //         paddingLeft: width / 2,
  //         justifyContent: 'flex-start' as 'flex-start',
  //         transform:[{translateX:toLeft}]
  //     } :
  //     {
  //         paddingRight: width / 2,
  //         justifyContent: 'flex-end' as 'flex-end'
  //     }
  // }

  return (
    // 전체 틀
    <View style={{ width, height: 204 }}>
      {/* 배경 색 */}
      <View className="w-full h-full bg-white opacity-10" />
      {/* 가로 회색선 */}
      <View
        className="absolute w-full bg-[#717171] top-1/2"
        style={{
          height: lineSize / 2,
          transform: [{ translateY: -lineSize / 4 }],
        }}
      />
      {/* 세로 노랑선 위 원 */}
      <View
        className="absolute bg-yellowPrimary rounded-full left-1/2"
        style={{
          width: circleSize,
          height: circleSize,
          top: -circleSize,
          transform: [{ translateX: -circleSize / 2 }],
        }}
      />
      {/* 세로 노랑선 */}
      <View
        className="absolute bg-yellowPrimary h-full left-1/2"
        style={{ width: lineSize, transform: [{ translateX: -lineSize / 2 }] }}
      />
      {/* Wave 영역 */}
      <View className="absolute w-full h-full">
        <View className="flex-row items-center w-full h-full" style={waveStyle}>
          {volumeList.map((item, index) => (
            <View
              key={index}
              className="bg-white"
              style={{
                width: 1,
                height: `${calculate_height(item)}%`,
                marginRight: 4,
              }}
            />
          ))}
        </View>
      </View>
    </View>
  )
}
export default RCDWave
