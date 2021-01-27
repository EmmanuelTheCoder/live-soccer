//import {parameters} from '../components/randomfixtures';
import { todayDate,  fifteenDate} from '../App';
import {RANDOM_FIXTURES, SCOTISH_LEAGUE, FRENCH_LEAGUE} from '../actions/type'

export const parameters = {
    from: '2021-01-22',
    to: '2021-02-02',
    fetchResult: [],
    isloading: false,
    btnColor: ""
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
                isLoading: true,
                btnColor: action.buttonColor
            }
            case SCOTISH_LEAGUE:
                return {
                    ...state,
                    from:todayDate,
                    to: fifteenDate,
                    fetchResult: action.payload,
                    btnColor: action.buttonColor
                }
                case FRENCH_LEAGUE:
                    return {
                        ...state,
                        from: todayDate,
                        to: fifteenDate,
                        fetchResult: action.payload,
                        btnColor: action.buttonColor
            }
        

        default: 
            return state;
    }
}
export default changeBtn;