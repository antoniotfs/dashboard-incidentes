import{j as e}from"./index-DizsaebB.js";import{R as p,v as f,F as w,x as a,B as g}from"./index-9FjqH_au.js";import{S as l}from"./index-B7zX0Gul.js";import{d as n}from"./styled-components.browser.esm-cqRc8F4r.js";const u=n("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`,y=n("p")`
  margin: 1.5rem 0 2rem 0;
`,v=n(p)`
  display: flex;
  flex-direction: ${({direction:r})=>r==="left"?"row":"row-reverse"};
`,b=n("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`,C=n("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`,S=n("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`,B=n("p")`
  font-size: 13px;
`,R=n("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`,I=({icon:r,title:x,content:m,section:d,button:c,t:s,id:h,direction:o})=>{const j=t=>{document.getElementById(t).scrollIntoView({behavior:"smooth"})};return e.jsx(u,{children:e.jsx(w,{direction:o,triggerOnce:!0,children:e.jsxs(v,{justify:"space-between",align:"middle",id:h,direction:o,children:[e.jsx(a,{lg:11,md:11,sm:12,xs:24,children:e.jsx(l,{src:r,width:"100%",height:"100%"})}),e.jsx(a,{lg:11,md:11,sm:11,xs:24,children:e.jsxs(b,{children:[e.jsx("h6",{children:s(x)}),e.jsx(y,{children:s(m)}),o==="right"?e.jsx(R,{children:typeof c=="object"&&c.map((t,i)=>e.jsx(g,{color:t.color,onClick:()=>j("about"),children:s(t.title)},i))}):e.jsx(C,{children:e.jsx(p,{justify:"space-between",children:typeof d=="object"&&d.map((t,i)=>e.jsxs(a,{span:11,children:[e.jsx(l,{src:t.icon,width:"60px",height:"60px"}),e.jsx(S,{children:s(t.title)}),e.jsx(B,{children:s(t.content)})]},i))})})]})})]})})})},z=f()(I);export{z as default};
