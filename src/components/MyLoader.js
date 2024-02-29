import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (

  <ContentLoader 
  speed={2}
  width={350}
  height={440}
  viewBox="0 0 350 450"
  backgroundColor="#ecebeb"
  foregroundColor="#f3f3f3"
>
  <rect x="25" y="36" rx="10" ry="10" width="315" height="236" /> 
  <circle cx="476" cy="528" r="83" /> 
  <rect x="30" y="410" rx="8" ry="8" width="289" height="17" /> 
  <rect x="30" y="377" rx="10" ry="10" width="162" height="24" /> 
  <rect x="29" y="299" rx="10" ry="10" width="128" height="24" /> 
  <rect x="31" y="334" rx="8" ry="8" width="289" height="13" /> 
  <rect x="30" y="355" rx="8" ry="8" width="289" height="13" />
</ContentLoader>
)

export default MyLoader