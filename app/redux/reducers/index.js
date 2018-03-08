import { INIT_ACTION, SEARCH_FLIGHTS, REFINE_BY_PRICE } from '../actions';
const initialState = {
    flights: [],
    extendedSearchFlights: [],
    isRefineByPrice: false,
    isSuccess: false,
    isLoading: false
};

export const flightReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_ACTION:
            return {
                ...state,
                isLoading: true,
                isRefineByPrice: false
            }
        case SEARCH_FLIGHTS:
            return {
                ...state,
                isSuccess: true,
                isLoading: false,
                isRefineByPrice: false,
                flights: action.data
            };

        case REFINE_BY_PRICE:
            return {
                ...state,
                isSuccess: true,
                isLoading: false,
                isRefineByPrice: true,
                extendedSearchFlights: action.data
            };

        default:
            return state;
    }
};
