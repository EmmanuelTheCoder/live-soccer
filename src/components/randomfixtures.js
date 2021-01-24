import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {randomFixtures} from '../actions/index';
import {RANDOM_FIXTURES} from '../actions/type'




const RandomFixtures = () => {
        const dispatch = useDispatch()
        // const checkCountFrom = useSelector(state => state.from);
        const checkLoading = useSelector(state => state.isLoading);
        const checkApiResult = useSelector(state => state.fetchResult)
        
        const [apiData, setApiData] = useState([]);

        const loadingRef =  useRef(checkLoading)
        
    useEffect(()=>{

        dispatch(randomFixtures(RANDOM_FIXTURES ));
        setApiData(checkApiResult);
        console.log("api data", apiData)
        loadingRef.current = false

    },[])
    //const apiKey = '238b9cd32486ce154b1830a00a1b4d237e267d47f2fd833732a75070e1a76212';
    const testClick = () =>{
        // fetch(`https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${apiKey}&from=2021-01-15&to=2021-01-29`)
        // .then(res => res.json())
        // .then(data => console.log(data))
    }
   
    
    return(
        <div>
            <h2>{checkLoading ? "Loading football fixtures" : ""}</h2>
            <button onClick={testClick}>get api information</button>
            
    {(typeof apiData.result != 'undefined') ? (
        apiData.result.map(res=>{
            
            return(
                <FixturesDisplay key={res.event_key} className="display-matches">
                  <p>{res.country_name}</p>
                  <div className="versus">
                      <div>
                          <img src={res.away_team_logo} alt="away logo"/>
                          <h3>{res.event_away_team}</h3>
                      </div>
                          <h2>VS</h2>
                      
                      <div>
                      <img src={res.home_team_logo} alt="home team logo"/>
                          <h3>{res.event_home_team}</h3>
                      </div>
                      {/* match details */}

                  </div>
                      <div className="match-details">
                          <p>league: {res.country_name === "Scotland" ? "Scotish " + res.league_name : "French " + res.league_name}</p>
                           <hr />
                          <p>Match date: {res.event_date}</p>
                           <hr />
                          <p>Time: {res.event_time}</p>
                           <hr />
                          <p>Home team: {res.event_home_team} </p>
                           <hr />
                          <p>League round: {res.league_round}</p>
                           <hr />
                          <p>League season: {res.league_season}</p>
                      </div>
              </FixturesDisplay>
            )
          })   
          ) : (<p>data is still undefined</p>)}
        </div>
    )
}

export default RandomFixtures;


const FixturesDisplay = styled.div`
    background: red;
    
    .versus{
        display: flex;
        justify-content: space-evenly;
        img{
            width: 30px;
        }
        h2{
            margin-top: -.2rem;
        }
    }
    .match-details{
        text-align: center;
        font-size: 1.2rem;
        font-weight: bold;
        box-shadow: silver 5px 7px 9px 6px;
        width: max-content;
        padding: 1rem 1rem;
        margin: auto;
    }
    hr{
        margin: 0 -1rem;
    }
    
    `
    // const fixtures = `https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${apiKey}&from=2021-01-15&to=2021-01-29`;
    // const livescores = 'https://allsportsapi.com/api/football/?met=Livescore&APIkey=!_your_account_APIkey_!';
    // const topscorers = 'https://allsportsapi.com/api/football/?&met=Topscorers&leagueId=258&APIkey=!_your_account_APIkey_!';
