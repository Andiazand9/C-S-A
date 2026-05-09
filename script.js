(function(){
  var canvas=document.getElementById('heroCanvas');
  var ctx=canvas.getContext('2d');
  var symbols=['+','&times;','&divide;','&minus;','&sum;','&pi;','&radic;','&infin;','&Delta;','&lambda;','&alpha;','&beta;','&part;'];
  var rawSymbols=['+','x','/','−','Σ','π','√','∞','Δ','λ','α','β','∂'];
  var particles=[];
  function resize(){
    canvas.width=canvas.offsetWidth;
    canvas.height=canvas.offsetHeight;
    initParticles();
  }
  function initParticles(){
    particles=[];
    var count=Math.floor(canvas.width*canvas.height/12000);
    for(var i=0;i<count;i++) particles.push(makeParticle(true));
  }
  function makeParticle(rand){
    return{
      x:Math.random()*canvas.width,
      y:rand?Math.random()*canvas.height:canvas.height+20,
      sym:rawSymbols[Math.floor(Math.random()*rawSymbols.length)],
      size:Math.random()*14+10,
      speed:Math.random()*.35+.12,
      opacity:Math.random()*.15+.04,
      drift:(Math.random()-.5)*.3
    };
  }
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(var i=0;i<particles.length;i++){
      var p=particles[i];
      ctx.save();
      ctx.globalAlpha=p.opacity;
      ctx.fillStyle='#ffffff';
      ctx.font='300 '+p.size+'px "DM Sans",sans-serif';
      ctx.fillText(p.sym,p.x,p.y);
      ctx.restore();
      p.y-=p.speed;
      p.x+=p.drift;
      if(p.y<-30){var np=makeParticle(false);particles[i]=np;}
    }
    requestAnimationFrame(draw);
  }
  window.addEventListener('resize',resize);
  resize();draw();
})();

window.addEventListener('scroll',function(){
  var nav=document.getElementById('navbar');
  nav.style.background=window.scrollY>10?'rgba(7,9,26,0.96)':'rgba(7,9,26,0.82)';
});

document.getElementById('faqList').addEventListener('click',function(e){
  var btn=e.target.closest('.faq-q');
  if(!btn)return;
  var item=btn.parentElement;
  var body=item.querySelector('.faq-body');
  var isOpen=item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(function(el){
    el.classList.remove('open');
    el.querySelector('.faq-body').style.maxHeight='0';
  });
  if(!isOpen){
    item.classList.add('open');
    body.style.maxHeight=body.scrollHeight+'px';
  }
});
