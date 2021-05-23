
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
export function types(type){
  const types = {
    bug: "bg-green-800",
    dark: "bg-gray-400",
    dragon:"bg-purple-600",
    electric:"bg-yellow-400",
    fairy:"bg-red-200",
    fighting:"bg-yellow-800",
    fire:"bg-red-600",
    flying:"bg-blue-400",
    ghost:"bg-purple-800",
    grass:"bg-green-400",
    ground:"bg-yellow-200",
    ice:"bg-blue-200",
    normal:"bg-gray-300",
    poison:"bg-pink-800",
    psychic:"bg-pink-500",
    rock:"bg-yellow-300",
    steel:"bg-gray-400",
    water:"bg-blue-600",
  }
  return types[type]
}