import React, {useState} from "react";
import LevelTwoBackground from "../assets/images/normal-level.jpg";
import useLevelStore from "../contexts/LevelContext";



const LevelTwo = () => {
    const changeDifficulty = useLevelStore((state) => state.changeDifficulty)

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
            setTimeout(() => {
                changeDifficulty('Hard')
            }, 3000)
            
        }
    }
    return (
        <div>
            {positiveAlert && <div className="green">Cat found! 🐱</div>}
            {negativeAlert && <div className="red">Try again!</div>}
            <img src={LevelTwoBackground} alt="Level two background" onClick={clickManager} />
        </div>
    )
}


export default LevelTwo;