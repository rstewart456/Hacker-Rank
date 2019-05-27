function Getsum(array) {
  var total = 0;
  for (i in array) {
    total += array[i];
  }
  return total;
}
Getsum([1,2,3,4,10,11]);
