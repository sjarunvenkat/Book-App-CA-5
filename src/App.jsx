import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home";
import Register from "./pages/Register";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://reactnd-books-api.udacity.com/books",
          { headers: { Authorization: "Arun" } }
        );
        setBooks(response.data.books);
        console.log(response.data.books);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <header className="border rounded-lg border-red-300 py-4 px-6">
        <nav className="flex items-center justify-between">
          <div className="shrink-0">
            <Link to="/">
              <img
                className="h-10 w-25"
                src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png"
                alt="kalvium logo"
              />
            </Link>
          </div>
          <div className="h-10 w-60">
            <input
              type="text"
              placeholder="Search for Book"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Link
            to="/register"
            className="font-bold py-2 px-4 rounded border-2 border-red hover:bg-red-400"
          >
            Register
          </Link>
        </nav>
      </header>

      <footer className="fixed bottom-0 left-0 w-full">
        <p className="py-4 bg-gray-300 text-center text-gray-500 text-sm">
          Made with ❤️ by Arun
        </p>
      </footer>
      <Routes>
        <Route
          path="/"
          element={<Home books={filteredBooks} error={error} />}
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
