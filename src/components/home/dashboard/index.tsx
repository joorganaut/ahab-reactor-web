import React from 'react';
import { 
    Content, 
    CardLink, 
    Card, 
    CardTitle, 
    CardContent, 
    CardImage, 
    CardContentGrid, 
    CardContentGridColumn, 
    CardContentGridColumnRow } from '../styled';
    import useI18n from '../../../hooks/useI18n';
    import WalletLogo from '../wallet.svg';

export const ServiceDashboard: React.FunctionComponent = ({...props}) => {
    const { t } = useI18n();
    return (<>
        <Content>
            <CardLink href={'/wallet'}>
                <Card image={'/assets/e-wallet-credit-cards.483011629.jpg'}>
                    <CardTitle color={'white'}>{t('dashboard.wallet.title')}</CardTitle>
                    <CardContent>
                        <CardImage src={WalletLogo} />
                    </CardContent>
                </Card>
            </CardLink>
            <CardLink href={'/dashboard'} >
                <Card image={'/assets/card-payments.jpg'}>
                    <CardTitle>{t('dashboard.payments.frequent.title')}</CardTitle>
                    <CardContentGrid>
                        <CardContentGridColumn>
                            <CardContentGridColumnRow />
                            <CardContentGridColumnRow />
                        </CardContentGridColumn>
                        <CardContentGridColumn />
                    </CardContentGrid>
                </Card>
            </CardLink>
            <CardLink href={'/dashboard'} >
                <Card>
                    <CardTitle>{t('dashboard.accounts.home.title')}</CardTitle>
                    <CardContentGrid>
                        <CardContentGridColumn />
                        <CardContentGridColumn />
                    </CardContentGrid>
                </Card>
            </CardLink>
        </Content>
        <Content>
            <CardLink href={'/dashboard'} >
                <Card>
                    <CardTitle>{t('dashboard.payments.methods')}</CardTitle>
                    <CardContentGrid>
                        <CardContentGridColumn />
                        <CardContentGridColumn />
                    </CardContentGrid>
                </Card>
            </CardLink>
            <CardLink href={'/payments'} >
                <Card>
                    <CardTitle>{t('dashboard.accounts.transactions.recurring')}</CardTitle>
                    <CardContentGrid>
                        <CardContentGridColumn>
                            <CardLink full href={'dashboard/airtime'}>
                                <CardContentGridColumnRow />
                            </CardLink>
                            <CardContentGridColumnRow />
                        </CardContentGridColumn>
                        <CardContentGridColumn />
                    </CardContentGrid>
                </Card>
            </CardLink>
            <CardLink href={'/dashboard'} >
                <Card>
                    <CardTitle>{t('dashboard.payments.dispute')}</CardTitle>
                    <CardContentGrid>
                        <CardContentGridColumn>
                            <CardContentGridColumnRow />
                            <CardContentGridColumnRow />
                        </CardContentGridColumn>
                        <CardContentGridColumn />
                    </CardContentGrid>
                </Card>
            </CardLink>
        </Content>
    </>)
}