export function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
export function shuffleArray(array) {
  let newArray = array;
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}