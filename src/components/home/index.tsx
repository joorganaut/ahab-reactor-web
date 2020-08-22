import React from 'react';
import BasePage from './../common/page/basePage';
import Navbar from '../common/navbar/';
import Footer from '../common/footer';
import {
    Banner,
    BannerChild,
    SideNavOpenButton,
    SideNavOpenButtonIcon,
    Link,
    SideNav,
    SideNavMenu,
    SideNavCloseButton,
    ContentWrapper,
    SideNavMenuItem,
    SideNavMenuItemIcon,
    SideNavMenuItemLabel,
} from './styled';
import { ServiceDashboard } from './dashboard';
import Exchange from './../bills/exchange';
import { withTranslation, WithTranslation } from 'react-i18next';

interface DashBoardProps extends WithTranslation {
    open: boolean
}

class DashBoard extends BasePage<DashBoardProps, any> {
    Content: any;
    constructor(props: any) {
        super(props);
        const path = props.location.pathname.split('/');

        this.state = {
            open: false,
            isModalOpen: false,
            urlQuery: path[path.length-1],
            background: undefined
        }
        this.Content = (<></>);
    }
    componentDidMount() {
        this.setState({ IsLoading: true, LoadingTitle: 'Loading' });
        switch(this.state.urlQuery){
            case 'exchange':{
                this.Content = (<Exchange/>);
                this.setState({background : '/assets/payments.jpg'})
                break;
            }
            case 'dashboard':{
                this.Content = (<ServiceDashboard/>)
                break;
            }
            default:{
                this.Content = (<ServiceDashboard/>); /*TODO: design error page*/
                break;
            }
        }
        this.setState({ IsLoading: false, LoadingTitle: 'Loading' });
    }
    toggleState = (e: any) => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
        alert(this.state.isModalOpen);
    };
    renderPage = () => {
        return (<>
            <Banner>
                <BannerChild textAlign={'start'}>
                    <SideNavOpenButton onClick={(e: any) => this.setState({ open: !this.state.open })}>
                        <SideNavOpenButtonIcon src={'/icons/white-hamburger.jpg'} alt={'open sesame'} />
                    </SideNavOpenButton>
                </BannerChild>
                <BannerChild textAlign={'end'}>
                    <Link href={'/dashboard'}>{this.props.t('dashboard.paypoint')}</Link>
                </BannerChild>
            </Banner>
            <Navbar name={'Osazee Igbinosun'} />
            <SideNav open={this.state.open}>
                <SideNavMenu className="sidenav">
                    <SideNavCloseButton onClick={(e: any) => this.setState({ open: !this.state.open })} ></SideNavCloseButton>
                    <SideNavMenuItem href="/dashboard">
                        <SideNavMenuItemIcon src={'/icons/gb/home.svg'} />
                        <SideNavMenuItemLabel>{this.props.t('sidebar.actions.dashboard')}</SideNavMenuItemLabel>
                    </SideNavMenuItem>
                    <SideNavMenuItem href="/transfer">
                        <SideNavMenuItemIcon src={'/icons/gb/currency_exchange.svg'} />
                        <SideNavMenuItemLabel>{this.props.t('sidebar.actions.transfer')}</SideNavMenuItemLabel>
                    </SideNavMenuItem>
                    <SideNavMenuItem href="airtime">
                        <SideNavMenuItemIcon src={'/icons/gb/phone_android.svg'} />
                        <SideNavMenuItemLabel>{this.props.t('sidebar.actions.airtime')}</SideNavMenuItemLabel>
                    </SideNavMenuItem>
                    <SideNavMenuItem href="/billspayment">
                        <SideNavMenuItemIcon src={'/icons/gb/sales_performance.svg'} />
                        <SideNavMenuItemLabel>{this.props.t('sidebar.actions.billsPayment')}</SideNavMenuItemLabel>
                    </SideNavMenuItem>
                    <SideNavMenuItem href="/messages">
                        <SideNavMenuItemIcon src={'/icons/gb/about.svg'} />
                        <SideNavMenuItemLabel>{this.props.t('sidebar.actions.notifications')}</SideNavMenuItemLabel>
                    </SideNavMenuItem>
                    <SideNavMenuItem href="/dashboard/exchange">
                        <SideNavMenuItemIcon src={'/icons/gb/tree_structure.svg'}/>
                        <SideNavMenuItemLabel>{this.props.t('sidebar.actions.exchange')}&trade;</SideNavMenuItemLabel>
                    </SideNavMenuItem>
                </SideNavMenu>
            </SideNav>
            <ContentWrapper bg={this.state.background}>
                {/* <ServiceDashboard/> */}
                {this.Content}
            </ContentWrapper>
            <Footer />
        </>
        )
    }
    render() {
        return (<>
            {this.renderAllComponents(this.renderPage())}
        </>)
    }
}
export default withTranslation()(DashBoard);