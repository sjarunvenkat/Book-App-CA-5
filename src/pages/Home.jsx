function Home({ books, error }) {
  return (
    <div className="min-h-screen bg-red-100">
      <main className="grid grid-cols-6 gap-4 p-6">
        {error && <p>Error : {error}</p>}
        {books.length === 0 && !error && (
          <p className="text-xl text-center">Loading...</p>
        )}
        {books.map((book) => (
          <div
            className="p-4 bg-red-50 overflow-hidden flex flex-col border border-red-200 rounded"
            key={book.id}
          >
            <div className="flex-grow flex items-center justify-center">
              <img
                src={book.imageLinks.thumbnail}
                alt={book.title}
                className="max-w-full h-auto"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xs text-gray-600 font-semibold text-center mb-1">
                {book.title}
                <span class="flex items-center justify-center">
                  {
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  }
                  <span class="ml-1 text-xs">{book.averageRating}</span>{" "}
                  <span class="ml-1 line-through">Rs.999</span>{" "}
                  <span class="ml-1">Free</span>
                </span>
              </h2>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Home;
