import{a as q,S as P,i as d}from"./assets/vendor-BSTwZ_tR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const B="https://pixabay.com/api/",M="52314850-74672a1c95493b5a9d1e8462c",l=15;async function m(n,r){const t=new URLSearchParams({key:M,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:l}),i=await q.get(`${B}?${t}`),e=Math.ceil(i.data.totalHits/l);return{data:i.data.hits,totalPages:e}}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),p=document.querySelector(".button-more"),E=new P(".gallery-item .link",{captionsData:"alt",captionDelay:250});function g(n){const r=n.map(({webformatURL:t,largeImageURL:i,tags:e,likes:o=0,views:s=0,comments:S=0,downloads:$=0})=>`
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
          <p>${s}</p>
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
  `).join("");f.insertAdjacentHTML("beforeend",r),E.refresh()}function u(){f.innerHTML=""}function y(){h.classList.remove("hide")}function L(){h.classList.add("hide")}function v(){p.classList.remove("hide")}function b(){p.classList.add("hide")}const w=document.querySelector(".form"),H=document.querySelector(".button-more"),I=document.querySelector(".gallery");let c=1,a="";w.addEventListener("submit",O);H.addEventListener("click",D);function O(n){n.preventDefault();const{["search-text"]:r}=n.target.elements;a=r.value.trim(),a.length&&(u(),y(),m(a,1).then(({data:t})=>{if(!t.length)throw new Error("No images found!");g(t),v()}).catch(t=>{u(),b(),d.error({message:t.message,position:"topRight"})}).finally(()=>{L()}),w.reset())}function D(n){n.preventDefault();const r=n.currentTarget;c+=1,y(),m(a,c).then(({data:t,totalPages:i})=>{if(c>=i)throw new Error("We're sorry, but you've reached the end of search results.");g(t),v(),r.disable=!0;const e=I.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*3,behavior:"smooth"})}).catch(t=>{b(),d.info({message:t.message,position:"topRight"})}).finally(()=>{L(),r.disable=!1})}
//# sourceMappingURL=index.js.map
