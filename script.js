'use strict'

let completedT = document.querySelector('.completedT');
let remainingT = document.querySelector('.remainingT');
let input = document.getElementById("user-input");
let plusButton = document.querySelector("i");
let listFull = document.querySelector("ul");
let listItems = document.getElementsByTagName("li");
let nbrLi = 0;
let checkedLi = 0;


console.log(completedT,remainingT);


function addTask(){
    
    let listElement = document.createElement("li");
    
    let checkButton= document.createElement("button");
    checkButton.innerHTML='<i  class="bi-check-circle"></i>';
    listElement.appendChild(checkButton);



    listElement.appendChild(document.createTextNode(input.value));

    let deleteButton= document.createElement("button");
    deleteButton.innerHTML='<i  class="bi bi-trash"></i>';
    listElement.appendChild(deleteButton);


    listFull.appendChild(listElement);


// checking tasks
    function checkElement(){
        if(listElement.classList.contains('checked')) {
               console.log('already checked');
        } else{
                listElement.classList.add("checked");
                checkedLi++;
                nbrLi--;
                completedT.innerHTML= `Completed Tasks ${checkedLi}`;
                remainingT.innerHTML = `Remaining Tasks ${nbrLi}`;
         }
        
    }

    checkButton.addEventListener("click", checkElement);


// deleting elements and decrementing the number of tasks
    function deletingLi(){
        if(listElement.classList.contains('checked')){
            listElement.remove();
            checkedLi--;
            completedT.innerHTML = `Completed Tasks ${checkedLi}`;
        } else{
            listElement.remove();
            nbrLi--;
            remainingT.innerHTML = `Remaining Tasks ${nbrLi}`;
        }
}

    deleteButton.addEventListener("click", deletingLi);

    input.value = null; 
}


// creating new tasks with clicks
function addLi(){
    if(input.value.length > 0 ){
        addTask();
        nbrLi = listItems.length;
        remainingT.innerHTML = `Remaining Tasks ${nbrLi}`;
      
    } else {
        input.setAttribute("placeholder", "You need to write something first...");
    }
    
}

// creating new tasks with enter key
plusButton.addEventListener("click", addLi);
input.addEventListener("keydown", (e)=> {
    if (e.keyCode === 13) {
        addLi();
        nbrLi = listItems.length;
        remainingT.innerHTML= `Remaining Tasks ${nbrLi}`;
    }

});


