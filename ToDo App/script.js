const inp = document.getElementById('inp');
const cont = document.getElementById('todo-list');
const addBtn = document.getElementById('add-btn');
const fil = document.getElementById('fil');


let allTask = localStorage.getItem('a') ? parseInt(localStorage.getItem('a')) : 0;
let completed = localStorage.getItem('b') ? parseInt(localStorage.getItem('b')) : 0;

if(allTask < 0 ){
    allTask = 0;
}
if(completed < 0 ){
    completed = 0;
}
const allT = document.getElementById('all-task');
const comp = document.getElementById('comp');

const name = document.getElementById('name');
const name2 = document.getElementById('name2nd');
var vari = localStorage.getItem('vari');
name.innerHTML = vari;
name2.innerHTML = vari.split(" ")[0].toUpperCase();

addBtn.addEventListener('click',()=>{
    fil.style.visibility='visible';
    if(inp.value == ""){
        alert('write something');
    }else{
        let del = document.createElement('span');
        let li = document.createElement('li');
        li.innerText = inp.value.trim();
        del.innerText="Delete";
        li.appendChild(del);
        cont.appendChild(li);
        cont.style.marginBottom = "16px";
        allTask++;
        allT.innerText = (`All Tasks : ${allTask}`);
        saveV();
    }
    inp.value="";
    saveData();
})


cont.addEventListener('click',(e)=>{
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        if(e.target.parentElement.style.backgroundColor != 'rgb(212, 212, 212)'){
            completed--;
        }
        if(completed < 0){
            completed = 0;
        }
        allTask--;
        saveV();
        saveCom();
        saveData();
        location.reload(); 
    }else if(e.target.tagName === "LI"){
        if(e.target.style.textDecoration === 'line-through'){
            e.target.style.textDecoration = 'none';
            e.target.style.backgroundColor = 'white';
            completed--;
            comp.innerText = (`Completed : ${completed}`);
            saveCom();
            saveData();
            location.reload();
        }else{
            e.target.style.textDecoration = 'line-through';
            e.target.style.backgroundColor = 'rgb(212, 212, 212)'; 
            completed++;
            allT.innerText = (`All Tasks : ${allTask}`);
            saveCom();
            saveData();
            location.reload();
        }
    }
})

function saveData(){
    localStorage.setItem("data",cont.innerHTML);
}

function showTask(){
    cont.innerHTML = localStorage.getItem("data");
}
showTask();

function saveV(){
    localStorage.setItem('a',allTask);
}
function saveCom(){
    localStorage.setItem('b',completed);
}
function showV(){
    allT.innerText = (`All Tasks : ${localStorage.getItem('a')}`);
}
showV();
function showCom(){
    comp.innerText = (`Completed : ${localStorage.getItem('b')}`);
}
showCom();