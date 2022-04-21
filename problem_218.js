let arr= [1,[2,[3, 4], 5], 6];

function test(params) {
  
  console.log(params.flat(2))
}

test(arr)
