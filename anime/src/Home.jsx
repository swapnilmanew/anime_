import React,{useState, useEffect} from 'react'
import Old from './AllAnimes';
import Fresh from './AllAnimes';

const Home = () => {
    const [anime, setAnime] = useState([]);
    const [name, setName] = useState("");
    const [show, setShow] = useState("");
    const getAnime = async()=>
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
                <div className="row my-5">
                    <div className="col-12 col-sm-7 col-md-6 m-auto">
                       <div className="d-flex justify-content-between">
                       <input type="text" className="py-3 form-control"  onChange={(e)=> setName(e.target.value)} value={name} />
                        <button className="btn px-4" onClick={getAnime}>Search</button>
                       </div>
                    </div>
                </div>
                
        </div>
            <div className="container mt-3">
                  <div className="row">
                     {
                         show === false ?  <Fresh data={name}/> : <Old/>
                     }
             
                </div>
            </div>
        </>
    )
}

export default Home
