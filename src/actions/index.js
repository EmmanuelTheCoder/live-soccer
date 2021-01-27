
import {RANDOM_FIXTURES, SCOTISH_LEAGUE, FRENCH_LEAGUE } from './type'
import {parameters} from '../reducers/changebtn';


const API_KEY = process.env.REACT_APP_API_KEY
export const randomFixtures = () => dispatch =>{
    
    return fetch(`https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${API_KEY}&from=${parameters.from}&to=${parameters.to}`)
    .then(response => response.json())
    .then(data => {
        const randomMatches = data.result.sort(()=> Math.random() - 0.5)
        return dispatch({
        type: RANDOM_FIXTURES,
        payload: randomMatches,
        buttonColor: "randomBtnColor"
    })})
    

}
export const scotishLeague = () => dispatch =>{
    
    return fetch(`https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${API_KEY}&from=${parameters.from}&to=${parameters.to}`)
    .then(response => response.json())
    .then(data => {
        const getSelectedMatches = data.result.filter(res => res.country_name === "Scotland");
        const randomMatches = getSelectedMatches.sort(()=> Math.random() - 0.5);

        return dispatch({
        type: SCOTISH_LEAGUE,
        payload: randomMatches,
        buttonColor: "scotishBtnColor"
    })})
    

}
export const frenchLeague = () => dispatch =>{
    //const fixtures = `https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${apiKey}&from=${parameters.from}&to=${parameters.to}`;
    
    return fetch(`https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${API_KEY}&from=${parameters.from}&to=${parameters.to}`)
    .then(response => response.json())
    .then(data => {
        const getSelectedMatches = data.result.filter(res => res.country_name === "France");
        const randomMatches = getSelectedMatches.sort(()=> Math.random() - 0.5);
        dispatch({
        type: FRENCH_LEAGUE,
        payload: randomMatches,
        buttonColor: "frenchBtnColor"
    })})
    

}

