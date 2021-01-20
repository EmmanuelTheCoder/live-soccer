import React, {useState, useEffect} from 'react';
import {todayDate, tomorrowDate, nextTomorrowDate, fifteenDate} from '../App';
import styled from 'styled-components'
const RandomFixtures = () =>{

    const apiKey = '238b9cd32486ce154b1830a00a1b4d237e267d47f2fd833732a75070e1a76212';
    const fixtures = `https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${apiKey}&from=2021-01-15&to=2021-01-29`;
    const livescores = 'https://allsportsapi.com/api/football/?met=Livescore&APIkey=!_your_account_APIkey_!';
    const topscorers = 'https://allsportsapi.com/api/football/?&met=Topscorers&leagueId=258&APIkey=!_your_account_APIkey_!';

    const parameters = [
        {
            today: todayDate,
            tomorrow: tomorrowDate,
            nextTomorrow: nextTomorrowDate,
            fifteenDate: fifteenDate
        }
    ]
    const [apiData, setApiData] = useState([]);
    const handleClick = () =>{
        fetch(`https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${apiKey}&from=${todayDate}&to=${fifteenDate}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setApiData(data)
        })
    }
    
    useEffect(()=>{
        //handleClick()
    },[])

    return(
        <div>
            <button onClick={handleClick}>get api information</button>
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
                                <p>Match date: {res.event_date}</p>

                                <p>Time: {res.event_time}</p>
                                <p>Home team: {res.event_home_team} </p>
                                <p>League round: {res.league_round}</p>
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
        text-justify:inter-cluster;
        
    }
`