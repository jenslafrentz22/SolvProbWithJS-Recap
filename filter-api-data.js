function filterApiData(apiData, mandatoryKeys) {
  result = [];
  for (j = 0; j < mandatoryKeys.length; j++) {
    for (i = 0; i < apiData.length; i++) {
      for (const [key, value] of Object.entries(apiData[i])) {
        // console.log(
        //   "KEY: " + key + ",VALUE: " + value + " - MANDA: " + mandatoryKeys[j]
        // );
        if (key === mandatoryKeys[j] && value !== "") {
          result.push({ key, value });
        }
      }
    }
  }
  console.log(result);
}
