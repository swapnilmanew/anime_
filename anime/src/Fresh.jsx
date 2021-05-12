import React from 'react'

const Home = ({anime}) => {
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
                                            <div className="d-flex justify-content-around my-3">
                                            <p><b>Episodes : </b>{item.episodes}</p>
                                            <p><b>Score : </b>{item.score}</p>
                                            </div>
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
export default Home
