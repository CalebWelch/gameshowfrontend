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

var preclick = false;
socket.addEventListener("message", (event) => {
    data = JSON.parse(event.data);
    var button = document.getElementById("submit");
    if (data.prime) {
        button.disabled = false;
        button.style.backgroundColor = "rgb(246, 249, 250)";
    } else if (data.timer >= 0) {
        button.onclick = () => {
            button.style.backgroundColor = "red";
            button.disabled = true;
            preclick = true;
            console.log("preclick", preclick);
        };
        document.getElementById("timer").innerText = data.timer;
        if (data.timer == 0) {
            button.onclick = function () {
                const msg = {
                    type: "message",
                    name: document.getElementById("name").value,
                    date: Date.now(),
                };
                socket.send(JSON.stringify(msg));
                var name = document.getElementById("name").value;
                console.log(name);
                button.disabled = true;
            };
            if (preclick == false) button.style.backgroundColor = "green";
        }
    }
});
