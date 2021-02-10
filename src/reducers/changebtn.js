//import {parameters} from '../components/randomfixtures';
import { todayDate,  fifteenDate} from '../components/navbar';
import {RANDOM_FIXTURES, SCOTISH_LEAGUE, FRENCH_LEAGUE, TOP_SCORERS} from '../actions/type'

export const parameters = {
    from: '2021-01-22',
    to: '2021-02-02',
    fetchResult: [],
    btnColor: "",
    
}


const changeBtn = (state = parameters, action) => {
    
    switch(action.type){
        case RANDOM_FIXTURES:
            return {
                ...state,
                from: todayDate,
                to: fifteenDate,
                fetchResult: action.payload,
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
            case TOP_SCORERS:
                return {
                    ...state,
                    fetchResult: action.payload
                }
        

        default: 
            return state;
    }
}
export default changeBtn;