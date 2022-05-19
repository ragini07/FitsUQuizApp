import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCategoryFromServer } from "../../Services/services";
import { useData } from "../../Context/quiz-context";
import { Footer } from "../Footer/Footer";

function Home() {
  const navigate = useNavigate();
  const {
    quizState,
    dispatchQuizState,
    categorySelected,
    setCategorySelected,
  } = useData();
  const { categories } = quizState;

  useEffect(() => {
    getCategoryFromServer(dispatchQuizState);
  }, []);

  return (
    <>
      <header className="promo-section">
        <div className="promo-text-container">
          <h1>Take a Quiz and enjoy with fun.</h1>
          <button className="btn">
            <a href="#explore">
              Explore Quiz <i className="fa fa-chevron-right"></i>
            </a>
          </button>
        </div>
        <img
          src="https://cf.quizizz.com/img/mkt/1-HERO-Digital_Collage.png"
          alt="promo image"
          className="res-img promo-img"
        />
      </header>
      <div className="main-container" id="explore">
        <h1 className="title-big">Category</h1>
        <div className="category-container">
          {categories.map(({ _id, categoryName, imageUrl }) => {
            return (
              <div className="card-with-overlay" key={_id}>
                <img
                  className="res-img"
                  src={imageUrl}
                  alt="category preview"
                />
                <div className="card-title text-overlap">
                  <div className="title bg-light">{categoryName}</div>
                </div>
                <button
                  className="btn"
                  onClick={() => {
                    setCategorySelected(categoryName);
                    navigate(`/category/${_id}`);
                  }}
                >
                  Explore
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export { Home };
