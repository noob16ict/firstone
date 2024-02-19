var photos =["artcell.jpeg","nemesis.jpeg","warfaze.jpeg"];
var bandImg = document.querySelector("img");
var count =0;
function next () {
    count++;
    if(count>=photos.length)
    { count=0;
      bandImg.src=photos[count];
    }
    bandImg.src=photos[count];
}
count=0;
function prev(){
    count--;
    if(count<=photos.length)
    { count=0;
      bandImg.src=photos[count];
    }
    bandImg.src=photos[count];
}