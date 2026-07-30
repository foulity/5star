
const btn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav-links');
if(btn&&nav){btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
const form=document.getElementById('quoteForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const s=encodeURIComponent('5 Star Construction Quote Request');const b=encodeURIComponent(`Name: ${d.get('Name')}\nPhone: ${d.get('Phone')}\nEmail: ${d.get('Email')}\nService: ${d.get('Service')}\n\nProject Details:\n${d.get('Project Details')||''}`);location.href=`mailto:yohanneszeresenay35@gmail.com?subject=${s}&body=${b}`})}
