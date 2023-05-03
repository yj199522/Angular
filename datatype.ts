let fname: string;
fname = "Yash";
fname = fname.toLowerCase();
console.log(fname);

let numList: number[];
numList = [1,2,3,4]
let sum = numList.reduce((acc, num)=> acc+num);
const enum Color{
    Red,
    Blue,
    Green
}
let c: Color = Color.Blue
console.log(c)

let swapNumber: [firstNumber: number, secondNumber: number];

const numberSwapping = (nums1: number, nums2: number) : [number, number] =>{
    return [nums2, nums1]
}

swapNumber = numberSwapping(10, 20)
console.log(swapNumber)