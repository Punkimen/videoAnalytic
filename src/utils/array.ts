export const arrayIntersection = <T>(array1: T[], array2: T[]) => {
  return array1.filter((value) => array2.map((el) => JSON.stringify(el)).includes(JSON.stringify(value))).length > 0;
};
