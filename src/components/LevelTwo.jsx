import React, { useState, useRef, useEffect } from "react";
import LevelTwoBackground from "../assets/images/normal-level.jpg";
import useLevelStore from "../contexts/LevelContext";
import checkInside from "./mappingHelperFunction";
import { db, auth } from "../firebase/init";
import { getDocs, collection } from "firebase/firestore";

const LevelTwo = () => {
  class Point {
    //int x, y;
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }
  const changeDifficulty = useLevelStore((state) => state.changeDifficulty);

  const [positiveAlert, setPositiveAlert] = useState(false);
  const [fade, setFade] = useState(0);
  const [coordinates, setCoordinates] = useState([]);

  const catPicRef = useRef();
  const navHeight = 74.41;

  const fetchPost = async () => {
    await getDocs(collection(db, "coordinates ")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
      setCoordinates(newData);
      console.log(coordinates);
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
    let target = new Point(relX, relY);
    let sides = 4;

    let catTarget = [
      new Point(coordinates[2]["x1"], coordinates[2]["y1"]),
      new Point(coordinates[2]["x2"], coordinates[2]["y2"]),
      new Point(coordinates[2]["x3"], coordinates[2]["y3"]),
      new Point(coordinates[2]["x4"], coordinates[2]["y4"]),
    ];

    if (checkInside(catTarget, sides, target)) {
      setPositiveAlert(true);
      setTimeout(() => {
        changeDifficulty("Hard");
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
      <img
        ref={catPicRef}
        src={LevelTwoBackground}
        alt="Level two background"
        onClick={clickManager}
      />
    </div>
  );
};

export default LevelTwo;
