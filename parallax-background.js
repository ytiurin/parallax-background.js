/*
* https://github.com/ytiurin/parallax-background.js
* https://github.com/ytiurin/parallax-background.js/raw/master/LICENSE
*/
!function(){

  var
  w=window,cl=console,
  updateEvents=['scroll','resize'],
  elements=document.querySelectorAll(arguments[0]),
  nmBackgroundPosition='backgroundPosition',
  nmBackgroundAttachment='backgroundAttachment';

  function updateBackground(rect,style)
  {
    var
      innerHeight=w.innerHeight,
      rectHeight=rect.height,
      rectTop=rect.top,
      rectBottomOffset=rectTop+rectHeight,
      offset=0;

    if((-1*rectTop)>rectHeight||rectTop>innerHeight)
      return;

    if(rectTop<0)
      offset=-1*rectTop>>1;

    if(rectBottomOffset>innerHeight)
      offset=-1*(rectBottomOffset-innerHeight)>>1;

    style[nmBackgroundPosition]=(style[nmBackgroundPosition].split(' ')[0]||'50%')+' '+offset+'px';

    if(style[nmBackgroundAttachment]!=='scroll')
      style[nmBackgroundAttachment]='scroll';
  }

  function iterateElements(i)
  {
    for(i=elements.length;i--;)
      updateBackground(elements[i].getBoundingClientRect(),elements[i].style);
  }

  if(cl)
    cl.log('https://github.com/ytiurin/parallax-background.js'),
    cl.log(elements);

  if(elements.length){
    for(var i in updateEvents)
      addEventListener(updateEvents[i],iterateElements);
    iterateElements();
  }
}
(/*CSS SELECTOR*/)
