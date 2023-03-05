export const pickRandomItem = <Item>(array: Item[]): Item => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};
