import{r as s,j as n}from"./index-o7xOxfVc.js";import{S as l}from"./index-WBlcSUJA.js";import{d as c}from"./styled-components.browser.esm-p_bcJ-T9.js";const a=c("div")`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${o=>o.$show?"visible":"hidden"}; // Usando $show
  opacity: ${o=>o.$show?"1":"0"};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`,x=()=>{const[o,r]=s.useState(!1),e=s.useCallback(()=>{const t=window.scrollY;!o&&t>350?r(!0):t<=350&&r(!1)},[o]);s.useEffect(()=>(window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}),[e]);const i=()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})};return n.jsx(a,{onClick:i,$show:o,children:n.jsx(l,{src:"scroll-top.svg",width:"20px",height:"20px"})})};export{x as default};
