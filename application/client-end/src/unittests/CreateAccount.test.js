import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import CreateAccount from '../components/CreateAccount';
import rootReducer from '../reducers/index';
import axios from 'axios';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
const { container, queryByText, getByDisplayValue } = render(
    <Provider store={store}>
        <Router>
            <CreateAccount/>
        </Router>
    </Provider>
);
const name = 'Jester';
const username = 'jesty';
const email = 'jest@jest.com';
const password = 'ilovedogs';


describe('Testing CreateAccount Unit', () => {
    test('filling out a blank CreatAccount form (front-end)', () => {

        expect(queryByText(name)).not.toBeInTheDocument();
        fireEvent.change(container.querySelector('#input-name'), { target: {value: name }});
        expect(getByDisplayValue(name)).toBeInTheDocument();

        expect(queryByText(username)).not.toBeInTheDocument();  
        fireEvent.change(container.querySelector('#input-username'), { target: {value: username }});
        expect(getByDisplayValue(username)).toBeInTheDocument();

        expect(queryByText(email)).not.toBeInTheDocument();
        fireEvent.change(container.querySelector('#input-email'), { target: {value: email }});
        expect(getByDisplayValue(email)).toBeInTheDocument();

        expect(queryByText(password)).not.toBeInTheDocument();
        fireEvent.change(container.querySelector('#input-password'), { target: {value: password }});
        expect(getByDisplayValue(password)).toBeInTheDocument();
    });
    it('test the back-end', async () => {
        await axios
        .post('http://localhost:8080/api/basicuser/signup',{
            name,
            userName:username,
            email,
            password
        })
        .then((response) => {
            expect(response.status).toBe(201);
            expect(response.statusText).toBe('Created');
            expect(response.data.message).toBe('User successfully created');
            expect(response.data.name === name).toBe(true);
            expect(response.data.email === email).toBe(true);
        });
    });
    test('registering an existing user', async () => {
        await axios
        .post('http://localhost:8080/api/basicuser/signup',{
            name,
            userName:username,
            email,
            password
        })
        .catch((error) => {
            console.log(error.response.data.message)
            expect(error.response.status).toBe(409);
            expect(error.response.data.message).toBe('Email already exists');
        });
    });
});

