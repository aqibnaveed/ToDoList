var addButton = document.getElementById("addItemBtn");
var inputText = document.getElementById("input");
var ul = document.getElementById("ulElement");

function createNewItem(){

    // list item creation
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputText.value));
    ul.appendChild(li);
    inputText.value="";

    // delete button creaton inside list item
    var crossBtn = document.createElement("button");
    crossBtn.appendChild(document.createTextNode("X"));
    li.appendChild(crossBtn);

    // delete on button click
    function deleteItem(){
		li.classList.add("delete")
	}
    crossBtn.addEventListener("click", deleteItem);
}

// validating that item isnt empty
function InputLength(){
    return inputText.value.length;
}

// adding new item on mouse click
function createNewItemOnClick(){
    if(InputLength() > 0)
        createNewItem();
}

// adding new item on ENTER key press
function createNewItemOnEnter(){
    if(InputLength() > 0 && event.keyCode === 13)   // 13 is code for Enter key
        createNewItem();
}

addButton.addEventListener("click", createNewItemOnClick);
inputText.addEventListener("keypress", createNewItemOnEnter);