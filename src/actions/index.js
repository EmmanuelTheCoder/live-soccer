// export const todaybtn = () =>{
//     return{
//         type: 'TODAY'
//     }
// }
import {RANDOM_FIXTURES, TODAY_fIXTURES, TOMORROW_FIXTURES, NEXT_TOMORROW_FIXTURES } from './type'
import {parameters} from '../reducers/changebtn';


const apiKey = '238b9cd32486ce154b1830a00a1b4d237e267d47f2fd833732a75070e1a76212';
export const randomFixtures = () => dispatch =>{
    //const fixtures = `https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${apiKey}&from=${parameters.from}&to=${parameters.to}`;
    
    return fetch(`https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${apiKey}&from=${parameters.from}&to=${parameters.to}`)
    .then(response => response.json())
    .then(data => dispatch({
        type: RANDOM_FIXTURES,
        payload: data,
    }))
    

}
export const todayFixtures = () => dispatch =>{
    //const fixtures = `https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${apiKey}&from=${parameters.from}&to=${parameters.to}`;
    
    return fetch(`https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${apiKey}&from=${parameters.from}&to=${parameters.to}`)
    .then(response => response.json())
    .then(data => dispatch({
        type: TODAY_fIXTURES,
        payload: data,
    }))
    

}
export const tomorrowFixtures = () => dispatch =>{
    //const fixtures = `https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${apiKey}&from=${parameters.from}&to=${parameters.to}`;
    
    return fetch(`https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${apiKey}&from=${parameters.from}&to=${parameters.to}`)
    .then(response => response.json())
    .then(data => dispatch({
        type: TOMORROW_FIXTURES,
        payload: data,
    }))
    

}
export const nextTomorrowFixtures = () => dispatch =>{
    //const fixtures = `https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${apiKey}&from=${parameters.from}&to=${parameters.to}`;
    
    return fetch(`https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${apiKey}&from=${parameters.from}&to=${parameters.to}`)
    .then(response => response.json())
    .then(data => dispatch({
        type: NEXT_TOMORROW_FIXTURES,
        payload: data,
    }))
    

}
