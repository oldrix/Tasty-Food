export const calcTotalPrice = (items) => {
  return items.reduce((sum, obj) => {
    return sum + obj.finalPrice * obj.count;
  }, 0);
};
