let points = [55,65,70];
let number = points.length;

function get_pass_or_failure(points) {
  let judge = "合格";
  for(let i=0; i<number; i++){
    if(points[i]<60){
      judge = "不合格";
    }
  }
  return judge;
};

console.log(get_pass_or_failure(points));

function get_achievement(points){
  let sum = 0;
  for(let i=0; i<number;i++){
    sum += points[i];
  }

  if(sum >= 250){
    return "A";
  } else if(sum >= 200){
    return "B";
  }else if(sum >= 150){
    return "C";
  }else{
    return "D";
  }  
};

console.log(get_achievement(points));