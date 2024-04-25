import React, { useDebugValue, useEffect, useState } from "react";
import Axios from "axios";
function Main({ search }) {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews(search);
  }, [search]);

   
  async function getNews() {
    var data = await Axios.get( `https://newsapi.org/v2/top-headlines?q=${search}&apiKey=7c66a5a28ac44f0fb3cc4c48a574baca`);
    setNews(data.data.articles);
  }
  const img =
    "https://c0.wallpaperflare.com/preview/105/94/569/administration-articles-bank-black-and-white.jpg";
  function setImage(e) {
    e.target.src = img;
  }

  return (
    <div className="news">
      <div className="row">
        {news.map((item) => (
          <div className=" col-lg-4 col-md-6 news-column">
            <div className="card">
              {item.urlToImage !== null ? (
                <img
                  className="card-img-top"
                  src={item.urlToImage}
                  alt=""
                  onError={setImage}
                />
              ) : (
                <img className="card-img-top" src={img} alt="" />
              )}
              <h6
                className="card-header"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <div className="card-body">
                <p style={{ fontSize: 14 }} className="news-text">
                  {item.description}
                </p>
                <button className="btn btn-success" style={{ width: "100%" }}>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href={item.url}
                  >
                    More
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
