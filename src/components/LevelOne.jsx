import React, {useState} from "react";
import useLevelStore from "../contexts/LevelContext";
import LevelOneBackground from "../assets/images/easy-level.jpg"

const LevelOne = () => {
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
                changeDifficulty('Normal')
            }, 3000)
            
        }
    }


        
   
    return (
        <div>
            {positiveAlert && <div className="green">Cat found! 🐱</div>}
            {negativeAlert && <div className="red">Try again!</div>}
            <img src={LevelOneBackground} onClick={clickManager} alt="Level one background" />
            
        </div>
    )
}

export default LevelOne;