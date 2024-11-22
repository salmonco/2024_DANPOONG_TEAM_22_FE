import Body4 from '@components/atom/body/Body4';
import LeeSeoYunText from '@components/atom/LeeSeoyunText';
import ShadowView from '@components/atom/ShadowView';
import { LetterResponseData } from '@type/providedFile';
import formatDate from '@utils/formatDate';
import { Image, Pressable, View } from 'react-native';

type CardProps = {
  letter: LetterResponseData;
  idx: number;
};

const Card = ({ letter, idx }: Readonly<CardProps>) => {
  const imageUri = null;

  return (
    <Pressable className="h-[189]">
      <ShadowView>
        <View className="px-[22] py-[18]">
          <LeeSeoYunText
            text={formatDate(letter.createdAt)}
            className="text-gray300"
          />
          <Body4
            text="자립한 뒤로 지치고 외로웠는데 바람돌이님의 위로 한 마디가 제 삶을 움직일 동력이 되어줬어요. 감사합니다."
            className="text-white my-[15] text-justify"
          />
          <View className="flex-row items-center self-end">
            <LeeSeoYunText
              text={letter.alarmType}
              className="text-yellowPrimary"
            />
            {letter.alarmType !== '위로' && (
              <LeeSeoYunText text="&nbsp;알림" className="text-white" />
            )}
            <LeeSeoYunText text="&nbsp;받은" className="text-white mr-[5]" />
            <Body4 text={`청년${idx}`} className="text-white mr-[10]" />
            <Image
              source={
                imageUri
                  ? { uri: imageUri }
                  : require('../../../../assets/images/logo/app/app_logo_yellow.png')
              }
              className="w-[27] h-[27]"
              style={{ borderRadius: 50 }}
            />
          </View>
        </View>
      </ShadowView>
    </Pressable>
  );
};

export default Card;
