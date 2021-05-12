import React,{useState, useEffect} from 'react'

const Home = () => {
    const [anime, setAnime] = useState([]);
    const [name, setName] = useState("Naruto");
    const getAnime = async()=>
    {
        console.log("hello");
        const animeList = await fetch(`https://api.jikan.moe/v3/search/anime?q=${name}`);
        const animes = await animeList.json();
        setAnime(animes.results);
        console.log(animes);
    }
    useEffect(() => {
        getAnime();
    }, [])
    return (
        
        <>
            <div className="container mt-5">
                <div className="row my-5">
                    <div className="col-12 col-sm-7 col-md-6 m-auto">
                       <div className="d-flex">
                       <input type="text" className="form-control"  onChange={(e)=> setName(e.target.value)} value={name}/>
                        <button className="btn btn-danger" onClick={getAnime}>Search</button>
                       </div>
                    </div>
                </div>
                <div className="row">
                  {
                      anime.map((item)=>
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
                                            <div className="d-flex justify-content-around my-3">
                                            <p><b>Episodes : </b>{item.episodes}</p>
                                            <p><b>Score : </b>{item.score}</p>
                                            </div>
                                            <a href={item.url} className="btn btn-danger">Get More Info</a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                          </>
                      )
                  })
                  }
                </div>
            </div>
        </>
    )
}

export default Home
