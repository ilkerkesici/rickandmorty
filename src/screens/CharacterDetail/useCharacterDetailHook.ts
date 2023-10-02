/* eslint-disable react-hooks/exhaustive-deps */
import {APIEndpointHelper} from 'helpers/ApiEndpointHelper';
import {getEpisodeFromUrl} from 'helpers/utils/parsing.utils';
import {useEffect, useState} from 'react';
import {Episode} from 'types/models';

export default function useCharacterDetailHook(episodes: string[]) {
  const [loading, setLoading] = useState(false);
  const [episodesList, setEpisodes] = useState<Episode[]>([]);

  const getEpisodes = async () => {
    const episodeConcat = episodes
      .slice(0, 5)
      .map(item => getEpisodeFromUrl(item))
      .join(',');
    setLoading(true);
    const result = await APIEndpointHelper.getEpisodes(episodeConcat);
    if (result) {
      setEpisodes(result);
    }
    setLoading(false);
  };

  useEffect(() => {
    getEpisodes();
  }, []);
  return {episodesList, loading};
}
