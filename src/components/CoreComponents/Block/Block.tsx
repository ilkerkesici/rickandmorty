import {useThemeColor} from 'helpers/hooks/useThemeColor';
import {designPropToStyle} from 'helpers/utils/design.utils';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {BlockProps, DesignProps} from 'types/design';

export interface Props extends BlockProps, DesignProps {
  children?: React.ReactNode;
  onPress?: () => void;
}

export default function Block({
  children,
  onPress,
  backgroundColor,
  borderColor = 'transparent',
  ...rest
}: Props) {
  const [backgroundColorHex, borderColorHex] = useThemeColor([
    backgroundColor,
    borderColor,
  ]);
  const designProps = designPropToStyle({
    ...rest,
  });
  const borderStyle = {borderColor: borderColorHex};

  if (onPress) {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        style={[
          designProps,
          borderStyle,
          {backgroundColor: backgroundColorHex},
        ]}>
        {children}
      </TouchableOpacity>
    );
  }
  return (
    <View style={[designProps, {backgroundColor: backgroundColorHex}]}>
      {children}
    </View>
  );
}
