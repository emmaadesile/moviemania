(this.webpackJsonpmoviemania=this.webpackJsonpmoviemania||[]).push([[0],{103:function(n,e,t){},231:function(n,e,t){n.exports=t.p+"static/media/avengers_endgame.8bef76c9.jpg"},232:function(n,e,t){n.exports=t.p+"static/media/arrow-wallpaper.651a09d0.jpg"},233:function(n,e,t){n.exports=t.p+"static/media/moviemania-logo.24c12bfb.svg"},234:function(n,e,t){},236:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(89),o=t.n(i),c=t(95),l=(t(103),t(11)),s=t(12),u=t(14),m=t(13),p=t(15),d=t(3),f=t(2),v=t(5),g=t(6),h=t(17),b=t.n(h),x=t(91),E=t.n(x),w="0edf560d45bf9b88baced0cac6b95b03",k="https://api.themoviedb.org/3",y=function(n,e){var t=Object(a.useState)([]),r=Object(g.a)(t,2),i=r[0],o=r[1],c=Object(a.useState)(!1),l=Object(g.a)(c,2),s=l[0],u=l[1],m=e||1,p="movie"===n?"".concat(k,"/discover/movie?api_key=").concat(w,"&language=en-US&sort_by=popularity.desc&page=").concat(m):"".concat(k,"/discover/tv?api_key=").concat(w,"&language=en-US&sort_by=popularity.desc&page=").concat(m);Object(a.useEffect)((function(){!function(){var n;b.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.awrap(E()(p));case 3:n=e.sent,d(n.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),u(!0);case 10:case"end":return e.stop()}}),null,null,[[0,7]])}()}),[p,e]);var d=function(n){var e=n.map((function(n){return{title:n.title,vote_count:n.vote_count,id:n.id,genre_ids:n.genre_ids,poster_path:n.poster_path,original_name:n.original_name,vote_average:n.vote_average,first_air_date:n.first_air_date,release_date:n.release_date}}));o(e)};return[i,s]},j=t(27);function O(){var n=Object(d.a)(["\n  cursor: pointer;\n\n  .movieTitle {\n    font-weight: 300;\n    font-size: 1.2em;\n    color: #000 !important;\n  }\n  .releaseDate {\n    font-weight: 300;\n    color: grey;\n    margin-top: -10px;\n\n    &:hover {\n      color: grey !important;\n    }\n  }\n"]);return O=function(){return n},n}function _(){var n=Object(d.a)(["\n  img {\n    width: 100%;\n    transition: transform s cubic-bezier(0.075, 0.82, 0.165, 1);\n    &:hover {\n      box-shadow: 0 16px 30px -8px rgba(0, 0, 0, 0.15);\n      transform: translateY(-8px);\n    }\n  }\n"]);return _=function(){return n},n}var z=f.c.div(_()),D=f.c.div(O()),N=function(n){var e,t,a=n.video;"tv"===n.type?(e=new Date(a.first_air_date),t=a.original_name):(e=new Date(a.release_date),t=a.title);var i=Object(j.format)(e,"MMM DD, YYYY");return r.a.createElement(z,null,r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w342/".concat(a.poster_path),alt:"movie_poster"}),r.a.createElement(D,null,r.a.createElement("p",{className:"movieTitle"},t),r.a.createElement("p",{className:"releaseDate"},i)))};function X(){var n=Object(d.a)(['\n  margin: 200px auto;\n  min-height: 100vh;\n\n  h1 {\n    font-family: "Actor", sans-serif;\n    color: #fff;\n    font-size: 16px;\n    letter-spacing: 1px;\n    font-weight: 200;\n    text-align: center;\n  \n\n  span {\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    display: inline-block;\n    position: absolute;\n    left: 50%;\n    margin-left: -10px;\n    -webkit-animation: 3s infinite linear;\n    -moz-animation: 3s infinite linear;\n    -o-animation: 3s infinite linear;\n  }\n\n  span:nth-child(2) {\n    background: #e84c3d;\n    -webkit-animation: kiri 1.2s infinite linear;\n    -moz-animation: kiri 1.2s infinite linear;\n    -o-animation: kiri 1.2s infinite linear;\n  }\n\n  span:nth-child(3) {\n    background: #f1c40f;\n    z-index: 100;\n  }\n\n  @-webkit-keyframes kanan {\n    0% {\n      -webkit-transform: translateX(20px);\n    }\n\n    50% {\n      -webkit-transform: translateX(-20px);\n    }\n\n    100% {\n      -webkit-transform: translateX(20px);\n      z-index: 200;\n    }\n  }\n\n  @-moz-keyframes kanan {\n    0% {\n      -moz-transform: translateX(20px);\n    }\n    50% {\n      -moz-transform: translateX(-20px);\n    }\n    100% {\n      -moz-transform: translateX(20px);\n      z-index: 200;\n    }\n  }\n\n  @-o-keyframes kanan {\n    0% {\n      -o-transform: translateX(20px);\n    }\n\n    50% {\n      -o-transform: translateX(-20px);\n    }\n\n    100% {\n      -o-transform: translateX(20px);\n      z-index: 200;\n    }\n  }\n\n  @-webkit-keyframes kiri {\n    0% {\n      -webkit-transform: translateX(-20px);\n      z-index: 200;\n    }\n    50% {\n      -webkit-transform: translateX(20px);\n    }\n    100% {\n      -webkit-transform: translateX(-20px);\n    }\n  }\n\n  @-moz-keyframes kiri {\n    0% {\n      -moz-transform: translateX(-20px);\n      z-index: 200;\n    }\n    50% {\n      -moz-transform: translateX(20px);\n    }\n    100% {\n      -moz-transform: translateX(-20px);\n    }\n  }\n\n  @-o-keyframes kiri {\n    0% {\n      -o-transform: translateX(-20px);\n      z-index: 200;\n    }\n    50% {\n      -o-transform: translateX(20px);\n    }\n    100% {\n      -o-transform: translateX(-20px);\n    }\n  }\n']);return X=function(){return n},n}var I=f.c.div(X()),S=function(){return r.a.createElement(I,null,r.a.createElement("h1",null,"LOADING"),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))};function T(){var n=Object(d.a)(["\n  font-weight: 600;\n  font-size: 1.2em;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  border: 1.5px solid #ddd;\n  padding: 15px 70px;\n  cursor: pointer;\n"]);return T=function(){return n},n}function C(){var n=Object(d.a)(["\n  width: 100%;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  height: 60px;\n  margin-bottom: 40px;\n"]);return C=function(){return n},n}var B=f.c.div(C()),M=f.c.p(T()),Y=function(n){return r.a.createElement(B,null,r.a.createElement(M,{onClick:n.handleClick},"Load More"))};function F(){var n=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-gap: 20px;\n  justify-items: center;\n  align-items: start;\n  background: white;\n  margin: -80px 0 auto;\n  z-index: 1000;\n  padding: 30px 20px;\n"]);return F=function(){return n},n}function A(){var n=Object(d.a)(["\n  height: 600px;\n  clip-path: polygon(0 0, 0 98%, 100% 92%, 100% 0);\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(",");\n"]);return A=function(){return n},n}function W(){var n=Object(d.a)(["\n  display: grid;\n  padding: 0 50px;\n"]);return W=function(){return n},n}function L(){var n=Object(d.a)(["\n  height: 100%;\n  width: 100%;\n"]);return L=function(){return n},n}var H=f.c.div(L()),R=f.c.div(W()),J=f.c.div(A(),t(231)),P=f.c.div(F()),U=function(n){var e=y("movie"),t=Object(g.a)(e,2),a=t[0],i=t[1];return r.a.createElement(H,null,i&&r.a.createElement("h2",null,"Oops something went wrong..."),0!==a.length||i?r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null),r.a.createElement(R,null,r.a.createElement(P,null,a.map((function(n){return r.a.createElement(v.a,{to:"/movie/".concat(n.id),key:n.id},r.a.createElement(N,{key:n.id,type:"movie",video:n}))}))),r.a.createElement(Y,{handleClick:function(){console.log("load more movies")}}))):r.a.createElement(S,null))};function V(){var n=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-gap: 20px;\n  justify-items: center;\n  align-items: start;\n  background: white;\n  margin: -80px 0 auto;\n  z-index: 1000;\n  padding: 30px 20px;\n"]);return V=function(){return n},n}function q(){var n=Object(d.a)(["\n  height: 600px;\n  clip-path: polygon(0 0, 0 98%, 100% 92%, 100% 0);\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(",");\n"]);return q=function(){return n},n}function G(){var n=Object(d.a)(["\n  display: grid;\n  padding: 0 50px;\n"]);return G=function(){return n},n}function K(){var n=Object(d.a)(["\n  height: 100%;\n  width: 100%;\n"]);return K=function(){return n},n}var Q=f.c.div(K()),Z=f.c.div(G()),$=f.c.div(q(),t(232)),nn=f.c.div(V()),en=function(){var n=y("tv"),e=Object(g.a)(n,2),t=e[0],a=e[1];return r.a.createElement(Q,null,a&&r.a.createElement("h2",null,"Oops something went wrong..."),0!==t.length||a?r.a.createElement(r.a.Fragment,null,r.a.createElement($,null),r.a.createElement(Z,null,r.a.createElement(nn,null,t.map((function(n){return r.a.createElement(v.a,{to:"/tv/".concat(n.id),key:n.id},r.a.createElement(N,{key:n.id,type:"tv",video:n}))}))))):r.a.createElement(S,null))};function tn(){var n=Object(d.a)(["\n  iframe {\n    width: 100%;\n    height: 600px;\n\n    @media (max-width: 600px) {\n      width: 576px;\n      height: 450px;\n    }\n\n    @media (max-width: 400px) {\n      width: 378px;\n      height: 300px;\n    }\n  }\n\n  left: 0px;\n  top: 90px;\n  z-index: 100;\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-items: center;\n\n  .closeTrailer {\n    background: #000;\n    width: 100%;\n    height: 50px;\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: end;\n    align-items: center;\n\n    .fa-times {\n      font-size: 20px;\n      color: #555;\n      font-weight: 900;\n      cursor: pointer;\n      margin-right: 10px;\n\n      &:hover {\n        color: #777;\n      }\n    }\n  }\n"]);return tn=function(){return n},n}function an(){var n=Object(d.a)(['\n  max-width: 450px;\n  padding: 10px 20px;\n\n  h1 {\n    font-size: 3.2rem;\n    font-family: "DINNextW01-Bold";\n    text-align: left;\n  }\n\n  p {\n    font-family: "Helvetica Neue";\n    line-height: 1.5rem;\n    font-size: 1.1rem;\n  }\n\n  .releaseDate {\n    font-size: 0.9rem;\n    margin-top: -2.2rem;\n    color: #999;\n  }\n\n  .overview {\n    line-height: 25px;\n    color: #eee;\n  }\n']);return an=function(){return n},n}function rn(){var n=Object(d.a)(["\n  background-color: #e50603;\n  padding: 6px 10px;\n  cursor: pointer;\n  font-size: 1.2rem;\n  border-radius: 4px;\n  transition: 0.5s background-color cubic-bezier(0.075, 0.82, 0.165, 1);\n  color: white;\n  border: none;\n  font-size: 0.9rem;\n  justify-self: start;\n\n  &:hover {\n    background-color: #d84443;\n  }\n\n  .fa-play {\n    margin-right: 5px;\n  }\n"]);return rn=function(){return n},n}function on(){var n=Object(d.a)(["\n  .backdrop {\n    color: #eee;\n  }\n\n  .backdropBg {\n    @media (min-width: 768px) {\n      grid-template-columns: 1fr;\n\n      .moreDetails {\n        grid-template-columns: repeat(2, 1fr);\n      }\n    }\n\n    @media (min-width: 992px) {\n      grid-template-columns: 1fr 1fr;\n    }\n\n    @media (min-width: 576px) {\n      .moreDetails {\n        grid-template-columns: repeat(2, 1fr);\n      }\n    }\n\n    @media (min-width: 375px) {\n      .moreDetails {\n        grid-template-columns: repeat(2, 1fr);\n      }\n    }\n\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    width: 100%;\n    height: 700px;\n\n    top: 92px;\n    background-color: rgba(0, 0, 0, 0.7);\n\n    .moreDetails {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));\n      grid-gap: 15px;\n\n      .videoRating {\n        color: #ddd;\n\n        .fa-fire {\n          border-radius: 50%;\n          border: 1px solid #ddd;\n          padding: 5px 7px;\n          color: #e50603;\n          margin-right: 5px;\n        }\n      }\n    }\n  }\n"]);return on=function(){return n},n}function cn(){var n=Object(d.a)(["\n  height: 800px;\n  width: 100%;\n  object-fit: cover;\n  z-index: -10;\n  position: absolute;\n  top: 0;\n"]);return cn=function(){return n},n}var ln=f.c.img(cn()),sn=f.c.div(on()),un=f.c.button(rn()),mn=f.c.div(an()),pn=f.c.div(tn()),dn=function(n){function e(){var n,t;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(u.a)(this,(n=Object(m.a)(e)).call.apply(n,[this].concat(r)))).state={hasError:!1},t}return Object(p.a)(e,n),Object(s.a)(e,[{key:"componentDidCatch",value:function(n,e){console.log("An error occured in the component",n,e)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",null,r.a.createElement("h2",null,"An error occurred while making the request. Click ",r.a.createElement(v.a,{to:"/"},"here"),"to go home")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),e}(a.Component),fn=function(n){var e=function(){var n=window.location.pathname,e=n.replace(/[\D]/g,""),t=/movie/.test(n)?"movie":"tv";return{videoDetailsEndpoint:"".concat("https://api.themoviedb.org/3","/").concat(t,"/").concat(e,"?api_key=").concat("0edf560d45bf9b88baced0cac6b95b03","&append_to_response=credits"),videoTrailerEndpoint:"".concat("https://api.themoviedb.org/3","/").concat(t,"/").concat(e,"?api_key=").concat("0edf560d45bf9b88baced0cac6b95b03","&append_to_response=videos")}}(),t=e.videoDetailsEndpoint,i=e.videoTrailerEndpoint,o=Object(a.useState)({vote_average:"",backdrop_path:"",overview:"",videoTitle:"",releaseDate:"",trailerId:""}),c=Object(g.a)(o,2),l=c[0],s=c[1],u=Object(a.useState)(!1),m=Object(g.a)(u,2),p=m[0],d=m[1],f=Object(a.useState)(!1),v=Object(g.a)(f,2),h=v[0],x=v[1],E=Object(a.useState)(!1),w=Object(g.a)(E,2),k=w[0],y=w[1];Object(a.useEffect)((function(){var e=function(e){var t,a,r=e[0],i=r.vote_average,o=r.backdrop_path,c=r.overview,l=r.original_name,u=r.title,m=r.first_air_date,p=r.release_date,d=e[1].videos.results[0].key,f=n.uri;/movie/.test(f)?(a=u,t=new Date(p)):(a=l,t=new Date(m));var v=Object(j.format)(t,"MMM DD, YYYY");s({vote_average:i,backdrop_path:o,overview:c,videoTitle:a,releaseDate:v,trailerId:d})};!function(){var n;b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,b.a.awrap(Promise.all([fetch(t).then((function(n){return n.json()})),fetch(i).then((function(n){return n.json()}))]));case 3:n=a.sent,e(n),d(!1),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),y(!0);case 11:case"end":return a.stop()}}),null,null,[[0,8]])}()}),[t,i,n]),Object(a.useEffect)((function(){var n=function(n){if(27===n.keyCode){if(!h)return;x(!1)}};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}));var O=l.backdrop_path,_=l.videoTitle,z=l.overview,D=l.releaseDate,N=l.vote_average,X=l.trailerId;return r.a.createElement(r.a.Fragment,null,k&&r.a.createElement("h2",null,"Oops, something went wrong"),p&&!k?r.a.createElement(S,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(sn,null,r.a.createElement(ln,{src:"https://image.tmdb.org/t/p/original".concat(O),alt:"video_backdrop"}),r.a.createElement("div",{className:"backdrop"},r.a.createElement("div",{className:"backdropBg"},r.a.createElement(mn,null,r.a.createElement("h1",null,_),r.a.createElement("p",{className:"releaseDate"},"Release Date: ",D),r.a.createElement("p",{className:"overview"},z),r.a.createElement("div",{className:"moreDetails"},r.a.createElement(un,{type:"button",onClick:function(){return x(!0)},"aria-labelledby":"play-button"},r.a.createElement("i",{className:"fas fa-play"}),r.a.createElement("span",null,"Play Trailer")),r.a.createElement("div",{className:"videoRating"},r.a.createElement("i",{className:"fas fa-fire"}),r.a.createElement("span",null,N," / 10"))))))),h&&r.a.createElement(pn,null,r.a.createElement("div",{className:"closeTrailer"},r.a.createElement("i",{role:"close-button",className:"fa fa-times","aria-labelledby":"close-trailer",onClick:function(){return x(!1)}})),r.a.createElement("iframe",{src:"https://www.youtube.com/embed/".concat(X),title:"videoTrailer",allowFullScreen:!0,frameBorder:"0"}))))};function vn(n){return r.a.createElement(dn,null,r.a.createElement(fn,n))}var gn=function(){return r.a.createElement(v.b,null,r.a.createElement(U,{path:"/"}),r.a.createElement(U,{path:"/movies"}),r.a.createElement(en,{path:"/tv"}),r.a.createElement(vn,{path:"/tv/:videoId/"}),r.a.createElement(vn,{path:"/movie/:videoId/"}))};function hn(){var n=Object(d.a)(["\n  height: 2.5rem;\n  width: auto;\n"]);return hn=function(){return n},n}function bn(){var n=Object(d.a)(["\n  height: 40px;\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: center;\n  justify-items: center;\n  color: white;\n\n  .navItems {\n    width: 200px;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-items: center;\n\n    a {\n      text-decoration: none;\n      color: #fff !important;\n      transition: 0.3s color ease-in-out;\n      display: block;\n    }\n\n    a:hover {\n      color: #777 !important;\n    }\n\n    li {\n      list-style: none;\n    }\n  }\n"]);return bn=function(){return n},n}function xn(){var n=Object(d.a)(["\n  height: 52px;\n  border: 1px solid #393939;\n  display: grid;\n  grid-template-columns: 1fr;\n  place-items: center;\n"]);return xn=function(){return n},n}function En(){var n=Object(d.a)(["\n  height: 92px;\n  background: #22262a;\n"]);return En=function(){return n},n}var wn=f.c.nav(En()),kn=f.c.div(xn()),yn=f.c.div(bn()),jn=f.c.img(hn()),On=function(n){function e(){var n,t;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(u.a)(this,(n=Object(m.a)(e)).call.apply(n,[this].concat(r)))).state={},t}return Object(p.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement(wn,null,r.a.createElement(kn,null,r.a.createElement(jn,{src:t(233)})),r.a.createElement(yn,null,r.a.createElement("div",{className:"navItems"},r.a.createElement("li",null,r.a.createElement(v.a,{to:"/movies"},"MOVIES")),r.a.createElement("li",null,r.a.createElement(v.a,{to:"/tv"},"TV SHOWS")))))}}]),e}(r.a.Component);function _n(){var n=Object(d.a)(["\n  height: 70px;\n  background: #393939;\n  color: #fff;\n  text-align: center;\n  display: grid;\n  place-items: center;\n\n  a {\n    text-decoration: none;\n    color: red;\n  }\n"]);return _n=function(){return n},n}var zn=f.c.div(_n()),Dn=function(){return r.a.createElement(zn,null,r.a.createElement("p",null,"Made with \u2764 by ",r.a.createElement("a",{href:"https://twitter.com/emma_adesile"},"Emmanuel")))};t(234);function Nn(){var n=Object(d.a)(['\n  @font-face {\n    font-family: "DINNextW01-Bold";\n    src: url("./assets/fonts/DINNextW01-Bold.otf") format(otf);\n  }\n\n  * {\n    outline: none;\n  }\n\n  body {\n    font-size: 1rem;\n  }\n\n  html {\n    font-family: ',";\n    box-sizing: border-box;\n    font-size: 14px;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  img {\n    width: 100%;\n  }\n"]);return Nn=function(){return n},n}var Xn={specialFont:"DINNextW01-Bold"},In=Object(f.b)(Nn(),(function(n){return n.theme.specialFont?"DINNextW01-Bold":"Helvetica Neue"})),Sn=function(n){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(p.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement(f.a,{theme:Xn},r.a.createElement("div",{className:"App"},r.a.createElement(In,null),r.a.createElement(On,null),r.a.createElement(gn,null),r.a.createElement(Dn,null)))}}]),e}(a.Component);o.a.render(r.a.createElement(c.a,null,r.a.createElement(Sn,null)),document.getElementById("root"))},98:function(n,e,t){n.exports=t(236)}},[[98,1,2]]]);
//# sourceMappingURL=main.5da27720.chunk.js.map