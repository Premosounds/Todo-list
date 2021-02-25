function saveTodo() {
    console.log("Button Clicked!");

    let text = $("#txtTodo").val(); // get the text input

    // validations
    if (text.length < 1) {
        alert("Todo text can not be empty");
        return; // get out of the function
    }

    $("#txtTodo").val("");

    // create a todo list syntax
    var syntax = "<div class='todo-item'>" + text + //<--mimicks the text value//
    "</div>";

    $(".todo-list").append(syntax);
}

function init() {
    console.log("Todo app");
    // get some initial data

    // hook events
    $("#btnSave").click(saveTodo);
    $("#txtTodo").keypress(function (e) {
        console.log("Key pressed", e);
        if(e.keyCode === 13){
            saveTodo();
        }
    });
}



window.onload = init;