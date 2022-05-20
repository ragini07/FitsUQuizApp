import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getQuizByCategory, getQuizFromServer } from "../../Services/services";
import { useData } from "../../Context/quiz-context";

function CategoryQuiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const {
    quizState,
    dispatchQuizState,
    categorySelected,
    setCategorySelected,
  } = useData();
  const { quizzesByCategory } = quizState;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
    getQuizByCategory(dispatchQuizState, categorySelected);
  }, []);
  return (
    <div className="main-container" id="category">
      <h1 className="title-big text-color">{categorySelected}</h1>
      <div className="category-container">
        {loading ? (
          <div className="text-color">Loading...</div>
        ) : (
          quizzesByCategory.map(
            ({ _id, title, imageUrl, totalScore, mcqs }) => {
              return (
                <div className="card-with-overlay" key={_id}>
                  <img className="res-img" src={imageUrl} alt="" />
                  <div className="card-title text-overlap">
                    <div className="title bg-light">{title}</div>
                  </div>
                  <div className="card-desc">
                    <p>
                      <i className="fa fa-tag"></i>Take this quiz to test
                      yourself
                    </p>
                    <p>
                      <i className="fa fa-tag"></i>
                      {mcqs.length} Questions
                    </p>
                  </div>
                  <button
                    className="btn"
                    onClick={() => {
                      getQuizFromServer(_id, dispatchQuizState);
                      navigate("/rules");
                    }}
                  >
                    Play Now
                  </button>
                </div>
              );
            }
          )
        )}
      </div>
    </div>
  );
}

export { CategoryQuiz };
