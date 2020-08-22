import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './languages/en.json';
import fr from './languages/fr.json';
const init = async () => {
    return await i18n
    .use(initReactI18next)
    .init({
        lng: 'en-US',
        fallbackLng: 'en-US',
        debug: process.env.NODE_ENV !== 'production',
        interpolation:{
            escapeValue: false,
        },

        resources:{
            'en-US': {
                translation: en,
            },
            fr: {
                translation: fr,
            }
        }
    })
}
export default init;