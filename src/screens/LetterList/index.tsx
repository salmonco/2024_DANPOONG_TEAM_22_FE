import { getLetters } from '@apis/providedFile';
import AppBar from '@components/atom/AppBar';
import BG from '@components/atom/BG';
import Body4 from '@components/atom/body/Body4';
import EmptyText from '@components/atom/EmptyText';
import Title4 from '@components/atom/title/Title4';
import useGetAlarmComfort from '@hooks/alarm/useGetAlarmComfort';
// import useGetLetters from '@hooks/providedFile/useGetLetters';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Card from '@screens/LetterList/components/Card';
import { ResultResponseData } from '@type/common';
import { LetterStackParamList } from '@type/LetterStackParamList';
import { LettersResponseData } from '@type/providedFile';
import { useEffect, useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SecureStore from 'expo-secure-store';

type LetterProps = NativeStackScreenProps<LetterStackParamList, 'LetterListScreen'>;

const filterMenu = [
  { label: '전체', idx: 1 },
  { label: '외출', idx: 2 },
  { label: '기상', idx: 3 },
  { label: '식사', idx: 4 },
  { label: '취침', idx: 5 },
  { label: '위로', idx: 6 },
  { label: '우울', idx: 7 },
  { label: '칭찬', idx: 8 },
];

const LetterListScreen = ({ navigation }: Readonly<LetterProps>) => {
  const nickname = SecureStore.getItem('nickname');
  const [selectedFilterIdx, setSelectedFilterIdx] = useState(1);
  const { data: alarmComfortData, isError: isAlarmComfortError, error: alarmComfortError } = useGetAlarmComfort();
  const [lettersData, setLettersData] = useState<ResultResponseData<LettersResponseData>>(null);
  // const {
  //   data: lettersData,
  //   isError: isLettersError,
  //   error: lettersError,
  //   isLoading: isLettersLoading,
  // } = useGetLetters({
  //   parentCategoryId: alarmComfortData?.result[0].id,
  //   pageable: { page: 1, size: 10, sort: 'createdAt,desc' },
  // });

  useEffect(() => {
    if (isAlarmComfortError) {
      console.error(alarmComfortError);
      Alert.alert('오류', '위로 알람을 불러오는 중 오류가 발생했어요');
    }
  }, [isAlarmComfortError]);

  // useEffect(() => {
  //   if (isLettersError) {
  //     console.error(lettersError);
  //     Alert.alert('오류', '편지 정보를 불러오는 중 오류가 발생했어요');
  //   }
  // }, [isLettersError]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getLetters({
          parentCategoryId: alarmComfortData?.result[0].id,
          pageable: { page: 1, size: 10, sort: 'createdAt,desc' },
        });
        console.log(res);
        setLettersData(res);
      } catch (error) {
        console.error(error);
        Alert.alert('오류', '편지 정보를 불러오는 중 오류가 발생했어요');
      }
    })();
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <BG type="main">
        <View className="flex-1">
          {/* AppBar는 flex-1 컨테이너 안에 넣어야 함 */}
          <AppBar
            title="청년의 편지"
            goBackCallbackFn={() => navigation.goBack()}
            className="absolute top-[6] w-full"
          />

          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-[74]">
              <View className="flex-row items-center px-[30] py-[10] h-[36] mt-[20]">
                {filterMenu.map((menu) => (
                  <Pressable
                    key={menu.idx}
                    className={`h-[36] px-[22] items-center justify-center border ${menu.idx === selectedFilterIdx ? 'border-tabIcon bg-white/10' : 'border-white10'} mr-[8]`}
                    style={{ borderRadius: 20 }}
                    onPress={() => setSelectedFilterIdx(menu.idx)}
                  >
                    <Body4
                      text={menu.label}
                      className={`${menu.idx === selectedFilterIdx ? 'text-yellowPrimary' : 'text-gray300'}`}
                    />
                  </Pressable>
                ))}
              </View>
            </ScrollView>
          </View>

          <View className="flex-row items-center mt-[30] px-[30]">
            <Text
              className="text-white"
              style={{
                fontSize: 22,
                fontFamily: 'LeeSeoyun-Regular',
                lineHeight: 22 * 1.5,
              }}
            >
              TO.
            </Text>
            <Title4 text={nickname ?? ''} className="text-yellowPrimary ml-[7]" />
          </View>
          {!lettersData || lettersData?.result.content.length === 0 ? (
            <View className="flex-1 items-center justify-center">
              <EmptyText text="아직 편지가 없어요" />
            </View>
          ) : (
            <ScrollView>
              <View className="pt-[22] px-[30] pb-[110]">
                {lettersData?.result.content.map((letter, idx) => <Card letter={letter} idx={idx} />)}
              </View>
            </ScrollView>
          )}
        </View>
      </BG>
    </SafeAreaView>
  );
};

export default LetterListScreen;
