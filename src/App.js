import {useCallback, useEffect, useState} from 'react';
import './App.css';
import RandomFixtures from './components/randomfixtures';
import {useDispatch, useSelector} from 'react-redux';
import {RANDOM_FIXTURES, SCOTISH_LEAGUE, FRENCH_LEAGUE } from './actions/type';
import {randomFixtures, scotishLeague, frenchLeague} from './actions/index'

//today's date
const today = new Date();
const todayFormat = today.toISOString();
export const todayDate = todayFormat.slice(0,10);

//tomorrow's date
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1)
const tomorrowFormat = tomorrow.toISOString();
export const tomorrowDate = tomorrowFormat.slice(0,10);

//next tomorrow's date
const nextTomorrow = new Date();
nextTomorrow.setDate(tomorrow.getDate() + 1);
const nextTomorrowFormat = nextTomorrow.toISOString();
export const nextTomorrowDate = nextTomorrowFormat.slice(0,10);

//next fifteen days date

const fifteen = new Date();
fifteen.setDate(today.getDate() + 14);
const fifteenFormat = fifteen.toISOString();
export const fifteenDate = fifteenFormat.slice(0,10);


function App() {
  
  useEffect(()=>{
  },[]);
  const dispatch = useDispatch();

  const [getCountryLeague, setGetCountryLeague] = useState("Random Fixtures")

  const randomButtonColor = useSelector(state => state.btnColor)

  const handleFrenchLeague = useCallback(()=>{
      dispatch(frenchLeague(FRENCH_LEAGUE));
      setGetCountryLeague("French league 2");
  },[ dispatch])

  const handleScotishLeague = useCallback(()=>{
    dispatch(scotishLeague(SCOTISH_LEAGUE));
    setGetCountryLeague("Scotish Premiership");
  }, [dispatch])

  const handleRandomLeague = useCallback(()=>{
    dispatch(randomFixtures(RANDOM_FIXTURES));
    setGetCountryLeague("Random Fixtures")
  },[dispatch])
 
  
  
  return (
   <div className="app">
     <h1 className="app-name">L<sub>i</sub>ve S<img src="https://img.icons8.com/emoji/28/000000/soccer-ball-emoji.png" alt="soccer"/><span>cc</span>er</h1>
      <div className="date-btn">
        <button onClick={handleRandomLeague} style={{background: randomButtonColor === "randomBtnColor" ? "rgba(222,45,56,.4)" : "silver", color: randomButtonColor === "randomBtnColor" ? "white" : "black"}}>Random</button>
        <button onClick={handleFrenchLeague} style={{background: randomButtonColor === "frenchBtnColor" ? "rgba(222,45,56,.4)" : "silver", color: randomButtonColor === "frenchBtnColor" ? "white" : "black"}}>French League2</button>
        <button onClick={handleScotishLeague} style={{background: randomButtonColor === "scotishBtnColor" ? "rgba(222,45,56,.4)" : "silver", color: randomButtonColor === "scotishBtnColor" ? "white" : "black"}}> Scotish Premiership</button>
        
      </div>

      <h1 style={{textAlign: 'center', color: 'rgba(228, 220, 222,.7)'}}>{getCountryLeague}</h1>
      <RandomFixtures />
   </div>
   
    
  );
}

export default App;



// const [colorChange, setColorChange] = useState(false);
  
  // const passRef = useRef()
  
  // const handleColorChange = () =>{
  //   setColorChange(!colorChange);
    
  // }
  // const btnColor = colorChange ? "blackButton" : "blueButton";
  // let btnColor2 = ""
  
  // function reducer(state, action){
  //   switch(action.type){
  //     case 'today':
  //       setColorChange(!state);
  //       btnColor2 = colorChange ? "blackButton" : "blueButton";
  //       break;
  //     case 'tomorrow':
  //       setColorChange(!state);
  //       btnColor2 = colorChange ? "blackButton" : "blueButton";
  //       break;
  //     case 'nextTomorrow':
  //       setColorChange(!state);
  //       btnColor2 = colorChange ? "blackButton" : "blueButton";
  //       break;
  //     default: 
        
  //   }
  // }
  // const [state, dispatch] = useReducer(reducer, colorChange);
