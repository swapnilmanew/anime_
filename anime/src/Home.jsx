import React from 'react'

const Home = () => {
    const [anime, setAnime] = useState([]);

    const getAnime = async()=>
    {
        const animeList = await fetch("https://api.jikan.moe/v3/search/anime?q=DeathNode");
        const animes = await animeList.json();
        setAnime(animes);
    }
    useEffect(() => {
        getAnime();
    }, [])
    return (
        <>
            <div className="container">
                <div className="row">
                  {
                      anime.map((item, key)=>
                  {
                      return(
                          <>
      <div className="col-12 col-sm-6 col-md-4 m-auto"}>
                        <div className="card border-0 shadow">
                            <img src={item.image_url} alt="" className="card-img-top"/>
                            <div className="card-body">

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
