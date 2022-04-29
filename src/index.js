// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
//     return element;
//   }
  
//   document.body.appendChild(component());


import {navbar,trendingmovie,showmovie} from "../component/navbar";
import '../styles/style.css';


document.getElementById("nav").innerHTML = navbar();

let diff = Math.floor(Math.random() * 9) + 1;

const url = `https://api.themoviedb.org/3/movie/popular?api_key=9db190054bf203144a8b44b46857dfa8&language=en-US&page=${diff}`;

let x = trendingmovie(url)

import "../styles/style.css";