(function(){
  const btn=document.createElement('button');
  btn.textContent='فاصل';
  Object.assign(btn.style,{position:'fixed',bottom:'20px',right:'20px',padding:'12px 16px',background:'#0ea5a4',color:'#fff',border:'none',borderRadius:'50px',cursor:'pointer',zIndex:9999});
  document.body.appendChild(btn);

  const overlay=document.createElement('div');
  Object.assign(overlay.style,{display:'none',position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'rgba(0,0,0,0.7)',justifyContent:'center',alignItems:'center',zIndex:9998});
  overlay.innerHTML=`<div style="position:relative;width:90%;height:90%;background:#fff;border-radius:12px;overflow:hidden;">
    <button id="closeFs" style="position:absolute;top:10px;right:10px;z-index:10;background:#f87171;color:#fff;border:none;border-radius:50%;width:32px;height:32px;cursor:pointer;font-weight:bold;">✕</button>
    <iframe src="https://Kawkab-Official.github.io/data/index.html" style="width:100%;height:100%;border:none;"></iframe>
  </div>`;
  document.body.appendChild(overlay);

  btn.addEventListener('click',()=>overlay.style.display='flex');
  overlay.querySelector('#closeFs').addEventListener('click',()=>overlay.style.display='none');
})();
