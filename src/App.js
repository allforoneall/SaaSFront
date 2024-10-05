import React, { useState } from 'react';
import './styles.css';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const reviews = [
        {
            movieName: 'Movie Title 1',
            releaseDate: '2023-01-01',
            rating: '9'
        },
        {
            movieName: 'Movie Title 2',
            releaseDate: '2023-02-02',
            rating: '8'
        },
        {
            movieName: 'Movie Title 3',
            releaseDate: '2023-03-03',
            rating: '7'
        },
        {
            movieName: 'Movie Title 4',
            releaseDate: '2023-04-04',
            rating: '9'
        },
        {
            movieName: 'Movie Title 5',
            releaseDate: '2023-05-05',
            rating: '6'
        },
        {
            movieName: 'Movie Title 6',
            releaseDate: '2023-06-06',
            rating: '10'
        }
    ];

    // Function to format the release date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();

        // Determine the ordinal suffix for the day
        let suffix = 'th';
        if (day % 10 === 1 && day !== 11) {
            suffix = 'st';
        } else if (day % 10 === 2 && day !== 12) {
            suffix = 'nd';
        } else if (day % 10 === 3 && day !== 13) {
            suffix = 'rd';
        }

        return `${day}${suffix} ${month}, ${year}`;
    };

    // Filter reviews based on the search term
    const filteredReviews = reviews.filter(review =>
        review.movieName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="app">
            <header className="header">
                <div className="header-left">
                    <h2>MOVIECRITC</h2>
                </div>
                <div className="header-right">
                    <button className="header-btn">Add new movie</button>
                    <button className="header-btn">Add new Review</button>
                </div>
            </header>

            <div className="header-container">
                <h1>The best movie reviews site!</h1>
                <input
                    type="text"
                    className="search-box"
                    placeholder="Search movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
                />
            </div>

            <div className="reviews-container">
                {filteredReviews.map((review, index) => (
                    <div className="movie-review-box" key={index}>
                        <h3>{review.movieName}</h3>
                        <p>
                            <em>Released: {formatDate(review.releaseDate)}</em>
                        </p>
                        <p>
                          Rating: {review.rating}</p>
                        <div className="button-container">
                            <button className="action-btn">Edit</button>
                            <button className={`action-btn delete-btn`}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
