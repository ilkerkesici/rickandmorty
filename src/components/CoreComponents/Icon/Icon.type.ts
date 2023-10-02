import {ViewStyle} from 'react-native';

import {ColorType} from 'assets/colors';
import {DesignProps} from 'types/design';

export interface IconProps extends DesignProps {
  name?: IconType;
  width?: number;
  height?: number;
  color?: ColorType;
  strokeColor?: string;
  strokeWidth?: number;
  fillOpacity?: number;
  style?: ViewStyle | (ViewStyle | undefined)[];
  testID?: string;
  onPress?: () => void;
  disabled?: boolean;
  clickable?: boolean;
  size?: number;
  badge?: boolean;
}

export type IconType = 'o:home' | 's:home' | 'o:arrow_left' | 's:arrow_left';
