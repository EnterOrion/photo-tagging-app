import React, { useState } from "react";
import { db, auth } from "../firebase/init";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

const HighScoreForm = ({ level, time }) => {
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState("");

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, level), {
        name: formData,
        time: time,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <h1>You made it to the top 10!</h1>
          <p>Enter your name below:</p>
          <div className="input-section">
            <input
              type="text"
              onChange={handleChange}
              value={formData}
              name="name"
            ></input>
            <button className="add-score">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default HighScoreForm;
