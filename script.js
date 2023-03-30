// Maps numbers to colors using an object
const colorMap = {
    1: "red",
    2: "blue",
    3: "green",
    4: "yellow",
    5: "white",
    6: "purple"
  };
  
  function mapToColor(num) {
    return colorMap[num];
  }
  
  function rollThreeDice() {
    const diceRolls = [];
    for (let i = 0; i < 3; i++) {
      diceRolls.push(mapToColor(Math.floor(Math.random() * 6) + 1));
    }
    return diceRolls;
  }
  
  const result = rollThreeDice();
 document.write("You rolled: " + result.join(", "));
  