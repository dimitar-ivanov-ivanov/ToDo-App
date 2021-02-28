import axios from 'axios';

class AuthenticationService {

    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors();
        //once the user is logged
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) {
            return false;
        }
        return true;
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) return ''
        return user;
    }

    //intercept every request and add a authorization header
    setupAxiosInterceptors() {
        let username = 'in28minutes';
        let password = 'dummy';

        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password);

        console.log("intercept 1");
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    console.log("intercept 1");
                    config.headers.authorizaion = basicAuthHeader
                }
                return config;
            }
        )
    }
}

export default new AuthenticationService();