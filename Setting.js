exports.WebConnectLog = function(url, methos, path, port, time){
    const log = `[${url}:${port}] ${methos} ${path} ${time}`;
    console.log(log);
}