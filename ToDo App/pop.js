const inp = document.getElementById('inp');
const btn = document.getElementById('btn');
let a = "" 
btn.addEventListener('click',()=>{
    if(inp.value ==""){
        alert("Enter Your Name!");
    }else{
        a = inp.value;
        window.localStorage.setItem('vari',a);
        window.location.href='index.html';
    }
})