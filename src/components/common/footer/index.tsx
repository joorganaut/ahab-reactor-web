import React from 'react';
import { BottomBanner, Copyright } from './styled';
import useI18n from '../../../hooks/useI18n';

const Footer = () => {
    const { t } = useI18n();
    return <BottomBanner>
        <Copyright>&copy;{new Date().getFullYear() + ' ' + t('company.name')}</Copyright>
         </BottomBanner>
}
export default Footer;