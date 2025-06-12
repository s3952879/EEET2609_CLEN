// For websocket connection, disabled to design mockup

/*let gateway = `ws://${window.location.hostname}/ws`;
let websocket;

function initWebSocket() {
    console.log('Trying to open a WebSocket connection...');
    websocket = new WebSocket(gateway);
    websocket.onopen = onOpen;
    websocket.onclose = onClose;
    websocket.onmessage = onMessage;
}

function onOpen(event) {
    console.log('Connection opened');
}

function onClose(event) {
    console.log('Connection closed');
    setTimeout(initWebSocket, 2000);
}
function onMessage(event) {
    var state;
    if (event.data == "1") {
        state = "ON";
    }
    else {
        state = "OFF";
    }
    document.getElementById('state').innerHTML = state;
}

//window.addEventListener('load', onLoad);

function onLoad(event) {
    initWebSocket();
}*/

const numStateInput = document.getElementById("number-states-input");
const numStateBtn = document.getElementById("number-states-submit")
const stateSelect = document.getElementById("state-select");

let prevNumberStates;
let numberStates = 0;

document.getElementById("test").innerHTML;

// If a value exists in the number input, add the number of states
if (numStateInput.value) {
    while (numberStates < numStateInput.value) {
        ++numberStates;
        let newState = document.createElement("option");
        newState.innerHTML = `State ${numberStates}`;
        newState.setAttribute("id", `state-${numberStates}`);
        newState.setAttribute("name", `state-${numberStates}`);
        stateSelect.appendChild(newState);
    }
}

// If the number of desired states is changed, add or subtract elements 
function onNumStateChange ()  {
    // New amount of states is greater than originally, add states to match
    if (numberStates > stateSelect.childElementCount) {
        while (numberStates > stateSelect.childElementCount) {
            let newState = document.createElement("option");
            newState.innerHTML = `State ${stateSelect.childElementCount+1}`;
            newState.setAttribute(
                "id", 
                `state-${stateSelect.childElementCount+1}`
            );
            newState.setAttribute(
                "name", 
                `state-${stateSelect.childElementCount+1}`
            );
            stateSelect.appendChild(newState);
        }
    }
    // New amount of states is less than originally, subtract states to match
    else if (numberStates < stateSelect.childElementCount) {
        while (numberStates < stateSelect.childElementCount) {
            let lastState = document.getElementById(`state-${stateSelect.childElementCount}`);
            stateSelect.removeChild(lastState);
        } 
    }
};

numStateBtn.onclick = () => {
    if (numStateInput.value
        && numStateInput.value >= 1
        && numStateInput.value <= 64) {
        prevNumberStates = numberStates;
        numberStates = numStateInput.value;
        onNumStateChange();
    }
    else {
        numStateInput.value = numberStates;
    }

};

