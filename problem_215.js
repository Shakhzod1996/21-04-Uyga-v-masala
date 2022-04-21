function sort(params) {
  let arr = params.sort((a,b) => {
    return a-b
  })
  
  console.log(arr)
}

sort([1, -10, 2,3, 4, 1,8])