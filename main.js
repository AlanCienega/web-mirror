navigator.mediaDevices.getUserMedia({audio:true, video:true}).then((stream) =>{
    let video = document.getElementById("video");
    video.srcObject = stream;
    video.onloadedmetadata = (env) => {video.play()}
}).catch((err)=>{
    console.log(err);
    
})