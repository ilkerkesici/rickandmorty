import {I18n} from 'i18n-js';

import en from 'assets/locales/en';
import tr from 'assets/locales/tr';
import {LanguageType} from 'types/setting';

export const i18n = new I18n({[LanguageType.TR]: tr, [LanguageType.EN]: en});
i18n.locale = LanguageType.TR;
i18n.defaultLocale = LanguageType.TR;
