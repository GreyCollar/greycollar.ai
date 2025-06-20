const generateRandomDarkColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 30) + 15; // 15-45%
  const lightness = Math.floor(Math.random() * 8) + 2; // 2-10% (extremely dark)
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const generateRandomDarkGradient = () => {
  const directions = ["135deg", "45deg", "225deg", "315deg", "180deg", "90deg"];
  const direction = directions[Math.floor(Math.random() * directions.length)];

  const color1 = generateRandomDarkColor();
  const color2 = generateRandomDarkColor();
  const color3 = generateRandomDarkColor();
  const color4 = generateRandomDarkColor();

  return `linear-gradient(${direction},
    ${color1} 0%,
    ${color2} 25%,
    ${color3} 50%,
    ${color4} 75%,
    ${color1} 100%)`;
};

export { generateRandomDarkColor, generateRandomDarkGradient };
