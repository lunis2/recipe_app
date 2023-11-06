import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function CategoryList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/categories/')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the categories!', error);
            });
    }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Categories</h1>
      <ul className="list-none p-0">
        {categories.map(category => (
          <li key={category.id} className="mb-2 p-2 bg-white rounded shadow hover:bg-gray-200">
            <Link to={`/category/${category.id}`} className="text-blue-800 hover:text-blue-900">{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
