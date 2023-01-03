
// function nim(array){
//   array.forEach(function(element){
//     element = element + "님";
//   });
//   forEach문 쓰려면 조건이 배열이어야 함. 단순 반복문, 명령에 가까움
// }

export default function nim(array){
  let newArr = array.map(function(value){
    value = value + "님";
  });
  // map은 새로운 배열을 반환함. 때문에 let newArr처럼 변수 선언 해줘야 함. 
  return newArr;
}
