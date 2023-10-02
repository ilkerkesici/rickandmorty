import {createSelector} from '@reduxjs/toolkit';
import {VirtualRootState} from 'reduxStore/store';

export const getThemeState = createSelector(
  (state: VirtualRootState) => state,
  (state: VirtualRootState) => state.setting.theme,
);

export const getLanguageState = createSelector(
  (state: VirtualRootState) => state,
  (state: VirtualRootState) => state.setting.language,
);
