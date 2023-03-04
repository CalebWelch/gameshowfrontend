var uri = "wss://game-test-td.herokuapp.com:443";
const socket = new WebSocket("wss://game-test-td.herokuapp.com:443");
const timer = 3;
window.addEventListener("load", () => {
    socket.addEventListener("open", () => {
        socket.send("test");
        alert("done");
    });
    document.getElementById("submit").disabled = true;
});
async function connect() {}
function test() {
    const msg = {
        type: "message",
        name: document.getElementById("name").value,
        date: Date.now(),
    };
    socket.send(JSON.stringify(msg));
    var name = document.getElementById("name").value;
    console.log(name);
}
socket.addEventListener("message", (event) => {
    data = JSON.parse(event.data);
    var button = document.getElementById("submit");
    if (data.prime) {
        button.disabled = false;
        button.style.backgroundColor = "rgb(246, 249, 250)";
    } else if (data.timer >= 0) {
        document.getElementById("timer").innerText = data.timer;
        if (data.timer == 0) button.style.backgroundColor = "green";
    }
    button.onclick = function () {
        alert("button was clicked");
        button.disabled = true;
    };
});
