export const getPageNumber = (
  total: number,
  range: number,
  currPage: number
): number[] | undefined => {
  const maxNumber = Math.ceil(total / range);
  const arr = Array.from(Array(maxNumber + 1).keys()).slice(1);
  if (currPage > range / 2 && currPage < maxNumber - range / 2) {
    const mid = currPage;
    const midIndx = mid - 1;
    const startIndx = midIndx - (range / 2 - 1);
    const endIndx = midIndx + range / 2;
    return arr.slice(startIndx, endIndx);
  }
  if (currPage <= range / 2) {
    return arr.slice(0, range);
  }
  if (currPage > maxNumber - range / 2)
    return arr.slice(maxNumber - range, maxNumber);
};
