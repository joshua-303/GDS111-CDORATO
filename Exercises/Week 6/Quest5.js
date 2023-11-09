function menu() {
    const selection = [changeActions, buttonLayout, keyBindings, onEventScripts, mainMenuBar,
    miscOptions, unlockDragging, showButtonIDs, showActionIDs, copy, paste];
    let run = 0;
    console.log("Main Menu Bar\n\n1. Change Actions\n2. Button Layout\n3. Keybinds\n4. OnEvent Scripts",
    "\n5. Main Menu Bar\n6. Misc Options\n7. Unlock Dragging\n8. Show Button IDs\n9. Show Actions IDs",
    "\n10. COPY\n11. PASTE\n\nSelect a number: _");
    while(run == 0) {
        let userInput = prompt("Make a selection!");
        if(userInput == null) {
            console.log("The end!");
            break;
        } else {
            userInput = Number(userInput);
            if (userInput < 0 || userInput > 11 || isNaN(userInput)) {
                alert("Invalid entry. Please make a valid selection.");
            } else if (userInput === 0) {
                console.log("The end!")
                break;
            } else {
                selection[userInput-1]();
            }
        }
    }
}

function changeActions() {
    console.log("This is the change action function.");
}

function buttonLayout() {
    console.log("This is the button layout function.");
}

function keyBindings() {
    console.log("This is the key bindings function.");
}

function onEventScripts() {
    console.log("This is the on event scripts function.");
}

function mainMenuBar() {
    console.log("This is the main menu bar function.");
}

function miscOptions() {
    console.log("This is the misc options function.");
}

function unlockDragging() {
    console.log("This is the unlock dragging function.");
}

function showButtonIDs() {
    console.log("This is the show button IDs function.");
}

function showActionIDs() {
    console.log("This is the show action IDs function.");
}

function copy() {
    console.log("This is the copy function.");
}

function paste() {
    console.log("This is the paste function.");
}

menu();

window.addEventListener('keydown', function surp(e) {
    if (e.keyCode == "13") {
        menu();
    }
}, false);