'use strict';
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();

xhr.open("POST", "https://reqbin.com/echo/post/json");

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = () => {
    console.log('Success:');
    console.log('responseText:' + xhr.responseText);
    console.log('xhr.status: ' + xhr.status);
    console.log('xhr.statusText: ' + xhr.statusText);

    let response = JSON.parse(xhr.responseText);
    console.log('response.success: ' + response.success);
}

xhr.onerror = () => {
    console.error('Error:');
    console.error('xhr.status: ' + xhr.status);
    console.error('xhr.statusText: ' + xhr.statusText);
}

let data = `{
      "Id": 78912,
      "Customer": "Jason Sweet"
    }`

xhr.send(data);