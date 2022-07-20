import React from 'react';
import {View} from 'react-native';

import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from 'routes';

type SplashScreenProps = StackNavigationProp<RootStackParamList, 'Home'>;

export const SplashScreen: React.FC = () => {
  const navigation = useNavigation<SplashScreenProps>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#191641',
      }}>
      <LottieView
        source={require('../../assets/splash.json')}
        autoPlay
        loop={false}
        speed={2}
        onAnimationFinish={() => navigation.navigate('Home')}
      />
    </View>
  );
};
