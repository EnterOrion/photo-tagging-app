import React, {useState} from "react";
import LevelThreeBackground from "../assets/images/hard-level.jpg";

const LevelThree = () => {
    const [positiveAlert, setPositiveAlert] = useState(false);
    const [negativeAlert, setNegativeAlert] = useState(false);

    // eslint-disable-next-line no-unused-vars
    const [catFound, setCatFound] = useState(true);

    const clickManager = () => {
        if (catFound === false) {
            setNegativeAlert(true);
            
        }
        else {
            setPositiveAlert(true);
        
        }
    }

    return (
        <div>
            {positiveAlert && <div className="green">Cat found! 🐱</div>}
            {negativeAlert && <div className="red">Try again!</div>}
            <img src={LevelThreeBackground} alt="Level three background"  onClick={clickManager} />
        </div>
    )
}

export default LevelThree;