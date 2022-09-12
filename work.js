let points = [a, b, c, d, e]
let number = points.length

function get_achievement(a, b, c, d, e){
  let sum = a + b + c + d + e;
  if (sum > 400){
   return "A";
  } elseif (sum > 300){
    return "B";
  } elseif (sum > 250){
    return "C";
  } else {
    return "D";
  }
};

console.log()

function get_pass_or_failure {
  let judge = "合格";
  for(let i=0; i<number; i++){
    if(points[i]<60){
      judge = "不合格";
      break;
    }
  }
}