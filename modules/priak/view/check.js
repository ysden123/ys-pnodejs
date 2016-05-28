function update(){
    const host = document.getElementById('host').value; 
    document.getElementById('a1').setAttribute('href', `http://${host}:8098/buckets?buckets=true`);
    document.getElementById('a2').setAttribute('href', `http://${host}:8098/buckets/multiple objects/keys?keys=true`);
    document.getElementById('a3').setAttribute('href', `http://${host}:8098/buckets/multiple objects p/keys?keys=true`);
}