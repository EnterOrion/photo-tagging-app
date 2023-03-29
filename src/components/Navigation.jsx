import React, { useEffect, useState } from "react";
import useLevelStore from "../contexts/LevelContext";

const Navigation = () => {
  const [time, setTime] = useState(0);
  const [about, setAbout] = useState(false);
  const difficulty = useLevelStore((state) => state.difficulty);

  const formatTime = (time) => {
    const getSeconds = `0${Math.round(time % 60)}`.slice(-2);
    const getMinutes = `0${Math.floor(time / 60) % 60}`.slice(-2);

    return `${getMinutes}:${getSeconds}`;
  };

  useEffect(() => {
    setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    console.log(time - 3);
    setTime(0);
  }, [difficulty]);

  const clickManager = () => {
    setAbout(true);
  };

  const closeManager = () => {
    setAbout(false);
  };

  return (
    <div>
      <nav>
        <ul>
          <div className="logo-column">
            <li className="logo-text">Where's the cat?</li>
          </div>
          <div className="info-column">
            <li>{formatTime(time)}</li>
            <li>
              Difficulty:{" "}
              <span className="difficulty-display">{difficulty}</span>
            </li>
            <li className="nav-info">Leaderboard</li>
            <li className="nav-info" onClick={clickManager}>
              About
            </li>
          </div>
        </ul>
      </nav>
      {about && (
        <div className="about">
          <button className="close-button" onClick={closeManager}>
            X
          </button>
          <h1>About</h1>
          <div className="about-text">
            <p>
              This game was inspired by <em>'Where's Waldo?'</em>. Instead of
              finding Waldo, you have to find the cat hidden in each photo! Try
              to do it quickly to compete for{" "}
              <strong>a spot on the leaderboard!</strong>
            </p>
            <p>
              All the photos are courtesy of the <em>There Is No Cat</em>{" "}
              subreddit. <br />
              Made by <strong>EnterOrion</strong> using React and Firebase.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
