//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [homeName, setHomeName] = useState("Lions");
  const [awayName, setAwayName] = useState("Tigers");
  

  

  const handleSubmitHome=event=>{
    event.preventDefault();
    alert(`Submitting:${homeName}`)}

    const handleSubmitAway=event=>{
      event.preventDefault();
      alert(`Submitting:${awayName}`)}
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{homeName}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">12:20</div>
          <div className="away">
            <h2 className="away__name"
            ondblclick={()=>{
              setAwayScore(awayScore-1);
            }}
            >{awayName}</h2>
            <div className="away__score"
            onClick={()=>{
              setAwayScore(awayScore+1);
            }}
            
            >{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      {/* Home Buttons    */}
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}

          {/* form */}
          <form action="submit" onSubmit={handleSubmitHome}>
            <input type="text" name="home" placeholder="add new home team" 
            onChange={(event)=>{setHomeName(event.target.value)}}/>
            <button>Update Home Team</button>
          </form>


          <h4>Touch down</h4>
          <div className="touch-down">
            <button
              className="homeButtons__touchdown"
              onClick={() => {
                setHomeScore(homeScore + 7);
              }}
            >
              {"\u2795"}
            </button>
            <button
              className="homeButtons__touchdown remove"
              onClick={() => setHomeScore(homeScore - 7)}
            >
              {"	\u2796"}
            </button>
          </div>
          <h4>Field goal</h4>
          <div className="field-goal">
            <button
              className="homeButtons__fieldGoal"
              onClick={() => {
                setHomeScore(homeScore + 3);
              }}
            >
              {"\u2795"}
            </button>

            <button
              className="homeButtons__fieldGoal remove"
              onClick={() => setHomeScore(homeScore - 3)}
            >
              {"	\u2796"}
            </button>
          </div>
        </div>

        {/* Away Buttons    */}
        <div className="awayButtons">
          <form action="submit"onSubmit={handleSubmitAway}>
            <input type="text" name="away" placeholder="add new away team" 
            onChange={(event)=>{setAwayName(event.target.value)}}
            />
            <button>Update Away Team</button>
          </form>
          <h4>Touch down</h4>
          <div className="touch-down">
            <button
              className="awayButtons__touchdown"
              onClick={() => {
                setAwayScore(awayScore + 7);
              }}
            >
              {"\u2795"}
            </button>
            <button
              className="awayButtons__touchdown remove"
              onClick={() => {
                setAwayScore(awayScore - 7);
              }}
            >
              {"	\u2796"}
            </button>
          </div>
          <h4>Field goal</h4>
          <div className="field-goal">
            <button
              className="awayButtons__fieldGoal"
              onClick={() => {
                setAwayScore(awayScore + 3);
              }}
            >
              {"\u2795"}
            </button>

            <button
              className="awayButtons__fieldGoal remove"
              onClick={() => {
                setAwayScore(awayScore - 3);
              }}
            >
              {"	\u2796"}
            </button>
          </div>
        </div>
      </section>
      <button
        className="awayButtons__reset"
        onClick={() => {
          setAwayScore(0);
          setHomeScore(0);
        }}
      >
        Reset game
      </button>
    </div>
  );
}

export default App;
