import axios from "axios";
import { useState } from "react";
import { SET_USER_DOGGYDEX, CLEAR_USER_DOGGYDEX } from "../actions/types";
import authHeader from "../services/auth-header";
import UserService from "../services/user.service";
// import { getUserDoggyDex} from "../services/user.service";
// import UserService from userService


const user = JSON.parse(localStorage.getItem("user"));


const initialState = {
    userDoggyDex: undefined
}

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case SET_USER_DOGGYDEX: 
            return {
                ...state,
                userDoggyDex: payload,
            };
        case CLEAR_USER_DOGGYDEX: 
            return {
                ...state,
                userDoggyDex: undefined,
            };
        default: return state;
    }
}