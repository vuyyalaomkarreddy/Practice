const button=document.getElementById("btn");
const count=0;
function clicked (){
  alter(`button clicked ${count}`)
}

button.onclick=clicked();
