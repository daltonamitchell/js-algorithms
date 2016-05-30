/**
 * Reports if the given index is a multiple of a given number
 *
 * @param  Integer index      An index to check (will be converted to 1-base)
 * @param  Integer num        A number to check the index against
 * @return Boolean
 */
function nthIndex(index, num) {
  if (index === 0) return false;
  return (index + 1) % num === 0;
}

export default nthIndex;
