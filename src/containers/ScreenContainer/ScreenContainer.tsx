import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './ScreenContainer.style';
import {DesignProps} from 'types/design';
import {designPropToStyle} from 'helpers/utils/design.utils';
import {DEFAULT_SCREEN_HORIZONTAL_PADDING} from 'constants/design';
import {useThemeColor} from 'helpers/hooks/useThemeColor';

interface Props extends DesignProps {
  children?: React.ReactNode;
  safeAreaTop?: boolean;
  safeAreaBottom?: boolean;
  defaultPadding?: boolean;
}

const ScreenContainer: React.FC<Props> = ({
  children,
  defaultPadding,
  paddingHorizontal = defaultPadding ? DEFAULT_SCREEN_HORIZONTAL_PADDING : 0,
  safeAreaBottom = false,
  safeAreaTop = false,
  ...rest
}) => {
  const insets = useSafeAreaInsets();
  const [backgroundColor] = useThemeColor(['custom-wb']);
  const designProps = designPropToStyle({paddingHorizontal, ...rest});
  const propsStyle = {
    paddingTop: safeAreaTop ? insets.top : 0,
    paddingBottom: safeAreaBottom ? insets.bottom : 0,
    backgroundColor,
  };

  return (
    <View style={[styles.container, propsStyle, designProps]}>{children}</View>
  );
};

export default ScreenContainer;
