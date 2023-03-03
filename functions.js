var uri = "wss://game-test-td.herokuapp.com:443";
const socket = new WebSocket("wss://game-test-td.herokuapp.com:443");
window.addEventListener("load", () => {
    socket.addEventListener("open", () => {
        socket.send("test");
        console.log("done");
    });
});
async function connect() {}
function test() {
    const msg = {
        type: "message",
        text: document.getElementById("name").value,
        date: Date.now(),
    };
    socket.send(JSON.stringify(msg));
    var name = document.getElementById("name").value;
    console.log(name);
}
