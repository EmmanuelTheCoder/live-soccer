//import {parameters} from '../components/randomfixtures';
import { todayDate, tomorrowDate, nextTomorrowDate, fifteenDate} from '../App';
import {RANDOM_FIXTURES, TODAY_fIXTURES, TOMORROW_FIXTURES, NEXT_TOMORROW_FIXTURES} from '../actions/type'

export const parameters = {
    from: '2021-01-22',
    to: '2021-02-02',
    fetchResult: [],
    isloading: false
}


const changeBtn = (state = parameters, action) => {
    console.log("this is the reducer")
    switch(action.type){
        case RANDOM_FIXTURES:
            return {
                ...state,
                from: todayDate,
                to: fifteenDate,
                fetchResult: action.payload,
                isLoading: true
            }
        case TODAY_fIXTURES:
            return {
                ...state,
                from:todayDate,
                to: todayDate,
                fetchResult: action.payload
            }
        case TOMORROW_FIXTURES:
            return {
                ...state,
                from: tomorrowDate,
                to: tomorrowDate,
                fetchResult: action.payload
            }
        case NEXT_TOMORROW_FIXTURES: 
            return {
                ...state,
                from: nextTomorrowDate,
                to: nextTomorrowDate,
                fetchResult: action.payload
            }

        default: 
            return state;
    }
}
export default changeBtn;