import {i18n} from 'constants/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch, useAppSelector} from 'reduxStore/hooks';
import {setLanguage} from 'reduxStore/actions/settingActions';
import {getLanguageState} from 'reduxStore/selectors/settingSelector';
import {LanguageType} from 'types/setting';
import {LocalStorageType} from 'constants/localstorage';

const useTranslation = () => {
  const dispatch = useAppDispatch();
  const language = useAppSelector(state => getLanguageState(state));

  const updateLanguage = async (lang: LanguageType) => {
    i18n.locale = lang;
    dispatch(setLanguage(lang));
    await AsyncStorage.setItem(LocalStorageType.LANGUAGE, lang);
  };

  const initTranslation = async () => {
    const localLanguage = await AsyncStorage.getItem(LocalStorageType.LANGUAGE);
    if (localLanguage && localLanguage !== language) {
      i18n.locale = localLanguage;
      dispatch(setLanguage(localLanguage as LanguageType));
    }
  };

  const getLacaliziedLanguage = () => {
    if (language === LanguageType.EN) {
      return i18n.t('language.english');
    }
    return i18n.t('language.turkish');
  };
  const localiziedLanguage = getLacaliziedLanguage();

  return {i18n, language, localiziedLanguage, updateLanguage, initTranslation};
};

export default useTranslation;
