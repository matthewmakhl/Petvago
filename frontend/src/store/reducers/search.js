import * as actionTypes from '../actions';

const initialState = {
    startDate: '',
    endDate: '',
    district: '',
    petType:'',
    hotelChosenForBooking:1,
};

const reducer = ( state = initialState, action ) => {
    // eslint-disable-next-line default-case
    switch ( action.type ) {
        case actionTypes.SEARCHHOTEL:
        console.log(action.state.district)
            return {
                ...state,
                startDate: action.state.startDate,
                endDate: action.state.endDate,
                district: action.state.district,
                petType: action.state.petType
            }
        default:
            return state;
    }
    
};

export default reducer;