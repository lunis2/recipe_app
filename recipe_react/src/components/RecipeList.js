import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/categories/${categoryId}/recipes/`)
            .then(response => {
                setRecipes(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching!', error);
            });
    }, [categoryId]);

    console.log(recipes);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Recipes</h1>
            <ul className="list-none p-0">
                {recipes.map(recipe => (
                    <li key={recipe.id} className="mb-2 p-2 bg-white rounded shadow hover:bg-gray-200">
                        <Link to={`/recipe/${recipe.id}`} className="text-blue-800 hover:text-blue-900">
                            {recipe.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeList;
