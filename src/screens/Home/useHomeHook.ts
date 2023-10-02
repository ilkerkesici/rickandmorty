/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import {RootNavigation} from 'containers/Router/Router.type';
import {APIEndpointHelper} from 'helpers/ApiEndpointHelper';
import {getPageFromUrl} from 'helpers/utils/parsing.utils';
import {useEffect, useState} from 'react';
import {Character, ResponseInfo} from 'types/models';

export default function useHomeHook() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [charactersInfo, setCharactersInfo] = useState<ResponseInfo | null>(
    null,
  );
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<RootNavigation>();

  const onPressItem = (character: Character) => {
    navigation.navigate('CHARACTER_DETAIL', {character});
  };

  const getData = async (page: number) => {
    setLoading(true);
    const response = await APIEndpointHelper.getCharacters(page);
    if (response) {
      setCharactersInfo(response.info);
      if (page === 1) {
        setCharacters(response.results);
      } else {
        setCharacters([...characters, ...response.results]);
      }
    }
    setLoading(false);
  };

  const onReachEnd = async () => {
    if (!charactersInfo || !charactersInfo.next || loading) {
      return;
    }
    const page = getPageFromUrl(charactersInfo?.next);
    if (!page) {
      return;
    }
    getData(page);
  };

  useEffect(() => {
    getData(1);
  }, []);

  return {loading, characters, onReachEnd, onPressItem};
}
