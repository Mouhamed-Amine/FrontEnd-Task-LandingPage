'use strict'

const options={
rootMargin:'-300px',
}
//Api
const section=document.getElementById('animated')
const sections=document.querySelectorAll('section')
const nav=document.querySelector('nav');
const observer= new IntersectionObserver(entries=>{
  entries.forEach((e)=>{
    if (e.isIntersecting){
nav.classList.add('nav-scroll');
   }else{
     if(e.target.className==='astrauntsSection'){
      nav.classList.remove('nav-scroll');
      nav.classList.add('active');
    }
   // }
  }
  })
},options);
sections.forEach((sec)=>{
observer.observe(sec);
})
const bonusinfo={
  rootMargin:'-400px',
  threshold:0
}


//Api animations flyingAstronaut
const trigger=new IntersectionObserver(entries=>{

entries.forEach((e)=>{
  if(e.isIntersecting)
section.classList.toggle('left-to-right');
});

},bonusinfo)

trigger.observe(section);

//tabs work
let tab=document.querySelectorAll('.wrapper .tabs ul li');
let content=document.querySelectorAll('.tab_content');
// Tabs
tab.forEach(function(userItem) {
userItem.addEventListener('click',()=>{
  let currentTab=userItem.getAttribute('data-list');
  tab.forEach(function(x){
    x.classList.remove('active');
  })
content.forEach(function(x){
    x.style.visibility='hidden';
  });
  userItem.classList.add('active');
  if(currentTab==="tab-1"){
    document.querySelector('.'+currentTab).style.visibility='visible';
  }else if(currentTab==="tab-2"){
    document.querySelector('.'+currentTab).style.visibility='visible';
  } else if(currentTab==="tab-3"){
    document.querySelector('.'+currentTab).style.visibility='visible';
  }else if(currentTab==="tab-4"){
    document.querySelector('.'+currentTab).style.visibility='visible';
  }
else if(currentTab==="tab-5"){
    document.querySelector('.'+currentTab).style.visibility='visible';
  }else if(currentTab==="tab-6"){
    document.querySelector('.'+currentTab).style.visibility='visible';
  }

});

});

//Next & Previous button Configuration
let next=document.querySelector('.next');
let back=document.querySelector('.back');
let layer=document.querySelector('.hoskiens .team .slide2');
let indexlayer=0;

next.addEventListener('click',()=>{
  if(indexlayer<1){
layer.style.visibility='visible';
document.querySelector('.hoskiens .team .slide1').style.visibility='hidden';
indexlayer++;
  }
});
back.addEventListener('click',()=>{
if(indexlayer>0){
  layer.style.visibility='hidden';
  document.querySelector('.hoskiens .team .slide1').style.visibility='visible';
  indexlayer--;
}
  
});

//Video player Stories
var video11=document.getElementById('v1');
var video1=document.getElementById('v2');
var video2=document.getElementById('v3');
var video3=document.getElementById('v4');
var video4=document.getElementById('v5');
var video5=document.getElementById('v6');
var video6=document.getElementById('v7');
var video7=document.getElementById('v8');

var play=document.querySelectorAll('.play');
const closePoP=document.querySelector('.videoStories .popup-video span');

closePoP.onclick=()=>{
  document.querySelector('.videoStories .popup-video').style.display='none';
  video11.load();
  video11.style.visibility="hidden";

  video2.load();
  video2.style.visibility="hidden";

  video3.load();
  video3.style.visibility="hidden";

  video4.load();
  video4.style.visibility="hidden";

  video5.load();
  video5.style.visibility="hidden";

  video6.load();
  video6.style.visibility="hidden";

  video7.load();
  video7.style.visibility="hidden";

  video1.load();
  video1.style.visibility="hidden";

}

