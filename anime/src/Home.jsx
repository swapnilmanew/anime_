import React,{useState, useEffect} from 'react'
import AllAnime from "./AllAnimes";

const Home = () => {
    const [anime, setAnime] = useState([]);
    const [name, setName] = useState("");
    const [show, setShow] = useState("");
    const gettAnime = async()=>
    {
        setShow(true);
        const animeList = await fetch(`https://api.jikan.moe/v3/search/anime?q=${name}`);
        const animes = await animeList.json();
        setAnime(animes.results);
    }
    
    return (

        <>
        <div className="container-fluid bg py-5">
        <h1 className="text-center display-3 fw-bold text-white pt-5 mt-5">Search Your Fev. Anime</h1>
                <h2 className="text-center text-white">It's for You - Mahi</h2>
                <h2 className="text-center text-white">- From Swapnil</h2>
                <div className="row my-5">
                    <div className="col-12 col-sm-7 col-md-6 m-auto">
                       <div className="d-flex justify-content-between">
                       <input type="text" className="py-3 form-control"  onChange={(e)=> setName(e.target.value)} value={name} placeholder="Eg. Parastye, Death Note" />
                        <button className="btn px-4" onClick={gettAnime}>Search</button>
                       </div>
                    </div>
                </div>
                
        </div>
            <div className="container mt-3">
                  <div className="row">
                  {
                 show === true ?    anime.map((item)=>
                 {
                     return(
                         <>
                               <div className="col-12 col-sm-6 col-md-4 mx-auto my-4">
                                   <div className="card border-0 shadow">
                                       <img src={item.image_url} alt={item.image_url} className="card-img-top"/>
                                       <div className="card-body">
                                       <div className="card-title text-center mt-3">
                                           <h4>
                                           {item.title}
                                           </h4>
                                           <div className="d-flex justify-content-around my-2">
                                           <p><b><i className="fas fa-film"></i> Episodes : </b>{item.episodes}</p>
                                           <p><b><i className="fas fa-star-half-alt"></i> Score : </b>{item.score}</p>
                                           </div>
                                           <p>{item.synopsis}</p>
                                           <a href={item.url} className="btn">Get More Info</a>
                                       </div>
                                       </div>
                                   </div>
                               </div>
                         </>
                     )
                 }) : <AllAnime/>
                  } 
                </div>
            </div>
        </>
    )
}

export default Home
