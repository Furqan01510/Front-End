//Write your function here


function rotateLeft(arr) {
  var arrTemp = arr[0];
  arr.splice(0, 1);
  arr.push(arrTemp);
  return arr;
}



// Input and output has already been handled for you



process.stdin.resume();
process.stdin.setEncoding('utf8');

let remainder = '';
process.stdin.on('data', function (chunk) {
  let arr = chunk.toString()
  arr = arr.split(' ')
  let nums = []
  for(const c of arr) {
      nums.push(parseInt(c))
  }

  const ans = rotateLeft(nums).join(' ')
  process.stdout.write(ans)
  process.exit();
});