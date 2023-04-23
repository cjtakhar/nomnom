import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
            <label>Day[s]</label>
            <input 
                type="number"
                id="timeFrame"
                value={timeFrame}
                onChange={(e) => setTimeFrame(e.target.value)}
            />
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
        axios.post('https://api.spoonacular.com/mealplanner/generate', {
            targetCalories: targetCalories,
            exclude: exclude,
            diet: diet,
            timeFrame: timeFrame
        })
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
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                )}
            </div>
        </div>
    );
}

export default MealPlanner;

