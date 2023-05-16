import React, { useState, useRef, useEffect } from "react";
import LevelThreeBackground from "../assets/images/hard-level.jpg";
import { db } from "../firebase/init";
import { getDocs, collection } from "firebase/firestore";
import HighScoreForm from "./highScoreForm";
import Navigation from "./Navigation";

const LevelThree = () => {
  const [positiveAlert, setPositiveAlert] = useState(false);
  const [coordinates, setCoordinates] = useState([]);
  const [fade, setFade] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [topScores, setTopScores] = useState([]);

  // Refs in order to get correct coords regardless of screen size
  const catPicRef = useRef();
  const navRef = useRef();

  // Get coords from Firebase
  const fetchPost = async () => {
    await getDocs(collection(db, "coordinates ")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
      setCoordinates(newData);
    });
  };

  // Initialize time at initial render (to compare to the time when the cat is 'found')
  const timeOne = Date.now();

  useEffect(() => {
    fetchPost();
  }, []);

  useEffect(() => {
    const query = db.collection("levelThree").orderBy("time", "asc").limit(10);

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

  const clickManager = (e) => {
    const width = catPicRef.current.offsetWidth;
    const height = catPicRef.current.offsetHeight;

    const navHeight = navRef.current.offsetHeight;

    // Get relative coords
    let relX = e.pageX / width;
    let relY = (e.pageY - navHeight) / height;

    // Checks if user clicks close enough to the cat for it to count as 'found'
    const nearX = Math.abs(relX - coordinates[1]["x1"]) < 0.01;
    const nearY = Math.abs(relY - coordinates[1]["y1"]) < 0.01;

    if (nearX && nearY) {
      // Display cat found alert and then 'game over' alert
      setPositiveAlert(true);
      setTimeout(() => {
        setGameOver(true);
      }, 1500);
      // Records the time it took for the user to find the cat
      const timeTwo = Date.now();
      let x = (timeTwo - timeOne) / 1000;
      setTotalTime(x);
      for (let i = 0; i < topScores.length; i++) {
        // Allow users to write to leaderboard if in top ten
        if (topScores.length < 10) {
          setTimeout(() => {
            setShowForm(true);
          }, 3500);
        } else if (x < topScores[i].time) {
          setTimeout(() => {
            setShowForm(true);
          }, 3500);
        }
      }
    }
    // If cat not found, set negative alert
    else {
      setFade(1);
    }
  };

  return (
    <div>
      <div ref={navRef}>
        <Navigation level="levelThree" />
      </div>
      {positiveAlert && <div className="green">Cat found! 🐱</div>}
      <div className="red" fade={fade} onAnimationEnd={() => setFade(0)}>
        Try again!
      </div>
      {showForm && <HighScoreForm time={totalTime} level="levelThree" />}
      {gameOver && <div className="green">All cats found! 😸</div>}
      <img
        ref={catPicRef}
        src={LevelThreeBackground}
        alt="Level three background"
        onClick={clickManager}
      />
    </div>
  );
};

export default LevelThree;
