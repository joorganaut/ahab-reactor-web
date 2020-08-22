import React from 'react';
import useI18n from '../../../hooks/useI18n';
import { Label } from './styled';

interface LabelProps{
    Title: string;
    Bold?: boolean;
}

export const NameLabel: React.FC<LabelProps> = ({Title}) => {
    const { t } = useI18n();
return(<Label bold={true}>{t(Title)}</Label>)
}