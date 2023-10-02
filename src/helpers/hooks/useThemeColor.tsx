import {useMemo} from 'react';
import {Appearance} from 'react-native';
import {colorPalette, ColorType} from 'assets/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LocalStorageType} from 'constants/localstorage';
import {useAppDispatch, useAppSelector} from 'reduxStore/hooks';
import {ThemeType} from 'types/setting';
import {setTheme} from 'reduxStore/actions/settingActions';
import {getThemeState} from 'reduxStore/selectors/settingSelector';

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const defaultTheme = Appearance.getColorScheme();

  const theme = useAppSelector(state => getThemeState(state));

  const selectTheme = async (newTheme: ThemeType) => {
    dispatch(setTheme(newTheme));
    await AsyncStorage.setItem(LocalStorageType.THEME, newTheme);
  };

  const getLocalSelection = async () => {
    const result = await AsyncStorage.getItem(LocalStorageType.THEME);
    if (!result) {
      return;
    }
    if (result === 'dark') {
      dispatch(setTheme('dark'));
    } else if (result === 'light') {
      dispatch(setTheme('light'));
    } else {
      dispatch(setTheme('system'));
    }
  };

  const isDarkMode =
    theme === 'system' ? defaultTheme === 'dark' : theme === 'dark';

  return {
    theme: isDarkMode ? 'dark' : 'light',
    isDarkMode: isDarkMode,
    selectTheme,
    getLocalSelection,
  };
};

export const useThemeColor = (colorKey?: Array<ColorType | undefined>) => {
  const {isDarkMode} = useTheme();

  const palette = useMemo(() => colorPalette(!isDarkMode), [isDarkMode]);

  const hexList: string[] = [];

  colorKey?.forEach(d => {
    if (d) {
      hexList.push(palette[d]);
    }
  });

  return hexList;
};
