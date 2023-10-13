function sliceIntoChunks<T>(arr: T[], chunkSize: number) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

function areEqual<T>(arr1: T[], arr2: T[]) {
  return arr1.sort().join(',') === arr2.sort().join(',');
}

export { sliceIntoChunks, areEqual };
