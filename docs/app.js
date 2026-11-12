const themeButton=document.getElementById('theme');
function syncTheme(){const light=document.documentElement.dataset.theme==='light';themeButton.textContent=light?'Dark mode ☾':'Light mode ☼';themeButton.setAttribute('aria-label',light?'Switch to dark mode':'Switch to light mode');}
themeButton.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='light'?'dark':'light';document.documentElement.dataset.theme=next;try{localStorage.setItem('filipotno-theme',next)}catch(e){}syncTheme();});
syncTheme();
