import React,{useState, useEffect} from 'react'

const Home = () => {
    const [anime, setAnime] = useState([]);

    const getAnime = async()=>
    {
        console.log("hello");
        const animeList = await fetch("https://api.jikan.moe/v3/search/anime?q=parasyte");
        const animes = await animeList.json();
        setAnime(animes.results);
        console.log(animes);
    }
    useEffect(() => {
        getAnime();
    }, [])
    return (
        <>
            <div className="container">
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
                                        <div className="card-title text-center">
                                            <h4>
                                            {item.title}
                                            </h4>
                                            <p><b>Episodes : </b>{item.episodes}</p>
                                            <p><b>Score : </b>{item.score}</p>
                                            <p><b>Episodes : </b>{item.episodes}</p>
                                            <p><b>Episodes : </b>{item.episodes}</p>
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
