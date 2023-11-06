import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function RecipeDetails() {
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    const {recipeId} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipes/${recipeId}/`)
            .then(response => {
                setRecipe(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the recipe details!', error);
            });
    }, [recipeId]);

    if (!recipe) return <div>Loading the recipe...</div>;


    const handleBackClick = () => {
        navigate('/');
    };


    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-6">
            <div className="w-full max-w-2xl bg-white rounded shadow p-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{recipe.title}</h1>
                <p className="text-gray-700 text-lg">{recipe.instructions}</p>
                <button
                    onClick={handleBackClick}
                    className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                >
                    Back
                </button>
            </div>
        </div>
    );
}

export default RecipeDetails;
