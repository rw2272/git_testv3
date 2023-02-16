//solution('camelCasingTest')

// complete the function
function solution(string) {
  answer = []
    string.split("").forEach(element => {
      if(element.toUpperCase() == element){
        answer.push(" ")
        answer.push(element)
      }
      else{
        answer.push(element)
      }
    });
  return answer.join("")
}
