import "./index.css";
import { useState } from "react";

const MakeChance = () => {
  const [chance, setChance] = useState(null);

  const handleChance = () => {
    const randomChance = Math.floor(Math.random() * 100) + 1;
    setChance(randomChance);
  };
  const getStateColor = () => {
    if (chance > 70) return "green";
    if (chance >= 50) return "yellow";
    return "red";
  };
  return (
    <section className="box">
      <h1>Make Chance Box</h1>
      <div className="chanceBox">
        <p style={{color: getStateColor()}}>{chance}</p>
      </div>
      <button onClick={handleChance}>Make a Chance</button>
    </section>
  );
}

export default MakeChance;
