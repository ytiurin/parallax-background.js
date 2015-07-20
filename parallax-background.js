/*
* https://github.com/ytiurin/parallax-background.js
* https://github.com/ytiurin/parallax-background.js/raw/master/LICENSE
*/

!function(p,r,l,x){
  function v(b,c,k,g,n,d)
  {
    if((-1*b.top)>b.height||b.top>k)
      return;

    d=0;
    b.top<0&&
      (d=-1*b.top/2);

    n=b.top+b.height;
    n>k&&
      (d=-1*(n-k)/2);

    c[l[0]]=(c[l[0]].split(' ')[0]||'50%')+' '+d+'px';
    c[l[1]]!=='scroll'&&
      (c[l[1]]='scroll')
  }

  function w(i)
  {
    for(i=x.length;i--;)
      v(x[i].getBoundingClientRect(),x[i].style,r.innerHeight)
  }

  r=window,l=['backgroundPosition','backgroundAttachment','addEventListener',
    'console'],x=document.querySelectorAll(p);

  r[l[3]]&&(r[l[3]].log('https://github.com/ytiurin/parallax-background.js')||
    r[l[3]].log(x));

  if(x.length){
    r[l[2]]('scroll',w);
    r[l[2]]('resize',w);
    w()
  }
}
(/*CSS SELECTOR*/)
