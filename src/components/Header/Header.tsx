import React from 'react';

import {Icon} from 'components/CoreComponents/Icon';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Text} from 'components/CoreComponents';

import {HeaderProps} from './Header.type';
import {useNavigation} from '@react-navigation/native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootNavigation} from 'containers/Router/Router.type';
import {useThemeColor} from 'helpers/hooks/useThemeColor';

export const Header = ({
  title,
  back,
  rightIconProps,
  showHeaderShadow,
  leftIconProps,
  bottomElements,
  headerContainerStyle,
  subContainerStyle,
}: HeaderProps) => {
  const [backgroundColor] = useThemeColor(['custom-wb']);
  const navigation = useNavigation<RootNavigation>();
  const safeAreaInset = useSafeAreaInsets();

  const containerStyle: ViewStyle = {
    paddingTop: safeAreaInset?.top ? safeAreaInset.top + 16 : 16,
    alignSelf: 'stretch',
    backgroundColor,
  };
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <View
      style={[
        containerStyle,
        showHeaderShadow ? styles.shadow : {},
        headerContainerStyle,
      ]}>
      <View style={[styles.container, subContainerStyle, {backgroundColor}]}>
        <View style={styles.leftIconContainer}>
          {back ? (
            <Icon
              onPress={onPressBack}
              name="o:arrow_left"
              color="neutral.900"
            />
          ) : null}
          {leftIconProps ? <Icon {...leftIconProps} /> : null}
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.rightIconContainer}>
          <Icon {...rightIconProps} />
        </View>
      </View>
      {bottomElements}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIconContainer: {
    width: 34,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginRight: 8,
  },
  rightIconContainer: {
    width: 34,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginLeft: 8,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
