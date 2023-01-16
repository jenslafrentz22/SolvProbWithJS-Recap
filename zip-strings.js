function zipStrings(strA, strB) {
  let newStrA = strA.split("");
  let newStrB = strB.split("");
  let result = [];
  for (i = 0; i < newStrA.length; i++) {
    for (j = 0; j < newStrB.length; j++) {
      result.push(newStrA[i] + newStrB[i]);
    }
  }
  console.log(result.join());
}
