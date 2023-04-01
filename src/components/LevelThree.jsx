import React, { useState, useRef, useEffect } from "react";
import LevelThreeBackground from "../assets/images/hard-level.jpg";
import { db, auth } from "../firebase/init";
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

  const catPicRef = useRef();
  const navRef = useRef();

  const fetchPost = async () => {
    await getDocs(collection(db, "coordinates ")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
      setCoordinates(newData);
    });
  };

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

    let relX = e.pageX / width;
    let relY = (e.pageY - navHeight) / height;

    const nearX = Math.abs(relX - coordinates[1]["x1"]) < 0.01;
    const nearY = Math.abs(relY - coordinates[1]["y1"]) < 0.01;

    if (nearX && nearY) {
      setPositiveAlert(true);
      setTimeout(() => {
        setGameOver(true);
      }, 1500);
      const timeTwo = Date.now();
      let x = (timeTwo - timeOne) / 1000;
      setTotalTime(x);
      for (let i = 0; i < topScores.length; i++) {
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
    } else {
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
