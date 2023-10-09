"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[918],{7918:function(A,i,s){s.r(i),s.d(i,{default:function(){return p}});var r=s(7689),a=s(1087),t=s(2081),R=s(5867),x=(0,R.ZP)("li")({maxWidth:"200px",position:"relative",overflow:"hidden",borderRadius:"4px",transition:"transform ".concat("250ms cubic-bezier(0.4, 0, 0.2, 1)"),"&:hover, &:focus":{transform:"scale(1.05)",boxShadow:"0px 0px 2px 1px rgba(0, 0, 0, 0.2)"}}),o=(0,R.ZP)("div")({padding:"10px 4px"}),n=(0,R.ZP)("h2")({fontSize:"20px",fontWeight:"500",color:"#fff"}),B=s(184),c=function(A){var i=A.movie,s=(0,r.TH)();var R=i||{},c=R.id,e=R.title,p=R.poster_path,E=R.name,N=16,g=p?"https://image.tmdb.org/t/p/w300/"+p:t,F=e||E;return(0,B.jsx)(x,{title:e,children:(0,B.jsxs)(a.rU,{to:"/movies/".concat(c.toString()),state:{from:s},children:[(0,B.jsx)("img",{src:g,alt:e,width:200}),(0,B.jsx)(o,{children:(0,B.jsx)(n,{children:function(A){return A.length<N?A:A.slice(0,N)+"..."}(F)})})]})})},e=(0,R.ZP)("ul")({display:"flex",flexWrap:"wrap",gap:"40px 60px",alignItems:"start",justifyContent:"space-evenly"}),p=function(A){var i=A.moviesList;return(0,B.jsx)(e,{children:i.map((function(A){return(0,B.jsx)(c,{movie:A},A.id)}))})}},2081:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=918.40bff094.chunk.js.map