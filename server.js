const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', ws => {
    console.log('连接');
    var flag = false;
    ws.on('message', data => {
        if (data == 'start' || data == 'resume') {
            var number = parseInt(Math.random() * 200 + 100, 10);
            for (var i = 0; i < number; i++) {
                ws.send(randomNum());
            }
        }
        if (data == 'pause') flag = false;
    })
    ws.on('close', () => {
        console.log('断开连接');
    })
});

function randomNum() {
    return parseInt(Math.random() * 100 + 500, 10)
}