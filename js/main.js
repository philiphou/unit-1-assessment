// set variables//
var result=document.getElementById("result");
var num=document.getElementById("factor");
var plus=document.getElementById("plus");
var minus=document.getElementById("minus");
num.value=1;

function addNum(){
    addSum=Number(result.textContent)+Number(num.value);
    result.textContent=addSum;
    addSum<0? result.style.color="red":result.style.color="black";
}
function minusNum(){
    minusSum=Number(result.textContent)-Number(num.value);
    result.textContent=minusSum
    minusSum<0? result.style.color="red":result.style.color="black"
}

//event listeners//
plus.addEventListener("click",addNum);
minus.addEventListener("click",minusNum);





