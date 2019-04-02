const playButton = document.querySelector('#playButton');
const video = document.querySelector('#video');

playButton.addEventListener('click',function(){

video.setAttribute('play');

});