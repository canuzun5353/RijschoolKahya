document.documentElement.classList.add('js');
const toggle=document.querySelector('.menu'),nav=document.querySelector('.navlinks');
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?toggle.dataset.close:toggle.dataset.open);nav.classList.toggle('open',open)});
nav.addEventListener('click',event=>{if(event.target.closest('a')){toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label',toggle.dataset.open);nav.classList.remove('open')}});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){toggle.click();toggle.focus()}});
