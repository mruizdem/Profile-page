/* Functions: 
1. Clicking "edit profile" will change name to another name
2. Click check or x to remove the connection requests 
    a. this should also decrease the count in connection requests
    b. if accepted, increase connection count
If you click sign-out, the button should change to sign in 
*/

let userName = document.querySelector("#user-name");
let connRequestText = document.querySelector("#conn-req-counter");
let connCounterText = document.querySelector("#conn-counter");
let requestOne = document.querySelector("#notif-one");
let requestTwo = document.querySelector("#notif-two");

let connRequestCounter = 2;
let connCounter = 418;

function editProfile() {
    userName.innerText = "Morgan Ruiz";
}

function rejectRequest(requestNumber) {
    connRequestCounter--;
    connRequestText.innerText = `${connRequestCounter}`;
    if (requestNumber == 1) {
        requestOne.remove();
    } else if (requestNumber == 2) {
        requestTwo.remove();
    }
}

function approveRequest(requestNumber) {
    connCounter++;
    connCounterText.innerText = `${connCounter}`;
    connRequestCounter--;
    connRequestText.innerText = `${connRequestCounter}`;
    if (requestNumber == 1) {
        requestOne.remove();
    } else if (requestNumber == 2) {
        requestTwo.remove();
    }
}