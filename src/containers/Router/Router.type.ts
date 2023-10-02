import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Character} from 'types/models';

export type RootStackParamList = {
  SPLASH: undefined;
  HOME: undefined;
  CHARACTER_DETAIL: {character: Character};
};

export type RootNavigation = NativeStackNavigationProp<RootStackParamList>;
