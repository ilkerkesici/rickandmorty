import React from 'react';
import ScreenContainer from 'containers/ScreenContainer/ScreenContainer';
import useTranslation from 'helpers/hooks/useTranslation';
import useHomeHook from './useHomeHook';
import {Header} from 'components/Header/Header';
import {FlatList, Image, StyleSheet} from 'react-native';
import {Character} from 'types/models';
import {Block, Spinner, Text} from 'components/CoreComponents';

export default function Home() {
  const {i18n} = useTranslation();
  const {loading, characters, onReachEnd, onPressItem} = useHomeHook();

  const renderItem = ({item}: {item: Character}) => (
    <Block
      onPress={() => onPressItem(item)}
      flexDirection="row"
      marginVertical={5}
      marginHorizontal={20}>
      <Image style={styles.image} source={{uri: item.image}} />
      <Text marginLeft={20}>{item.name}</Text>
    </Block>
  );

  return (
    <ScreenContainer safeAreaBottom>
      <Header title={i18n.t('home.title')} />
      <FlatList
        data={characters}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.3}
        onEndReached={onReachEnd}
      />
      <Spinner loading={loading} />
    </ScreenContainer>
  );
}

const keyExtractor = (character: Character) => character.id.toString();

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 120,
  },
});
