import{a as m,S as p,A as E,i as S}from"./assets/vendor-CxpIB8qW.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();m.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function q(){try{return(await m.get("/reviews")).data}catch(e){return console.error("Error fetching reviews:",e),null}}function k(){const e=document.querySelector(".navi");e&&(e.style.display="none")}function M(){const e=document.querySelector(".navi");e&&(e.style.display="block",e.style.opacity="inherit")}const w=document.querySelector(".menu");w&&w.addEventListener("click",function(e){M()});document.addEventListener("click",function(e){const t=document.querySelector(".navi"),n=document.querySelector(".menu");t&&!t.contains(e.target)&&!n.contains(e.target)&&k()});function B(){const e=document.querySelector(".mob-menu");e&&(e.classList.add("is-open"),document.body.classList.add("no-scroll"))}function f(){const e=document.querySelector(".mob-menu");e&&(e.classList.remove("is-open"),document.body.classList.remove("no-scroll"))}const y=document.querySelector(".open-menu-btn");y&&y.addEventListener("click",function(){B()});const v=document.querySelector(".mob-menu-close-btn");v&&v.addEventListener("click",function(){f()});document.addEventListener("click",function(e){const t=document.querySelector(".mob-menu"),n=document.querySelector(".open-menu-btn");t&&!t.contains(e.target)&&!n.contains(e.target)&&f()});document.addEventListener("click",function(e){document.querySelectorAll(".mob-menu a").forEach(n=>{n===e.target&&f()})});const P=document.querySelector(".about-skills");new p(P,{navigation:{nextEl:".about-swiper-btn"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{invert:!0},grabCursor:!0,touchEventsTarget:"wrapper",slideClass:"about-skills-item",slideActiveClass:"about-skills-item-accent",wrapperClass:"about-skills-list",loop:!0,with:6,breakpoints:{320:{slidesPerView:2,spaceBetween:0,slideToClickedSlide:!0},768:{slidesPerView:3},1440:{slidesPerView:6,width:6}}});new p(".project-swiper",{slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});new E(".faq-accordion-container",{showMultiple:!1,collapse:!0});const C=document.getElementById("covers"),b=document.querySelectorAll(".covers-marquee__inner"),x=new IntersectionObserver((e,t)=>{e.forEach(n=>{n.isIntersecting?b.forEach(r=>{r.style.animationPlayState="running"}):b.forEach(r=>{r.style.animationPlayState="paused"})})},{root:null,threshold:.5});x.observe(C);const d=document.querySelector(".list-reviews-script");function T({author:e,avatar_url:t,review:n}){return`<li class="item-review swiper-slide swiper-slide-review">
           <img src="${t}" class="img-review" alt="${e}" />
           <h3 class="name-review">${e}</h3>
           <p class="text-review">${n}</p>
          </li>`}function O(e){return e.map(T).join("")}document.addEventListener("DOMContentLoaded",V);async function V(){try{const e=await q();if(e&&e.length>0){d.innerHTML=O(e);const t=new p(".swiper-review",{slidesPerView:"auto",breakpoints:{320:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:30},1440:{slidesPerView:4,spaceBetween:16}},spaceBetween:16,navigation:{nextEl:".swiper-button-next-review",prevEl:".swiper-button-prev-review"},keyboard:{enabled:!0,onlyInViewport:!1},a11y:{prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide"},grabCursor:!0,loop:!1,speed:600});t.on("slideChange",()=>c(t)),t.on("reachEnd",()=>c(t)),t.on("reachBeginning",()=>c(t)),c(t),t.update()}else d.innerHTML='<li class="item-review">Not found</li>'}catch{S.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",message:"Failed to load reviews"}),d.innerHTML='<li class="item-review">Not found</li>'}}function c(e){const t=document.querySelector(".swiper-button-prev-review"),n=document.querySelector(".swiper-button-next-review");t.disabled=e.isBeginning,n.disabled=e.isEnd,t.classList.toggle("disabled",t.disabled),n.classList.toggle("disabled",n.disabled)}function l(){const e=document.querySelector(".modal-window"),t=document.querySelector("body");e&&(e.style.display="none",t.style.overflow="",document.removeEventListener("click",h),document.removeEventListener("keydown",L))}l();function N(){const e=document.querySelector(".modal-window"),t=document.querySelector("body");e&&(e.style.display="block",t.style.overflow="hidden",document.addEventListener("click",h),document.addEventListener("keydown",L))}function h(e){const t=document.querySelector(".modal-content");t&&!t.contains(e.target)&&l()}function L(e){e.key==="Escape"&&l()}const i=document.querySelector(".work-together-form"),g=document.querySelector(".btn-close");i&&i.addEventListener("submit",function(e){e.preventDefault();const t=i.elements.email.value,n=i.elements.comments.value,r={email:t,comment:n};m.post("https://portfolio-js.b.goit.study/api/requests",r,{headers:{"Content-Type":"application/json"}}).then(o=>{console.log("Форма успішно відправлена:",o.data),i.reset(),N()}).catch(o=>{console.error("Виникла помилка:",o),alert("Виникла помилка при відправці форми.")})});g&&g.addEventListener("click",function(){i.reset(),l()});document.querySelectorAll(".hero_social_media, .email, .work-together-items").forEach(e=>{e.addEventListener("mouseover",()=>{e.style.transform="translateY(-10px)",e.style.transition="transform 0.3s ease-in-out"}),e.addEventListener("mouseout",()=>{e.style.transform="translateY(0px)",e.style.transition="transform 0.3s ease-in-out"})});const u=document.querySelector(".scroll-up-btn");u.addEventListener("click",A);async function A(){await new Promise(e=>{window.scrollTo({top:0,behavior:"smooth"}),e()})}function I(){window.scrollY>1300?u.classList.remove("scroll-up-btn-hidden"):u.classList.add("scroll-up-btn-hidden")}window.addEventListener("scroll",I);
//# sourceMappingURL=commonHelpers.js.map
