import React, { useState, useEffect } from "react";
import BookInfo from "./components/BookInfo";
import Reviews from "./components/Reviews";
import Recommendation from "./components/Recommendation";
import "./App.css"; // Assuming you have a separate CSS file for styling

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [bookData, setBookData] = useState([]);
  const [reviews, setReviews] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        if (searchTerm) {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyCT83Qm5jyhMPdfcuvPsCrWBFon6WtLpuE&maxResults=10`
          );
          const data = await response.json();
          setBookData(data.items || []);
        } else {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=*&key=AIzaSyCT83Qm5jyhMPdfcuvPsCrWBFon6WtLpuE&maxResults=10`
          );
          const data = await response.json();
          setBookData(data.items || []);
          setReviews([]);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [searchTerm]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        if (bookData.length > 0) {
          const isbnArray = bookData.map(
            (book) =>
              book.volumeInfo.industryIdentifiers.find(
                (identifier) => identifier.type === "ISBN_13"
              )?.identifier
          );
          const response = await fetch(
            `https://your-review-api.com/reviews?isbn=${isbnArray.join(",")}`
          );
          const data = await response.json();
          setReviews(data.reviews || []);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [bookData]);

  return (
    <div className="container" id="page">
      <h1 className="mt-3"> Search For Book</h1>
     


<div class="box">
    <form name="search">
        <input type="text" pattern=".*\S.*"  id="search" required class="input" name="txt" value={searchTerm}
   onChange={handleSearch} placeholder=" 🔎​" />
    </form>
    <i class="fas fa-search"></i>
</div>


      <div className="row">
        {bookData.length > 0 && (
          <>
            <h2 className="header">Discover worlds between the pages</h2>
            <div className="card-container"> {/* Wrap cards in card-container */}
              {bookData.map((book) => (
                <div key={book.id} className="col-md-3 mb-3"> {/* Use col-md-3 for each book */}
                  <div className="card">
                    <div className="card-body">
                      <BookInfo book={book} />
                      {reviews.length > 0 && <Reviews reviews={reviews} />}
                      {reviews.length === 0 && (
                        <p className="text-muted">
                          No reviews found for this book.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="col-md-4">
        <Recommendation />
      </div>
    </div>
  );
}

export default App;
