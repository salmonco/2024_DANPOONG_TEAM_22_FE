import { getLetters } from '@apis/providedFile';
import { getAlarmCategory } from '@apis/alarm';
import { getTopText } from '@apis/RCDApis/getTopText';
import AppBar from '@components/atom/AppBar';
import BG from '@components/atom/BG';
import Body4 from '@components/atom/body/Body4';
import EmptyText from '@components/atom/EmptyText';
import Title4 from '@components/atom/title/Title4';
import { LETTERS_DATA } from '@constants/letter';
import useGetAlarmCategory from '@hooks/alarm/useGetAlarmCategory';
import useGetAlarmComfort from '@hooks/alarm/useGetAlarmComfort';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Card from '@screens/LetterList/components/Card';
import { LetterStackParamList } from '@type/LetterStackParamList';
import { LetterResponseData } from '@type/providedFile';
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

type LetterProps = NativeStackScreenProps<LetterStackParamList, 'LetterListScreen'>;

const LetterListScreen = ({ navigation }: Readonly<LetterProps>) => {
  const nickname = SecureStore.getItem('nickname');
  const [selectedFilterIdx, setSelectedFilterIdx] = useState(0);
  // const { data: alarmComfortData, isError: isAlarmComfortError, error: alarmComfortError } = useGetAlarmComfort();
  const [lettersData, setLettersData] = useState<LetterResponseData[]>([]);
  const [filteredLettersData, setFilteredLettersData] = useState<LetterResponseData[]>([]);
  const [parentCategories, setParentCategories] = useState<{ id: number; name: string }[]>([]);
  // const { data: alarmCategoryData, isError: isAlarmCategoryError, error: alarmCategoryError } = useGetAlarmCategory();
  // console.log('alarmComfortData', alarmComfortData);

  // useEffect(() => {
  //   if (isAlarmComfortError) {
  //     console.error(alarmComfortError);
  //     Alert.alert('오류', '위로 알람을 불러오는 중 오류가 발생했어요');
  //   }
  // }, [isAlarmComfortError]);

  // useEffect(() => {
  //   if (isAlarmCategoryError) {
  //     console.error(alarmCategoryError);
  //     Alert.alert('오류', '위로 알람을 불러오는 중 오류가 발생했어요');
  //   }
  // }, [isAlarmCategoryError]);

  useEffect(() => {
    (async () => {
      try {
        const alarmCategoryRes = await getAlarmCategory();
        const categories = alarmCategoryRes.result.map((item) => ({ id: item.id, name: item.name }));
        console.log('categories', categories);
        setParentCategories(categories);

        const res = await getLetters({
          parentCategoryId: 1,
          pageable: { page: 1, size: 10, sort: 'createdAt,desc' },
        });
        console.log(res);
        setLettersData(res.result.content);
        setFilteredLettersData(res.result.content);
        // setLettersData(LETTERS_DATA);
        // setFilteredLettersData(LETTERS_DATA);
      } catch (error) {
        console.error(error);
        Alert.alert('오류', '편지 정보를 불러오는 중 오류가 발생했어요');
      }
    })();
  }, []);

  // useEffect(() => {
  //   if (!alarmCategoryData) return;

  //   const categories = alarmCategoryData.result.map((item) => ({ id: item.id, name: item.name }));
  //   setParentCategories(categories);
  // }, [alarmCategoryData]);

  useEffect(() => {
    console.log('lettersData', lettersData);
    const filteredLetters = lettersData.filter(
      (letter) => letter.alarmType === parentCategories[selectedFilterIdx].name
    );
    console.log('filteredLetters', filteredLetters);
    setFilteredLettersData(filteredLetters);
  }, [selectedFilterIdx]);

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
                {parentCategories.map((menu, index) => (
                  <Pressable
                    key={menu.id}
                    className={`h-[36] px-[22] items-center justify-center border ${index === selectedFilterIdx ? 'border-tabIcon bg-white/10' : 'border-white10'} mr-[8]`}
                    style={{ borderRadius: 20 }}
                    onPress={() => setSelectedFilterIdx(index)}
                  >
                    <Body4
                      text={menu.name}
                      className={`${index === selectedFilterIdx ? 'text-yellowPrimary' : 'text-gray300'}`}
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
          {/* 목 데이터 넣은 버전 */}
          {/* <ScrollView>
            <View className="pt-[22] px-[30] pb-[110]">
              {(!filteredLettersData || filteredLettersData.length === 0 ? LETTERS_DATA : filteredLettersData).map(
                (letter, idx) => (
                  <View key={idx}>
                    <Card letter={letter} idx={idx} />
                    <View className="mb-[30]" />
                  </View>
                )
              )}
            </View>
          </ScrollView> */}
          {!filteredLettersData || filteredLettersData.length === 0 ? (
            <View className="flex-1 items-center justify-center">
              <EmptyText text="아직 편지가 없어요" />
            </View>
          ) : (
            <ScrollView>
              <View className="pt-[22] px-[30] pb-[110]">
                {filteredLettersData.map((letter, idx) => (
                  <View key={idx}>
                    <Card letter={letter} idx={idx} />
                    <View className="mb-[30]" />
                  </View>
                ))}
              </View>
            </ScrollView>
          )}
        </View>
      </BG>
    </SafeAreaView>
  );
};

export default LetterListScreen;
