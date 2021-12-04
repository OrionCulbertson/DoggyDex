import { IS_DOG_UPLOADED } from "../actions/types";

const initialState = {
    isDogUploaded: false,
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    
    switch (type) {
        case IS_DOG_UPLOADED:
            return { isDogUploaded: payload };
        
        default:
            return state;
    }
}

