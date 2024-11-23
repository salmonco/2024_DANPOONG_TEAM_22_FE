import messaging from '@react-native-firebase/messaging';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '@type/RootStackParamList';
import { YouthStackParamList } from '@stackNav/Youth';
import { useEffect } from 'react';
import { Alert } from 'react-native';

// type RootProps = NativeStackNavigationProp<RootStackParamList>;
type YouthProps = NativeStackNavigationProp<YouthStackParamList>;

const useFCM = () => {
  // const navigation = useNavigation<RootProps>();
  const navigation = useNavigation<YouthProps>();

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    return (
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL
    );
  };

  const navigateToYouthListenScreen = ({
    alarmId,
    script,
  }: Readonly<{ alarmId: number; script: string }>) => {
    // navigation.navigate('YouthStackNav', {
    //   screen: 'YouthListenScreen',
    //   params: {
    //     alarmId,
    //     script,
    //   },
    // });
    navigation.navigate('YouthListenScreen', { alarmId, script });
  };

  useEffect(() => {
    (async () => {
      const enabled = await requestUserPermission();

      if (!enabled) {
        console.log('Permission not granted');
        return;
      }

      messaging()
        .getToken()
        .then((token) => {
          console.log('FCM Token:', token);
        });

      // Check whether an initial notification is available
      messaging()
        .getInitialNotification()
        .then((remoteMessage) => {
          if (remoteMessage) return;

          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification
          );
          const { alarmId } = remoteMessage.data;
          const { body } = remoteMessage.notification;
          navigateToYouthListenScreen({
            alarmId: Number(alarmId),
            script: body,
          });
        });

      // Assume a message-notification contains a "type" property in the data payload of the screen to open
      messaging().onNotificationOpenedApp((remoteMessage) => {
        if (remoteMessage) return;

        console.log(
          'Notification caused app to open from background state:',
          remoteMessage
        );
        const { alarmId } = remoteMessage.data;
        const { body } = remoteMessage.notification;
        navigateToYouthListenScreen({ alarmId: Number(alarmId), script: body });
      });

      // Register background handler
      messaging().setBackgroundMessageHandler(async (remoteMessage) => {
        if (!remoteMessage) return;

        console.log('Message handled in the background!', remoteMessage);
        const { alarmId } = remoteMessage.data;
        const { body } = remoteMessage.notification;
        navigateToYouthListenScreen({ alarmId: Number(alarmId), script: body });
      });

      const unsubscribe = messaging().onMessage(async (remoteMessage) => {
        Alert.alert(
          'A new FCM message arrived!',
          JSON.stringify(remoteMessage)
        );
      });

      return unsubscribe;
    })();
  }, []);
};

export default useFCM;
