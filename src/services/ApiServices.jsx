// src/services/apiService.js
import React, { useEffect, useState } from 'react'
import jsonContracts from '../assets/contracts.json';

export const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};


export const useFetchGetData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    //fetchData();
    
    const timeoutId = setTimeout(() => {
      fetchData();
    }, 100);

    // Return a cleanup function
    return () => {
      clearTimeout(timeoutId);
    };
  }, [url]); // Dependency array includes 'url', so it refetches if the URL changes

  return { data, isLoading, error };
};

export const useFetchPostData = (url, params) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'POST', // Specify the method
          headers: {
            'Content-Type': 'application/json', // Inform the server of the data type
          },
          body: JSON.stringify(params), // Convert data to JSON string
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    //fetchData();
    
    const timeoutId = setTimeout(() => {
      fetchData();
    }, 100);

    // Return a cleanup function
    return () => {
      clearTimeout(timeoutId);
    };
  }, [url]); // Dependency array includes 'url', so it refetches if the URL changes

  return { data, isLoading, error };
};




export const handleSubmit = (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  fetch('https://api.example.com/items', {
    method: 'POST', // Specify the method
    headers: {
      'Content-Type': 'application/json', // Inform the server of the data type
    },
    body: JSON.stringify({ title, body: message, userId: 1 }), // Convert data to JSON string
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      alert('Data submitted successfully! New item ID: ' + data.id);
      setTitle('');
      setMessage('');
    })
    .catch(error => {
      console.error('Error submitting data:', error);
      alert('Failed to submit data.');
    });
};

export const DATE_FORMAT_YYYYMMDD = 'YYYY-MM-DD';
export const DATE_FORMAT_YYYYMMDD_HHMM = 'YYYY-MM-DD HH:mm';

