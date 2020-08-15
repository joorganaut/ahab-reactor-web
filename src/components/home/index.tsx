import React from 'react';
import BasePage from './../common/page/basePage';
import { theme } from '../../styles/global';
import Navbar from '../common/navbar/index'
export default class DashBoard extends BasePage {
    componentDidMount() {
        this.setState({ IsLoading: false, LoadingTitle: 'Loading' });
    }
    renderPage = () => {
        return (<>
            <Navbar />
        </>
        )
    }
    render() {
        return (<>
            {this.renderAllComponents(this.renderPage())}
        </>)
    }
}