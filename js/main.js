var imgs=Array.from(document.querySelectorAll('.img-slide img'))
var layer=document.getElementById('img-layer')
var closeIcon=document.getElementById('closeIcon')
var nextIcon=document.getElementById('arrowRight')
var prevIcon=document.getElementById('arrowLeft')
var item=document.getElementById('item')
var currentIndex=0;
for(var i=0;i<imgs.length;i++)
{
    imgs[i].addEventListener('click',function(e)
    {
        layer.classList.remove('d-none')
        currentIndex=imgs.indexOf(e.target)
        var currentSrc=e.target.src;
        item.style.backgroundImage=`url(${currentSrc})`
    })
}

closeIcon.addEventListener('click',closeSlide)
function closeSlide()
{
    layer.classList.add('d-none')
}

nextIcon.addEventListener('click',getNextSlide)
function getNextSlide()
{
 currentIndex++;
 if(currentIndex==imgs.length)
 {
    currentIndex=0
 }
 currentSrc=imgs[currentIndex].src
 item.style.backgroundImage=`url(${currentSrc})`
}

prevIcon.addEventListener('click',getPrevSlide)
function getPrevSlide()
{
    currentIndex--;
    if(currentIndex<0)
    {
        currentIndex=imgs.length-1;
    }
    currentSrc=imgs[currentIndex].src
 item.style.backgroundImage=`url(${currentSrc})`
}

document.addEventListener('keyup',function(e)
{
    if(e.key=='ArrowRight'){
        getNextSlide()
    }
    else if(e.key=='ArrowLeft')
    {
        getPrevSlide()
    }
    else if(e.key=='Escape')
   {
    closeSlide()
   } 
}
)
