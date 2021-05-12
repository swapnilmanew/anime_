import React,{useState, useEffect} from 'react';

const Old = () => {
    const [anime, setAnime] = useState([]);
    const getAllAnime = async()=>
    {
        const animeList = await fetch("https://api.jikan.moe/v3/search/anime?q=naruto");
        const animes = await animeList.json();
        setAnime(animes.results);
    }
    useEffect(() => {
        getAllAnime();
    }, [])
    return (
        <>
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
                                            <hr/>
                                            <div className="d-flex justify-content-around my-2">
                                            <p><b><i className="fas fa-film"></i> Episodes : </b>{item.episodes}</p>
                                           <p><b><i className="fas fa-star-half-alt"></i> Score : </b>{item.score}</p>
                                            </div>
                                            <p className="text-start">{item.synopsis}</p>
                                            <a href={item.url} className="btn">Get More Info</a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                          </>
                      )
                  })
                  }
        </>
    )
}

export default Old
