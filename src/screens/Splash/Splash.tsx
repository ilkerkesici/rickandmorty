import React from 'react';
import useSplashHook from './useSplashHook';
import ScreenContainer from 'containers/ScreenContainer/ScreenContainer';

export default function Splash() {
  const {} = useSplashHook();
  return <ScreenContainer />;
}
