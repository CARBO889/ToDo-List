const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!");
    }
    else{
        let li =  document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}


listContainer.addEventListener('click',function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// taaki jab refresh ya browser close kare to vo lost na ho
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);

}

// to display the data whever we reopen browser
function show(){
    listContainer.innerHTML = localStorage.getItem("data");
}
show();
