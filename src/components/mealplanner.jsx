import React, { useState } from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const Form = ({ targetCalories, setTargetCalories, exclude, setExclude, diet, setDiet, timeFrame, setTimeFrame, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <label>Target Calories</label>
            <input
                type="number" 
                id="targetCalories"
                value={targetCalories}
                onChange={(e) => setTargetCalories(e.target.value)}
            />
            <label>Diet Preference</label>        
            <select
                id="dietPreference"
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
            >
                <option value="Balanced">Balanced</option>
                <option value="Whole">Whole</option>
                <option value="Vegetarian">Vegetarian</option> 
                <option value="Vegan">Vegan</option>
                <option value="Ketogenic">Keto</option> 
                <option value="Paleo">Paleo</option>
                <option value="Primal">High Protein</option> 
            </select>
            <label>Diet Restrictions</label>
            <input 
                type="text"
                id="diet"
                value={exclude}
                onChange={(e) => setExclude(e.target.value)}
            />
            <label>Time Frame</label>
            <select 
                type="text"
                id="timeFrame"
                value={timeFrame}
                onChange={(e) => setTimeFrame(e.target.value)}
            >
                <option value="day">Day</option>
            </select>
            <button className="btn" type="submit">Submit</button>
        </form>
    );
}

const MealPlanner = () => {
    const [targetCalories, setTargetCalories] = useState('');
    const [exclude, setExclude] = useState('');
    const [diet, setDiet] = useState('Balanced');
    const [timeFrame, setTimeFrame] = useState('');
    const [data, setData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://api.spoonacular.com/mealplanner/generate`, {
            params: {
            targetCalories: targetCalories,
            exclude: exclude,
            diet: diet,
            timeFrame: timeFrame,
            apiKey: apiKey
  }
},[targetCalories, exclude, diet, timeFrame, apiKey])
  .then(res => {
    setData(res.data);
  })
  .catch(err => {
    console.error(err)
  })

    }

    return (
        <div className="container-fluid">
            <div className="mp-container">
                <h1 className="meal-planner-title">Meal Planner</h1>
                <Form 
                    targetCalories={targetCalories} 
                    setTargetCalories={setTargetCalories} 
                    exclude={exclude} 
                    setExclude={setExclude} 
                    diet={diet} 
                    setDiet={setDiet} 
                    timeFrame={timeFrame} 
                    setTimeFrame={setTimeFrame} 
                    handleSubmit={handleSubmit} 
                />
                {data && (
  <div>
    <h2>Meals:</h2>
    <ul>
      {data.meals.map((meal) => (
        <li key={meal.id}>
          {meal.title} - {meal.servings} servings - ready in {meal.readyInMinutes} minutes
        </li>
      ))}
    </ul>
    <h2>Nutrients:</h2>
    <p>Calories: {data.nutrients.calories}</p>
    <p>Protein: {data.nutrients.protein}</p>
    <p>Fat: {data.nutrients.fat}</p>
    <p>Carbohydrates: {data.nutrients.carbohydrates}</p>
  </div>
)}
            </div>
        </div>
    );
}

export default MealPlanner;

