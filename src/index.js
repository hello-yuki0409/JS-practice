// let var2 = 'let変数';
// console.log(var2)

// var2 = "let変数を上書き"
// console.log(var2)

// const val3="const変数"
// console.log(val3)

// val3='上書き'
// console.log(val3)

// const val4 = {
//   name: "じゃけぇ",
//   age: 31,
// };
// console.log(val4);

// val4.name='jak';
// val4.address='Hiroshima';
// console.log(val4)

// const val5 = ["dog", "cat"];
// val5[0]="bird";
// val5.push('monkey')
// console.log(val5)

// const name = 'じゃけぇ';
// const age = 31;

// console.log(`私の名前は${name}です。年齢は${age}歳です。`)

// const func2 = (str) => str;
// console.log(func2('func2です。'))

// const func3 = (num1,num2) => num1 + num2;
// console.log(func3(10,20))

// const myProfile = {
//   name:"じゃけぇ",
//   age: 31,
// }

// // const message1 = `名前は${myProfile.name}です。${myProfile.age}歳です。`
// console.log(message1)

// const {name,age} = myProfile;
// const message2 = `名前は${name}です。${age}歳です。`
// console.log(message2)

// const myProfile = ['じゃけぇ', 33];

// // const message = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
// // console.log(message)

// const [name,age] = myProfile;
// const message = `名前は${name}です。${age}歳です。`
// console.log(message)

// const sayHello = (name = 'ゲスト') => console.log(`こんにちは！${name}さん！`)
// sayHello('yuki');

// const myProfile = {
//   age: 31
// };
// const {age, name = 'ゲスト'} = myProfile;
// console.log(age);
// console.log(name);

// const name = 'じゃけぇ';
// const age = 31;

// const myProfile = {
//   name: name,
//   age: age
// };
// console.log(myProfile);

// const name = 'じゃけぇ';
// const age = 31;

// const myProfile = {
//   name,
//   age,
// };
// console.log(myProfile);

// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1+ num2);
// // sumFunc(arr1[0], arr1[1])
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// // console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7)

// const nameArr = ['田中', '山田', 'じゃけぇ'];
// // for (let i = 0; i<nameArr.length; i++){
// //   console.log(nameArr[i]);
// // }

// // const nameArr2 = nameArr.map((name) => {
// // return name;
// // });
// nameArr.map((name)=>console.log(name));
// // console.log(nameArr2);

// const numArr = [1, 2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if(name === 'じゃけぇ'){
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr)

// ある条件　？　条件がtrueの時　：　条件がfalseの時
// const val1 = 1 > 2 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1200;
// // console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

/**勉強になる */
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "100以下です";
// };
// console.log(checkSum(400, 50));　// "100を超えています"

// truthy falsy

// const val = 0;
// if (val) {
//   console.log("truehyです");
// } else {
//   console.log("falsyです");
// }

// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2はtrueです");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueです");
// }

/**  ||　は左側がtruthyの時、その時点で返却する */
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

/**  &&　は左側がfalsyの時、その時点で返却する */
const num2 = "ABC";
const fee2 = num2 && "何か設定されました";
console.log(fee2);
