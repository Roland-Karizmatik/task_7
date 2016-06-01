var n = prompt('Please enter the number of ranks of Fibonacci sequence')    
function fibo(n) {
  var f = [];
  for (var c = 0; c < n; ++c) {
    f.push((c < 2) ? c : f[c-1] + f[c-2]);
  }
  return f;
}

function btnclicked (e) {
    fibo();
    console.log(fibo(n));
}
var capturing = true;
btn.addEventListener('click', btnclicked, capturing);