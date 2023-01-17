function filterApiData(apiData, mandatoryKeys) {
  let result = [];
  // mandatoryKeys[..., ...]
  for (let i = 0; i < mandatoryKeys.length; i++) {
    // apiData [{...}, {...}]
    for (let j = 0; j < apiData.length; j++) {
      // apiData[j] {key: value, ..., ...}
      for (const [key, value] of Object.entries(apiData[j])) {
        if (key === mandatoryKeys[i]) {
          result.push(apiData[j]);
        }
      }
    }
    return result;
  }
}
