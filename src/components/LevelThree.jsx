import React, { useState, useRef, useEffect } from "react";
import LevelThreeBackground from "../assets/images/hard-level.jpg";
import { db, auth } from "../firebase/init";
import { getDocs, collection } from "firebase/firestore";

const LevelThree = () => {
  const [positiveAlert, setPositiveAlert] = useState(false);
  const [coordinates, setCoordinates] = useState([]);
  const [fade, setFade] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const catPicRef = useRef();
  const navHeight = 74.41;

  const fetchPost = async () => {
    await getDocs(collection(db, "coordinates ")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
      setCoordinates(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const clickManager = (e) => {
    const width = catPicRef.current.offsetWidth;
    const height = catPicRef.current.offsetHeight;

    let relX = e.pageX / width;
    let relY = (e.pageY - navHeight) / height;

    const nearX = Math.abs(relX - coordinates[1]["x1"]) < 0.01;
    const nearY = Math.abs(relY - coordinates[1]["y1"]) < 0.01;

    if (nearX && nearY) {
      setPositiveAlert(true);
      setTimeout(() => {
        setGameOver(true);
      }, 3000);
    } else {
      setFade(1);
    }
  };

  return (
    <div>
      {positiveAlert && <div className="green">Cat found! 🐱</div>}
      <div className="red" fade={fade} onAnimationEnd={() => setFade(0)}>
        Try again!
      </div>
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
