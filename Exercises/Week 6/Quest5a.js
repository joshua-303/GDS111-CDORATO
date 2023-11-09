const selection = {
    changeActions: function() {
        console.log("This is the change actions function.");
    }
    , buttonLayout: function() {
        console.log("This is the button layout function.");
    }
    , keyBindings: function() {
        console.log("This is the key bindings function.");
    }
    , onEventScripts: function() {
        console.log("This is the OnEvent scripts function.");
    }
    , mainMenuBar: function() {
        console.log("This is the main menu bar function.");
    }
    , miscOptions: function() {
        console.log("This is the misc options function.");
    }
    , unlockDragging: function() {
        console.log("This is the unlock dragging function.");
    }
    , showButtonIDs: function() {
        console.log("This is the show button IDs function.");
    }
    , showActionIDs: function() {
        console.log("This is the show action IDs function.");
    }
    , copy: function() {
        console.log("This is the copy function.")
    }  
    , paste: function() {
        console.log("This is the paste function.")
    }
};

let i = 0;
for (a in selection) {
    selection[i] = selection[a];
    ++i;
}

function menu() {
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

menu();