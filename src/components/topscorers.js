import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {topScorers} from '../actions/index';
import {TOP_SCORERS} from '../actions/type'
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components'


const TopScorers = () =>{
    const dispatch = useDispatch()

    const [scorerIndex, setScorerIndex] = useState([])
    const getScorerIndexFromStore = useSelector(state => state.fetchResult);
    useEffect(()=>{
        dispatch(topScorers(TOP_SCORERS))
    },[dispatch])

    useEffect(()=>{
        setScorerIndex(getScorerIndexFromStore)
        console.log(getScorerIndexFromStore);
    },[getScorerIndexFromStore])

    //goals:  //player_name: //player_place // team_name // team_key //player_key
    return(
        <div>
            <Link to="/" style={{textDecoration: 'none'}}>
                <h1 className="app-name">L<sub>i</sub>ve S<img src="https://img.icons8.com/emoji/28/000000/soccer-ball-emoji.png" alt="o"/><span>cc</span>er</h1>
            </Link>
            
            <h3 style={{textAlign: 'center', textTransform: 'uppercase', 
            fontSize: '1.1rem', 
            padding: '1rem 1rem',
            color: 'rgba(228, 220, 222,.7)'
            }}>top 20 highest goal scorers</h3>

            <div style={{textAlign: 'right', marginBottom: '1.5rem' }}>
                <Link to="/">
                    <button style={{background: 'silver', fontSize: '1rem', fontWeight: 'bold'}}>Return Home</button>
                </Link>
            </div>
            {(typeof scorerIndex != 'undefined') ?(
                
            scorerIndex.map((scorer, i) =>{
            return(
                <ScorerCover key={i}>
                          <p> Player Position: {scorer.player_place}</p>
                           <hr />
                          <p>Number of goals: {scorer.goals}</p>
                           <hr />
                          <p>Player Name: {scorer.player_name}</p>
                           <hr />
                          <p>Team name: {scorer.team_name} </p>
                           <hr />
                
                </ScorerCover>
            )
            })
            ) : <p>Scorers index is currently unavailable!</p>}

            <div style={{textAlign: 'center', paddingBottom: '1.5rem' }}>
                <Link to="/">
                    <button style={{width: '6rem', fontSize: '1rem', fontWeight: 'bolder', background: 'silver'}}>Return Home</button>
                </Link>
            </div>
        </div>
    )
}
export default TopScorers;

const ScorerCover = styled.div`
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    box-shadow: silver 4px 3px 4px 2px;
    width: max-content;
    padding: 1rem 1rem;
    margin: auto;
    background: #fff;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-bottom: 2rem;

    :last-child{
        padding-bottom: 2rem;
    }

`