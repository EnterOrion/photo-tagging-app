import React, { useState, useRef, useEffect } from "react";
import { db, auth } from "../firebase/init";
import { getDocs, collection } from "firebase/firestore";
import LevelOneBackground from "../assets/images/easy-level.jpg";
import checkInside from "./mappingHelperFunction";
import HighScoreForm from "./highScoreForm";

const LevelOne = () => {
  class Point {
    //int x, y;
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }

  const [positiveAlert, setPositiveAlert] = useState(false);
  const [fade, setFade] = useState(0);
  const [coordinates, setCoordinates] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [topScores, setTopScores] = useState([]);

  const catPicRef = useRef();

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
    const query = db.collection("levelOne").orderBy("time", "asc").limit(10);

    const unsub = query.onSnapshot((snap) => {
      const documents = snap.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      console.log(`Getting ${collection}`);
      setTopScores(documents);
      console.log(topScores);
    });
    return () => unsub();
  }, []);

  const navHeight = 74.41;

  const clickManager = (e) => {
    const width = catPicRef.current.offsetWidth;
    const height = catPicRef.current.offsetHeight;

    let relX = e.pageX / width;
    let relY = (e.pageY - navHeight) / height;
    let target = new Point(relX, relY);

    let catTarget = [
      new Point(coordinates[0]["x1"], coordinates[0]["y1"]),
      new Point(coordinates[0]["x2"], coordinates[0]["y2"]),
      new Point(coordinates[0]["x3"], coordinates[0]["y3"]),
      new Point(coordinates[0]["x4"], coordinates[0]["y4"]),
      new Point(coordinates[0]["x5"], coordinates[0]["y5"]),
      new Point(coordinates[0]["x6"], coordinates[0]["y6"]),
      new Point(coordinates[0]["x7"], coordinates[0]["y7"]),
      new Point(coordinates[0]["x8"], coordinates[0]["y8"]),
      new Point(coordinates[0]["x9"], coordinates[0]["y9"]),
    ];
    let sides = 9;

    if (checkInside(catTarget, sides, target)) {
      setPositiveAlert(true);
      const timeTwo = Date.now();
      setTotalTime((timeTwo - timeOne) / 1000);
      for (let i = 0; i < topScores.length; i++) {
        if (topScores.length < 10) {
          setShowForm(true);
        } else if (totalTime < topScores[i].time) {
          setShowForm(true);
        }
      }
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
      {showForm && <HighScoreForm time={totalTime} level="levelOne" />}
      <img
        ref={catPicRef}
        src={LevelOneBackground}
        onClick={clickManager}
        alt="Level one background"
      />
    </div>
  );
};

export default LevelOne;
