import React, { useState } from "react";

const moods = [
  {
    label: "Happy",
    emoji: "😊",
    color: "#4CAF50",
    message: "Great to see you happy!",
  },
  {
    label: "Sad",
    emoji: "😢",
    color: "#2196F3",
    message: "Hope things get better soon.",
  },
  {
    label: "Angry",
    emoji: "😡",
    color: "#f44336",
    message: "Take a deep breath.",
  },
  {
    label: "Relaxed",
    emoji: "😌",
    color: "#9C27B0",
    message: "Stay calm and peaceful.",
  },
];

function MoodTracker() {
  const [currentMood, setCurrentMood] = useState(null);
  const [history, setHistory] = useState([]);

  const handleMoodSelect = (mood) => {
    setCurrentMood(mood);
    setHistory([mood, ...history]);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: currentMood ? currentMood.color : "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "0.3s",
      }}>
      <h1>Mood Tracker</h1>

      {/* Current Mood Display */}
      {currentMood && (
        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <h2>
            {currentMood.emoji} {currentMood.label}
          </h2>
          <p>{currentMood.message}</p>
        </div>
      )}

      {/* Mood Selection */}
      <div style={{ display: "flex", gap: "15px" }}>
        {moods.map((mood, index) => (
          <button
            key={index}
            onClick={() => handleMoodSelect(mood)}
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              background: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}>
            {mood.emoji} {mood.label}
          </button>
        ))}
      </div>

      {/* Mood History */}
      {history.length > 0 && (
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <h3>Recent Moods</h3>
          <p>
            {history.slice(0, 5).map((m, i) => (
              <span key={i} style={{ margin: "5px" }}>
                {m.emoji}
              </span>
            ))}
          </p>
        </div>
      )}
    </div>
  );
}

export default MoodTracker;
