
function navbar(){
    return `
    <h3>
            <a href="#">Home</a>
        </h3>
        <div id="options">
            <h3>
                <a href="./index.html">index</a>
            </h3>
            <h3>
                <a href="./trending.html">trendings</a>
            </h3>
            
           
            
        </div>
    `;
}

const trendingmovie = async () =>{
    try{
        let ran  = Math.floor(Math.random()*9)+1;
        console.log(ran)

        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=528a7c4ce238a5341a6de18b5e210208&language=en-US&page=${ran}`)
    // console.log('res:', res)

    const data = await res.json();
    console.log('data:', data.results)
    showmovie(data.results)
    
}
catch(err){
    console.log('err:', err)
}
}
trendingmovie()

const showmovie = async (data) =>{

const appends = document.querySelector('.movie');
appends.innerHTML=null
;

data.forEach((el) =>{

    let div = document.createElement('div');
    let im = document.createElement('img')
    im.src = "https://image.tmdb.org/t/p/w500"+el.poster_path;
    let p = document.createElement('p');
    p.innerText = el.title;

    let div1 = document.createElement('div');
    div1.setAttribute('class','seconsd')

    let p1 = document.createElement('p');
    p1.innerText = "Poularity "+el.popularity;
    let p2 = document.createElement('p');
    p2.innerText = "Rating: "+el.vote_average;
   
    div1.append(p1,p2);
    div.append(im,p,div1);
    appends.append(div);

})



}


export  {navbar,trendingmovie,showmovie};