import React from 'react';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
class LoginByGoogle extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {

        };
        this.signup = this.signup.bind(this);
    }

    signup(res: any) {
        const googleResponse = {
            Name: res.profileObj.name,
            email: res.profileObj.email,
            token: res.googleId,
            Image: res.profileObj.imageUrl,
            ProviderId: 'Google'
        };
        axios.post('http://localhost:60200/Api/Login/SocialmediaData', googleResponse).then((result) => {
            let responseJson = result;
            sessionStorage.setItem("userData", JSON.stringify(result));
            this.props.history.push('/Dashboard')
        });
    };

    render() {
        const responseGoogle = (response: any) => {
            console.log(response);
            var res = response.profileObj;
            console.log(res);
            debugger;
            this.signup(response);
        }

        return (
            <div className="App">
                <div className="row">
                    <div className="col-sm-12 btn btn-info">
                        Login With Google Using ReactJS
                </div>
                </div>
                <div className="row">
                    <div style={{ 'paddingTop': "20px" }} className="col-sm-12">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <GoogleLogin
                                clientId="195566592153-5mu12g8iq5in2grof49q98cjva75fru4.apps.googleusercontent.com"
                                buttonText="Login with Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle} ></GoogleLogin>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginByGoogle
