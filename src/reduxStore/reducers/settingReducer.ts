import {AllSettingActions} from 'reduxStore/dispatchTypes';
import {SettingActionTypes} from 'reduxStore/types';
import {SettingState} from './stateTypes';
import {LanguageType} from 'types/setting';

const INITIAL_STATE: SettingState = {
  theme: 'system',
  language: LanguageType.EN,
};

export default (state = INITIAL_STATE, action: AllSettingActions) => {
  switch (action.type) {
    case SettingActionTypes.setTheme:
      return {
        ...state,
        theme: action.payload,
      };

    case SettingActionTypes.setLanguage:
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
};
