import axios from 'axios';
import AuthenticationService from '../components/todo/AuthenticationService';

class TodoDataService {
    retrieveAllTodos(name) {
        this.setupAxiosInterceptors();
        return axios.get(`http://localhost:8080/users/${name}/todos`);
    }

    retrieveTodo(name, id) {
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
    }

    deleteTodo(name, id) {
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
    }

    updateTodo(name, id, todo) {
        return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
    }

    createTodo(name, todo) {
        return axios.post(`http://localhost:8080/users/${name}/todos/`, todo);
    }

    setupAxiosInterceptors() {
        let username = 'in28minutes';
        let password = 'dummy';

        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password);

        console.log("intercept 1");
        axios.interceptors.request.use(
            (config) => {
                if (AuthenticationService.isUserLoggedIn()) {
                    console.log("intercept 1");
                    config.headers.authorizaion = basicAuthHeader
                }
                return config;
            }
        )
    }
}

export default new TodoDataService();