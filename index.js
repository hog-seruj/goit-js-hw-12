import{a as q,S as B,i as m}from"./assets/vendor-BSTwZ_tR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const M="https://pixabay.com/api/",P="52314850-74672a1c95493b5a9d1e8462c",u=15;async function f(n,r){const t=new URLSearchParams({key:P,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:u}),i=await q.get(`${M}?${t}`),e=Math.ceil(i.data.totalHits/u);return{data:i.data.hits,totalPages:e}}const h=document.querySelector(".gallery"),p=document.querySelector(".loader"),g=document.querySelector(".button-more"),E=new B(".gallery-item .link",{captionsData:"alt",captionDelay:250});function y(n){const r=n.map(({webformatURL:t,largeImageURL:i,tags:e,likes:o=0,views:a=0,comments:S=0,downloads:$=0})=>`
      <li class="gallery-item">
        <a class="link" href="${i}">
          <img src="${t}" alt="${e}" class="image" width="400">
        </a>
        <div class="information like">
          <h4>Likes</h4>
          <p>${o}</p>
        </div>
        <div class="information views">
          <h4>Views</h4>
          <p>${a}</p>
        </div>
        <div class="information comments">
          <h4>Comments</h4>
          <p>${S}</p>
        </div>
        <div class="information downloads">
          <h4>Downloads</h4>
          <p>${$}</p>
        </div>
      </li>
  `).join("");h.insertAdjacentHTML("beforeend",r),E.refresh()}function d(){h.innerHTML=""}function L(){p.classList.remove("hide")}function v(){p.classList.add("hide")}function b(){g.classList.remove("hide")}function l(){g.classList.add("hide")}const w=document.querySelector(".form"),H=document.querySelector(".button-more"),I=document.querySelector(".gallery");let s=1,c="";w.addEventListener("submit",O);H.addEventListener("click",D);function O(n){n.preventDefault(),s=1;const{["search-text"]:r}=n.target.elements;c=r.value.trim(),c.length&&(d(),L(),f(c,s).then(({data:t,totalPages:i})=>{if(!t.length)throw new Error("No images found!");y(t),b(),s>=i&&l()}).catch(t=>{d(),l(),m.error({message:t.message,position:"topRight"})}).finally(()=>{v()}),w.reset())}function D(n){n.preventDefault();const r=n.currentTarget;s+=1,L(),f(c,s).then(({data:t,totalPages:i})=>{if(s>=i?l():b(),s>i)throw new Error("We're sorry, but you've reached the end of search results.");y(t),r.disable=!0;const e=I.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*3,behavior:"smooth"})}).catch(t=>{l(),m.info({message:t.message,position:"topRight"})}).finally(()=>{v(),r.disable=!1})}
//# sourceMappingURL=index.js.map
