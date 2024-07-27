import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { observable, action } from 'mobx';
import ru from '@shared/localization/languages/ru';
import en from '@shared/localization/languages/en';

class LanguageStore {
    @observable currentLanguage = 'en';

    @action changeLanguage = (lng: 'ru' | 'en') => {
        this.currentLanguage = lng;
        i18n.changeLanguage(lng);
    }
}

const languageStore = new LanguageStore();

i18n
    .use(initReactI18next)
    .init({
        lng: languageStore.currentLanguage,
        fallbackLng: 'en',
        resources: {
            en: {
                translation: en
            },
            ru: {
                translation: ru
            }
        },
        interpolation: {
            escapeValue: false
        }
    });

export default languageStore;
