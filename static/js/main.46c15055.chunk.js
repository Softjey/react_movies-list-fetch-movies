(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var c=i(6),s=i.n(c),a=(i(12),i(2)),n=i(1),r=(i(13),i(14),i(15),i(0)),l=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(r.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(l,{movie:e},e.imdbId)}))})},o=i(7);i(17);var m=function(e){return fetch("https://www.omdbapi.com/?apikey=f23808d&t="+e).then((function(e){return e.json()}))};var j=function(e){return"https://www.imdb.com/title/"+e};var b=function(e){var t=e.setMovies,i=Object(n.useState)(""),c=Object(a.a)(i,2),s=c[0],d=c[1],b=Object(n.useState)(!1),u=Object(a.a)(b,2),v=u[0],h=u[1],O=Object(n.useState)(null),x=Object(a.a)(O,2),f=x[0],p=x[1],N=Object(n.useState)(""),g=Object(a.a)(N,2),y=g[0],w=g[1];Object(n.useEffect)((function(){if(v){var e=s.trim();m(e).then((function(e){if("False"===e.Response)w("Can't find a movie with such a title");else{var t=e.imdbID,i=e.Title,c=e.Plot,s=e.Poster,a={imdbId:t,title:i,description:c,imgUrl:"N/A"!==s?s:"https://via.placeholder.com/360x270.png?text=no%20preview",imdbUrl:j(t)};p(a)}h(!1)})).catch((function(){h(!1),w("Fix your internet")}))}}),[v]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",onSubmit:function(e){return e.preventDefault()},children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input ".concat(y&&"is-danger"),value:s,onChange:function(e){e.target.value.trim()?w(""):w("Enter the name of the movie"),d(e.target.value)}})}),y&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:y})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"searchButton",type:"submit",className:"button is-light ".concat(v&&"is-loading"),disabled:v||""===s.trim(),onClick:function(){h(!0)},children:"Find a movie"})}),f&&Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",disabled:v,onClick:function(){f&&t((function(e){var t=e.some((function(e){return e.imdbId===f.imdbId}));return d(""),p(null),t?(w("This movie is already listed"),e):(w(""),[].concat(Object(o.a)(e),[f]))}))},children:"Add to the list"})})]})]}),f&&Object(r.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),Object(r.jsx)(l,{movie:f})]})]})},u=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),i=t[0],c=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(d,{movies:i})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(b,{setMovies:c})})]})};s.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.46c15055.chunk.js.map