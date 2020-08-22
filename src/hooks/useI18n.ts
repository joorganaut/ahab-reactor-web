import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const useI18n = () => {
    const { i18n, ...rest } = useTranslation();
    const [currentLanguage] = useState('en-US');

    return {currentLanguage, i18n, ...rest};
}
export default useI18n;

