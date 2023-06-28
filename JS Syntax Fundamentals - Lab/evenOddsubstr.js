function evenOdd(arr) {
  let arr1 = 0;
  let arr2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if(Number(arr[i])%2==0){
        arr1+=Number(arr[i])
    }else{
        arr2+=Number(arr[i])
    }
  }
  console.log(arr1-arr2)
}
evenOdd([1, 2, 3, 4, 5, 6]);
evenOdd([3, 5, 7, 9]);
evenOdd([2, 4, 6, 8, 10]);
