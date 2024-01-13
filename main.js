let localStream;
let remoteStrem;

let init = async()=>{
localStream = await navigator.mediaDevices.getUserMedia({video:true, audio:false})
document.getElementById('user-1').srcObject = localStream
}

init()