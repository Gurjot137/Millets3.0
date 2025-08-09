
document.addEventListener('DOMContentLoaded', ()=>{
  const header = document.querySelector('.site-header');
  const hero = document.querySelector('.hero');
  const toTop = document.querySelector('.to-top');
  const whatsapp = document.querySelector('.floating-whatsapp');
  // header bg on scroll
  function checkScroll(){
    if(window.scrollY>80){
      header.style.background='linear-gradient(90deg, rgba(8,18,12,0.96), rgba(59,46,34,0.96))';
      header.style.boxShadow='0 10px 30px rgba(0,0,0,0.6)';
    } else {
      header.style.background='transparent';
      header.style.boxShadow='none';
    }
    if(window.scrollY>300) toTop.style.display='block'; else toTop.style.display='none';
  }
  checkScroll();
  window.addEventListener('scroll', checkScroll);

  // mobile nav
  document.querySelectorAll('.hamburger').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const m = document.querySelector('.mobile-nav');
      if(m.style.display==='block') m.style.display='none'; else m.style.display='block';
    });
  });

  // parallax layers (subtle)
  const layers = document.querySelectorAll('.layer');
  window.addEventListener('scroll', ()=>{
    const sc = window.scrollY;
    layers.forEach((l,i)=>{
      const speed = 0.02 + i*0.01;
      l.style.transform = 'translateY(' + (sc * speed) + 'px)';
    });
  });

  // product modal
  document.querySelectorAll('.card').forEach(card=>{
    card.addEventListener('click', ()=>{
      const modal = document.querySelector('.modal');
      const img = card.querySelector('img').src;
      const title = card.dataset_title || card.querySelector('h4').innerText;
      const price = card.querySelector('.price') ? card.querySelector('.price').innerText : '';
      modal.querySelector('img').src = img;
      modal.querySelector('h3').innerText = title;
      modal.querySelector('.desc').innerText = card.querySelector('.desc') ? card.querySelector('.desc').innerText : 'Product details are available upon request.';
      modal.style.display = 'flex';
    });
  });
  document.querySelectorAll('.modal .close, .modal').forEach(el=>{
    el.addEventListener('click', (e)=>{
      if(e.target.classList && (e.target.classList.contains('close') || e.target.classList.contains('modal'))) {
        document.querySelector('.modal').style.display='none';
      }
    });
  });

  // testimonials simple auto-scroll
  const tstrip = document.querySelector('.testimonials');
  if(tstrip){
    let pos=0;
    setInterval(()=>{
      pos += 1;
      if(pos> (tstrip.scrollWidth - tstrip.clientWidth)) pos=0;
      tstrip.scrollTo({left:pos, behavior:'smooth'});
    }, 3000);
  }

  // to-top
  document.querySelectorAll('.to-top').forEach(b=> b.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'})));

  // ensure text fits: truncate long descriptions in cards
  document.querySelectorAll('.card p, .card h4').forEach(el=>{
    // keep simple: limit to 90 characters
    if(el.innerText.length > 90) el.innerText = el.innerText.slice(0,86) + '...';
  });
});
