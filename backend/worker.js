const { Worker, isMainThread, parentPort } = require('worker_threads');
// console.log(parentPort);



if(isMainThread){
    const worker = new Worker(__filename);
    // console.log(parentPort);
    // console.log(worker);
    worker.on('message',(message)=>{console.log(message[0]);});
    worker.on('message',()=>{console.log("nishan");})
    worker.postMessage("sending to worker");

}
else{
    parentPort.on('message',(s)=>{console.log("received messsage from parent port is ",s);})
    // console.log(parentPort);
    parentPort.postMessage([1,2]);
}