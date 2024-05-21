import React, { useState, useEffect } from 'react';
import getResponses from '../../services/api'; 
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import ResponseDetails from '../ResponseDetails/ResponseDetails';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [responses, setResponses] = useState([]);
  const [filteredResponses, setFilteredResponses] = useState([]); 
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [error, setError] = useState(null); 

  useEffect(() => {
    getResponses()
      .then((data) => {
        setResponses(data);
        setFilteredResponses(data); 
      })
      .catch((error) => {
        setError(error.message);
        console.error('Error fetching responses:', error);
      });
  }, []);

  const filterAndSortResponses = (term, selectedFilter) => {
    const filtered = responses
      .filter((response) => {
        const termMatch = Object.values(response)
          .join(' ')
          .toLowerCase()
          .includes(term.toLowerCase());

        const filterMatch =
          selectedFilter === 'all' ||
          response.grand_county_resident === 'Yes, I am a resident';

        return termMatch && filterMatch;
      })
      .filter((response) => response.comment !== '');

    const sorted = filtered.sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );

    setFilteredResponses(sorted); 
  };

  useEffect(() => {
    filterAndSortResponses(searchTerm, filter);
  }, [searchTerm, filter, responses]); 

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            responses={filteredResponses} 
            setSearchTerm={setSearchTerm}
            setFilter={setFilter}
            error={error} 
          />
        }
      />
      <Route
        path="/response/:id"
        element={<ResponseDetails responses={filteredResponses} />} 
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
