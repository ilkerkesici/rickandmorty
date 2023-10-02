import HeaderWithScrollView from 'components/Header/HeaderWithScrollView';
import ScreenContainer from 'containers/ScreenContainer/ScreenContainer';
import useTranslation from 'helpers/hooks/useTranslation';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from 'containers/Router/Router.type';
import {Dimensions, Image, StyleSheet} from 'react-native';
import {Block, Spinner, Text} from 'components/CoreComponents';
import useCharacterDetailHook from './useCharacterDetailHook';

type StackRouteProp = RouteProp<RootStackParamList, 'CHARACTER_DETAIL'>;

interface Props {
  route: StackRouteProp;
}
const {width} = Dimensions.get('window');

const PADDING_HORIZONTAL = 20;
const IMAGE_SIZE = width - 2 * PADDING_HORIZONTAL;

export default function CharacterDetail({route}: Props) {
  const {i18n} = useTranslation();
  const {character} = route.params;
  const {loading, episodesList} = useCharacterDetailHook(character.episode);

  return (
    <ScreenContainer>
      <HeaderWithScrollView
        headerProps={{title: i18n.t('character_detail.title'), back: true}}>
        <Block marginHorizontal={PADDING_HORIZONTAL}>
          <Block height={20} />
          <Image source={{uri: character.image}} style={styles.image} />
          <Text marginVertical={20} center>
            {character.name}
          </Text>
          <Text marginVertical={5} center>
            {i18n.t('character_detail.location', {
              location: character.location.name,
            })}
          </Text>
          <Text marginTop={20} marginBottom={10}>
            {i18n.t('character_detail.last_5_episode')}
          </Text>
          {episodesList.map(item => (
            <Text key={item.id} marginVertical={5}>
              {item.name}
            </Text>
          ))}
        </Block>
        <Spinner loading={loading} />
      </HeaderWithScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
});
