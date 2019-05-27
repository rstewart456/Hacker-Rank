function diagonal(arr) {
  var len = arr[0].length;
  var diagleft = 0;
  var diagright = 0;

  for (var i = 0, j = (len - 1); i < len, j > -1; i++, j--) {
    diagleft += arr[i][i];
    diagright += arr[i][j];
  }
    var sum = diagleft - diagright;
  return Math.abs(sum);
}
