import AsyncStorage from '@react-native-async-storage/async-storage';
import {LocalStorageType} from 'constants/localstorage';

class SessionHelperSingelton {
  token = '';

  setSessionToken(newToken: string) {
    this.token = newToken;

    AsyncStorage.setItem(LocalStorageType.TOKEN, newToken);
  }

  removeToken() {
    this.token = '';
    AsyncStorage.removeItem(LocalStorageType.TOKEN);
  }

  async init(): Promise<boolean | undefined> {
    const localToken = await AsyncStorage.getItem(LocalStorageType.TOKEN);

    if (localToken) {
      this.setSessionToken(localToken);
      return true;
    }
    return false;
  }
}

export const SessionHelper = new SessionHelperSingelton();
