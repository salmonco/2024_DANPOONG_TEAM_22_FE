import { loadAsync } from 'expo-font';

const loadFonts = async () => {
  await loadAsync({
    "WantedSans-Bold": require("../assets/fonts/WantedSans-Bold.otf"),
    "WantedSans-SemiBold": require("../assets/fonts/WantedSans-SemiBold.otf"),
    "WantedSans-Regular": require("../assets/fonts/WantedSans-Regular.otf"),
    "WantedSans-Medium": require("../assets/fonts/WantedSans-Medium.otf"),
  });
};

(async () => {
  await loadFonts();
})();

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
