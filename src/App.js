import {useEffect} from 'react';
import './App.css';
import footballbg from './pictures/football-bg.gif';
import RandomFixtures from './components/randomfixtures';
import {useDispatch} from 'react-redux';
import {todaybtn} from './actions'

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
  
  
  return (
   <div className="app">
     <h1 className="app-name">L<sub>i</sub>ve S<img src="https://img.icons8.com/emoji/28/000000/soccer-ball-emoji.png" alt="soccer"/><span>cc</span>er</h1>
      <div className="date-btn">
        <button>Random dates</button>
        <button onClick={()=>dispatch(todaybtn)}>{todayDate}</button>
        <button>{tomorrowDate}</button>
        <button>{nextTomorrowDate}</button>
      </div>
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
