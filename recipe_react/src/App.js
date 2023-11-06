import logo from './logo.svg';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CategoryList from './components/CategoryList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
    return (
        <BrowserRouter>
            <div className="text-center bg-gray-800 text-white py-4">
                <h1>Task F4.6</h1>
            </div>
            <Routes>
                <Route path="/" element={<CategoryList/>}/>
                <Route path="/category/:categoryId" element={<RecipeList/>}/>
                <Route path="/recipe/:recipeId" element={<RecipeDetails/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

