// Setting Actions

import {SettingActionTypes} from './types';
import {ThemeType, LanguageType} from 'types/setting';

export interface SetThemeAction {
  type: SettingActionTypes.setTheme;
  payload: ThemeType;
}

export interface SetLanguageAction {
  type: SettingActionTypes.setLanguage;
  payload: LanguageType;
}

export type AllSettingActions = SetThemeAction | SetLanguageAction;
