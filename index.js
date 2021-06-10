const droppableContainers = document.querySelectorAll('.droppableContainer'),
    draggableElement = document.getElementById('draggableElement')

draggableElement.addEventListener('dragstart', (event) => dragStart(event))

droppableContainers.forEach(droppableContainer => {

    // dragEnter doesn't work 
    droppableContainer.addEventListener("dragover", (event) => dragOver(event))
    droppableContainer.addEventListener("dragleave", (event) => dragLeave(event))
    droppableContainer.addEventListener("drop", (event) => drop(event))

})


/*----------------------------------------------------------*/
/* On drag start 
------------------------------------------------------------*/
function dragStart(event) {

    // dataTransfer object that holds the data that is being dragged
    // setting draggableElement id as the data
    event.dataTransfer.setData("text/plain", event.target.id);

    console.log('dragStart');
}

/*----------------------------------------------------------*/
/* On drag enter 'potential' target
------------------------------------------------------------*/
function dragOver(event) {
    event.preventDefault();

    // Setting 'potential' target bg to grey
    event.currentTarget.style.background = '#7f8082';

    console.log('dragOver');
}

/*----------------------------------------------------------*/
/* On drag leave 'potential' target
------------------------------------------------------------*/

function dragLeave(event){
    event.preventDefault();

    event.currentTarget.style.background = '#fff'

    console.log('dragLeave');
}

/*----------------------------------------------------------*/
/* On drop
------------------------------------------------------------*/
function drop(event) {
    event.preventDefault();

    event.currentTarget.style.background = 'white'


    // getting draggableElement id
    const data = event.dataTransfer.getData("text/plain");

    // selecting the draggableElement
    const element = document.querySelector(`#${data}`);

    // append draggableElement to the droppableContainer
    try {
        event.target.appendChild(element);
    } catch (error) {
        console.warn("you can't move the item to the same place")
    }

    console.log('drop');
}






