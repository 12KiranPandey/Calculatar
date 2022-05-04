
var input=document.querySelector("#input");
var equation=document.querySelector("#eqn");
var equations=[];
var answers=[];
function getval(x){
    if(input.value==0)
    {
        input.value=x;
    }
    else{
        input.value+=x;
    }

}
function ans()
{
    equation.value=input.value +" = ";
    input.value=eval(input.value);
    equations.push(equation.value);
    answers.push(eval(input.value));
    document.querySelector("#history").innerHTML="";
    for(let i=equations.length-1;i>=0;i--)
    {
        document.querySelector("#history").innerHTML+="<div class='output'><p>"+equations[i]+"</p><p>"+answers[i]+"</p></div>";
    }
}
function clearinput()
{
    input.value=0;
    equation.value="";
} 
function del(){
    input.value=input.value.slice(0,-1);
}
function clearHistory()
{
    document.querySelector("#history").innerHTML="";
}
function steph()
{
equations.pop(equation.value);
answers.pop(eval(input.value));
document.querySelector("#history").innerHTML="";
for(let i=equations.length-1;i>=0;i--)
{
    document.querySelector("#history").innerHTML+="<div class='output'><p>"+equations[i]+"</p><p>"+answers[i]+"</p></div>";
}
}
  