play.forEach(function(e){
  e.addEventListener('click',()=>{
  if(e.className==='play play2'){
    document.querySelector('.videoStories .popup-video').style.display='block';
    video1.style.visibility="visible";
    video1.play();
  }
  else if(e.className==='play play1'){
    
    document.querySelector('.videoStories .popup-video').style.display='block';

    video11.play();
    video11.style.visibility="visible";

    video1.style.visibility="hidden";
    video1.load();

    video2.style.visibility='hidden';
    video2.load();
    video3.style.visibility="hidden";
    video3.load();

    video5.style.visibility="hidden";
    video5.load();

    video6.style.visibility="hidden";
    video6.load();

    video7.style.visibility="hidden";
    video7.load();

  }
  
  else if
  (e.className=="play play3"){

    document.querySelector('.videoStories .popup-video').style.display='block';
    video2.style.visibility="visible";
    video2.play();
  }

  else if (e.className=="play play4") {
    document.querySelector('.videoStories .popup-video').style.display='block';
    video3.style.visibility="visible";
    video3.play();
  }else if(e.className=="play play5"){

    document.querySelector('.videoStories .popup-video').style.display='block';
    video4.style.visibility="visible";
    video4.play();
  }
  else if(e.className=="play play6"){
    document.querySelector('.videoStories .popup-video').style.display='block';
    video5.style.visibility="visible";
    video5.play();

  }
  else if(e.className=="play play7"){
    document.querySelector('.videoStories .popup-video').style.display='block';
    video6.style.visibility="visible";
    video6.play();

  }
  else if(e.className=="play play8"){
    document.querySelector('.videoStories .popup-video').style.display='block';
    video7.style.visibility="visible";
    video7.play();
  }else
  console.log('nothing works');
    });})

 //Video player Stories
   
 var videoApricoat=document.getElementById('apricoat');
 var videoBopied=document.getElementById('Bopied');
 var videoFriend=document.getElementById('friendbuy');
 var videoGoth=document.getElementById('gothrider');
 var videoRadio=document.getElementById('radiocheck');
 var videoXpunks=document.getElementById('xpunks');

 
 var playMemories=document.querySelectorAll('.btn-play');
 const closePoP2=document.querySelector('.memories .popup2-video span');

 closePoP2.onclick=()=>{
  document.querySelector('.memories .popup2-video').style.display='none';
  videoApricoat.load();
  videoApricoat.classList.add('hidden');

  videoBopied.classList.add('hidden');
  videoBopied.load();
  
  videoFriend.load();
  videoFriend.classList.add('hidden');

  videoGoth.load();
  videoGoth.classList.add('hidden');

  videoRadio.load();
  videoRadio.classList.add('hidden');

  videoXpunks.load();
  videoXpunks.classList.add('hidden');

}

 playMemories.forEach(memory=>{
  memory.addEventListener('click',()=>{

if(memory.className=="circle btn-play btn-play4"){
  document.querySelector('.memories .popup2-video').style.display='block';
  videoGoth.classList.remove('hidden');
  videoGoth.play();
}else if(memory.className=="circle btn-play btn-play1"){
  document.querySelector('.memories .popup2-video').style.display='block';
  videoApricoat.classList.remove('hidden');
  videoApricoat.play();
}else if(memory.className=="circle btn-play btn-play2"){
  document.querySelector('.memories .popup2-video').style.display='block';
  videoBopied.classList.remove('hidden');
  videoBopied.play();
}else if(memory.className=="circle btn-play btn-play3"){
  document.querySelector('.memories .popup2-video').style.display='block';
  videoFriend.classList.remove('hidden');
  videoFriend.play();
}else if(memory.className=="circle btn-play btn-play5"){
  document.querySelector('.memories .popup2-video').style.display='block';
  videoRadio.classList.remove('hidden');
  videoRadio.play();
}else if(memory.className=="circle btn-play btn-play6"){
  document.querySelector('.memories .popup2-video').style.display='block';
  videoXpunks.classList.remove('hidden');
  videoXpunks.play();
}else
console.log('nothing works')
  });
 })
