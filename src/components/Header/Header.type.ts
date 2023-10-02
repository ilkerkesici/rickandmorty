import { IconProps } from 'components/CoreComponents/Icon';
import { ViewStyle } from 'react-native';

export interface HeaderProps {
  title?: string;
  back?: boolean;
  rightIconProps?: IconProps;
  showHeaderShadow?: boolean;
  leftIconProps?: IconProps;
  bottomElements?: JSX.Element;
  headerContainerStyle?: ViewStyle;
  subContainerStyle?: ViewStyle;
}
