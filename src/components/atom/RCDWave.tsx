import { useEffect, useState, useRef } from 'react'
import { View, Dimensions, ViewStyle, Animated, Easing } from 'react-native'
const { width } = Dimensions.get('window')

type RCDWaveProps = {
  volumeList: number[]
  isPlaying: boolean
  recording: boolean
}

const RCDWave = ({
  volumeList,
  isPlaying,
  recording
}: RCDWaveProps) => {
  const circleSize = 8
  const lineSize = 1
  // 웨이브 애니메이션을 위한 translateX 값
  const translateXAnim = useRef(new Animated.Value(0)).current
  // 웨이브 스타일 상태 관리
  const [waveStyle, setWaveStyle] = useState<ViewStyle>({
    justifyContent: 'flex-end',
    paddingRight: width / 2,
  })

  // 녹음 시작 시 웨이브 초기화
  useEffect(() => {
    if (recording) {
      // 웨이브를 오른쪽에서 시작하도록 설정
      setWaveStyle({
        justifyContent: 'flex-end',
        paddingRight: width / 2,
      })
      // 애니메이션 값 초기화
      translateXAnim.setValue(0)
    }
  }, [recording])

  // 재생 시 웨이브 애니메이션
  useEffect(() => {
    if (isPlaying) {
      // 두 애니메이션을 순차적으로 실행
      Animated.sequence([
        Animated.timing(translateXAnim, {
          toValue: volumeList.length * 5,
          duration: 0,
          easing: Easing.linear,
          useNativeDriver: true
        }),
        Animated.timing(translateXAnim, {
          toValue: 0,
          duration: volumeList.length * 100,
          easing: Easing.linear,
          useNativeDriver: true
        })
      ]).start();
    }
  }, [isPlaying, volumeList.length])

  const calculate_height = (item: number) => {
    if (item <= -110) {
      // 구간 1: -160 ~ -110 -> 1% ~ 10%
      return ((item + 160) / 50) * 9 + 1
    } else {
      // 구간 2: -110 ~ 0 -> 10% ~ 70%
      return ((item + 110) / 110) * 60 + 10
    }
  }

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
        <Animated.View 
          className="flex-row items-center w-full h-full" 
          style={[waveStyle, { transform: [{ translateX: translateXAnim }] }]}
        >
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
        </Animated.View>
      </View>
    </View>
  )
}
export default RCDWave
