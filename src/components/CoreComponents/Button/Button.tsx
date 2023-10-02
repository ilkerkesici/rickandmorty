import React from 'react';
import {StyleSheet, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {Icon} from '../Icon/Icon';
import Spinner from '../Spinner/Spinner';
import Text from '../Text/Text';
import {DesignProps} from 'types/design';
import {IconProps} from '../Icon';
import {useThemeColor} from 'helpers/hooks/useThemeColor';
import {designPropToStyle} from 'helpers/utils/design.utils';
import {ColorType} from 'assets/colors';

type ButtonType = 'outline' | 'filled';

interface Props extends DesignProps {
  textStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  onPress?: () => void;
  text: string;
  testID?: string;
  type?: ButtonType;
  iconProps?: IconProps;
  loading?: boolean;
}

export default function Button({
  text,
  textStyle,
  buttonStyle,
  onPress,
  testID,
  type = 'outline',
  iconProps,
  loading,
  ...rest
}: Props) {
  const [filledBg, outlineBg] = useThemeColor([
    'primary.500',
    'transparent',
    'white',
    'primary.500',
  ]);

  const bgColors = {
    filled: filledBg,
    outline: outlineBg,
  };

  const textColors: Record<ButtonType, ColorType> = {
    filled: 'white',
    outline: 'primary.500',
  };

  const designProps = designPropToStyle(rest);

  const onPressButton = () => {
    if (loading) {
      return;
    }
    onPress && onPress();
  };
  console.log(textColors[type]);

  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPressButton}
      style={[
        styles[`${type}-button`],
        styles.row,
        {backgroundColor: bgColors[type]},
        designProps,
        buttonStyle,
      ]}>
      {!loading ? (
        <Text
          style={[
            styles[`${type}-text`],
            textStyle,
            // {color: textColors[type]},
          ]}
          color={textColors[type]}>
          {text}
        </Text>
      ) : null}
      <Spinner size="small" loading={loading} />
      {iconProps && !loading ? <Icon {...iconProps} /> : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  'filled-button': {
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 20,
    height: 54,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  'outline-button': {
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 20,
    height: 54,
    justifyContent: 'center',
  },
  'filled-text': {
    fontSize: 16,
    fontWeight: '800',
  },
  'outline-text': {
    fontSize: 16,
    fontWeight: '800',
  },
});
