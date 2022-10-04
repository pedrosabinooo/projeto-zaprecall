export default function fisherYatesShuffle(arr) {
  const novoArr = [...arr];
  for (let i = novoArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index
    [novoArr[i], novoArr[j]] = [novoArr[j], novoArr[i]]; // swap
  }
  return novoArr;
}
