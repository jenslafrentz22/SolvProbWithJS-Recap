function zipStrings(strA, strB) {
  let newStrA = strA.split("");
  let newStrB = strB.split("");
  let result = [];
  if (strA === "") {
    return strB;
  } else if (strB === "") {
    return strA;
  } else {
    for (let i = 0; i < newStrA.length; i++) {
      for (let j = 0; j < newStrB.length; j++) {
        if (!result.includes(newStrA[i])) {
          result.push(newStrA[i], newStrB[i]);
        }
      }
    }
  }
  return result.join("");
}
