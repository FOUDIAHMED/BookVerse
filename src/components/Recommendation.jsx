import React, { useEffect, useState } from "react";
import BookInfo from "./BookInfo";

const Recommendation = () => {
  const [recommendedBooks, setRecommendedBooks] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=anime&key=AIzaSyCT83Qm5jyhMPdfcuvPsCrWBFon6WtLpuE&maxResults=10`
    )
      .then((response) => response.json())
      .then((data) => setRecommendedBooks(data.items || []))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2 className="head">Recommended Books</h2>
      <div className="card-container">
        {recommendedBooks.map((book) => (
          <div key={book.id} className="col-md-12 mb-3">
             <div className="card">
                    <div className="card-body">
            <BookInfo book={book} />
          </div>
        </div>
      </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
