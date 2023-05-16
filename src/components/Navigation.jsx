import React, { useEffect, useState } from "react";
import useLevelStore from "../contexts/LevelContext";
import { db } from "../firebase/init";
import { collection } from "firebase/firestore";

const Navigation = ({ level }) => {
  const [time, setTime] = useState(0);
  const [about, setAbout] = useState(false);
  const [leaderboard, setLeaderboard] = useState(false);
  const [topScores, setTopScores] = useState([]);
  const difficulty = useLevelStore((state) => state.difficulty);

  // Get top 10 scores depending on the level
  useEffect(() => {
    const query = db.collection(level).orderBy("time", "asc").limit(10);

    const unsub = query.onSnapshot((snap) => {
      const documents = snap.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      console.log(`Getting ${collection}`);
      setTopScores(documents);
    });
    return () => unsub();
  }, []);

  // Formats the time nicely
  const formatTime = (time) => {
    const getSeconds = `0${Math.round(time % 60)}`.slice(-2);
    const getMinutes = `0${Math.floor(time / 60) % 60}`.slice(-2);

    return `${getMinutes}:${getSeconds}`;
  };

  // Renders timer; goes up second by second
  useEffect(() => {
    setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  }, []);

  // Resets time when level changes
  useEffect(() => {
    setTime(0);
  }, [difficulty]);

  // Manages the 'about' tab
  const clickManager = () => {
    setAbout(true);
  };
  const closeManager = () => {
    setAbout(false);
  };

  // Manges the 'leaderboard' tab
  const boardManager = () => {
    setLeaderboard(true);
  };
  const closeBoard = () => {
    setLeaderboard(false);
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
            <li className="nav-info" onClick={boardManager}>
              Leaderboard
            </li>
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
      {leaderboard && (
        <table>
          <button className="close-button" onClick={closeBoard}>
            X
          </button>
          <caption>
            <span></span>
            Leaderboard
          </caption>
          <thead>
            <tr>
              <th scope="col">Place</th>
              <th scope="col">Name</th>
              <th scope="col">Time (seconds)</th>
            </tr>
          </thead>
          <tbody>
            {topScores.map((item, i) => {
              return [
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.time}</td>
                </tr>,
              ];
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Navigation;
