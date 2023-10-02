import {APIHelper} from './ApiHelper';
import NetworkError from './errors/NetworkError';
import {CharacterResponse, Episode} from 'types/models';

class ApiEndpointHelper {
  getCharacters = async (page: number) => {
    const result = await APIHelper.get<CharacterResponse>('/api/character/', {
      page,
    });
    if (!result || result instanceof NetworkError) {
      return;
    }

    return result;
  };

  getEpisodes = async (episodes: string) => {
    const result = await APIHelper.get<Episode[]>(
      `/api/character/${episodes}`,
      {},
    );
    if (!result || result instanceof NetworkError) {
      return;
    }

    return result;
  };
}

export const APIEndpointHelper = new ApiEndpointHelper();
