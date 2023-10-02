import {Dispatch} from 'redux';
import {SetLanguageAction, SetThemeAction} from 'reduxStore/dispatchTypes';
import {SettingActionTypes} from 'reduxStore/types';
import {LanguageType, ThemeType} from 'types/setting';

export function setTheme(theme: ThemeType) {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch<SetThemeAction>({
      type: SettingActionTypes.setTheme,
      payload: theme,
    });
  };
}

export function setLanguage(language: LanguageType) {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch<SetLanguageAction>({
      type: SettingActionTypes.setLanguage,
      payload: language,
    });
  };
}
