import './style.css'


const inputStr=prompt('enter you text : ');
console.log(inputStr);
const commentMarkersInput =prompt('the sign you want delete and separate them with comma :');
console.log(commentMarkersInput);
const commentMarkers = commentMarkersInput.split(',');
console.log(commentMarkers);



function deleteSign1(input, markers){
  const reg = / ["#", "!","$"][ a-zA-Z]+/gm;
  const output = input.replace(reg,"");
  return output;
}

console.log(deleteSign1(inputStr,commentMarkers))
