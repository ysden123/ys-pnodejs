// Playing with socket, client
'use strict';
const net = require('net');


function runClients() {
    const commonStart = new Date();
    const clients = ['client1', 'client2', 'client3', 'client4'];
    let itemCount = 0;
    clients.forEach(c => {
        const start = new Date();
        console.log(`Start client ${c}`);
        const client = net.createConnection(3000, () => {
            //'connect' listener
            console.log(`${c}: connected to server!`);
            client.write('world!\r\n');
        });

        client.on('data', (data) => {
            console.log(data.toString());
            client.end();
        });
        client.on('end', () => {
            const end = new Date();
            console.log(`${c}: disconnected from server, duration is ${end - start} ms`);

            if (++itemCount == clients.length) {
                console.log(`Total duration is ${end - commonStart} ms`);
            }
        });
    })
}

runClients();

