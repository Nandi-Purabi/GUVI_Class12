//dom manipulation
var div=document.createElement("div");
div.style.cssText='text-align:center;position: absolute;top: 50%;left: 50%;-ms-transform: translateX(-50%) translateY(-50%);-webkit-transform: translate(-50%,-50%);transform: translate(-50%,-50%);';
var h1=document.createElement("h1");
h1.style.cssText='text-align:center;font-family:Comic Sans MS;font-size:100px;';
div.appendChild(h1);
document.body.appendChild(div);


//countdown logic
var num=10;

function countdown(num,cb){
    setTimeout(function(){
        console.log(num);
        h1.style.color="#"+Math.floor(Math.random()*16777215).toString(16);
        h1.innerHTML=num;
        num=num-1;
        cb(num,cb);
    },1000)
}

countdown(num,function(num,cb){
    setTimeout(function(){
        if(num==0)
        {
            console.log("Happy Birthday!!!");
            h1.style.color="#"+Math.floor(Math.random()*16777215).toString(16);
            h1.innerHTML="Happy Birthday!!!";
            return;
        }
        console.log(num);
        h1.style.color="#"+Math.floor(Math.random()*16777215).toString(16);
        h1.innerHTML=num;
        num=num-1;
        cb(num,cb);
    },1000)
})
