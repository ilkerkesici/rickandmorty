import {useThemeColor} from 'helpers/hooks/useThemeColor';
import {designPropToStyle} from 'helpers/utils/design.utils';
import React from 'react';
import {Text as RNText, TextProps} from 'react-native';
import {TextDesignProps} from 'types/design';

interface Props extends TextDesignProps, TextProps {}

export default function Text({
  children,
  color = 'neutral.900',
  style,
  ...rest
}: Props) {
  const [textColor] = useThemeColor([color]);
  const propStyle = designPropToStyle(rest);

  return (
    <RNText {...rest} style={[propStyle, style, {color: textColor}]}>
      {children}
    </RNText>
  );
}
