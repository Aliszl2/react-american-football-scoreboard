//TODO: STEP 1 - Import the useState hook.
import React,{ useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      {/* Home Buttons    */}
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown"onClick={()=>{ setHomeScore(homeScore+7)}}>{"\u2795"}Home touchdown(+7)</button>
  <button className="homeButtons__fieldGoal" onClick={()=>{setHomeScore(homeScore + 3)}}>{"\u2795"}Home Field Goal(+3)</button>
        <button className="homeButtons__touchdown remove" onClick={() => setHomeScore(homeScore-7)} >{"	\u2796"}Home remove touch down(-7)</button>
          <button className="homeButtons__fieldGoal remove" onClick={() => setHomeScore(homeScore-3)} >{"	\u2796"}Home remove field goal(-3)</button>
        </div>
        
         {/* Away Buttons    */}
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={()=>{setAwayScore(awayScore+7)}}>{"\u2795"}Away Touchdown(+7)</button>
          <button className="awayButtons__fieldGoal"onClick={()=>{ setAwayScore(awayScore+3)}}>{"\u2795"}Away Field Goal(+3)</button>
          <button className="awayButtons__touchdown remove" onClick={() => {setAwayScore(awayScore-7)}} >{"	\u2796"}remove away touch down</button>
          <button className="awayButtons__fieldGoal remove" onClick={() => {setAwayScore(awayScore-3)}} >{"	\u2796"}remove away field goal</button>
        </div>
          <button className="awayButtons__reset" onClick={() => {setAwayScore(0);setHomeScore(0)}} >Reset game</button>
      </section>
    </div>
  );
}

export default App;
