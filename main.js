let connection = new WebSocket('ws://localhost:8080');

connection.onopen = () => {
    console.log('connected from the frontend');
    // connection.send('Wassup not Kai-Lan');
};
connection.onerror = () => {
    console.log('fail to connect from the frontend');
};
connection.onmessage = (event) => {
    console.log('received message', event.data);
    let li = document.createElement('li');
    li.innerText = event.data;
    document.querySelector('ul').append(li);
};

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    let message = document.querySelector('textarea').value;
    connection.send(message);
    document.querySelector('textarea').value = "";
});