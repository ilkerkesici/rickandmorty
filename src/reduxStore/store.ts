import {AnyAction} from 'redux';
import {configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import reducers from 'reduxStore/reducers';
import {SettingState} from './reducers/stateTypes';

export const store = configureStore({reducer: reducers});

export type IRootState = ReturnType<typeof reducers>;

export type RootState = ReturnType<typeof store.getState>;
export type VirtualRootState = {
  setting: SettingState;
};

export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;
