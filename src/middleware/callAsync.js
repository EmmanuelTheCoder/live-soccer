import {useSelector} from 'react-redux';



const asynFunc = store => next => action =>{
    if(typeof action === 'function'){
        return action(store.dispatch, store.getState);
    }
    return next(action);
}

const fetchSportApi = (dispatch, getState) =>{
    const storeProductFrom = useSelector(store=>store.from);
    const storeProductTo = useSelector(store=>store.to);
    const apiKey = '238b9cd32486ce154b1830a00a1b4d237e267d47f2fd833732a75070e1a76212';
    const fixtures = `https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${apiKey}&from=${storeProductFrom}&to=${storeProductTo}`;

    fetch(`https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${apiKey}&from=${storeProductFrom}&to=${storeProductTo}`)
    .then(response => response.json())
    .then(data => {
        dispatch({type: 'TODAY', payload: data});
        const allData = getState().data;
        console.log(allData)
    }
}
store