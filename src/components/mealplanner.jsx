import React, { useState } from 'react';

const Form = ({ targetCals, setTargetCals, dietPreference, setDietPreference, dietRestrictions, setDietRestrictions, days, setDays, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <label>Target Calories</label>
            <input
                type="number" 
                id="targetCals"
                value={targetCals}
                onChange={(e) => setTargetCals(e.target.value)}
            />
            <label>Diet Preference</label>        
            <select
                id="dietPreference"
                value={dietPreference}
                onChange={(e) => setDietPreference(e.target.value)}
            >
                <option value="Balanced">Balanced</option>
                <option value="Vegetarian">Vegetarian</option> 
                <option value="Vegan">Vegan</option>
                <option value="Keto">Keto</option> 
                <option value="Paleo">Paleo</option>
                <option value="High Protein">High Protein</option> 
            </select>
            <label>Diet Restrictions</label>
            <input 
                type="text"
                id="dietRestrictions"
                value={dietRestrictions}
                onChange={(e) => setDietRestrictions(e.target.value)}
            />
            <label>Days</label>
            <input 
                type="number"
                id="days"
                value={days}
                onChange={(e) => setDays(e.target.value)}
            />
            <button className="btn" type="submit">Submit</button>
        </form>
    );
}

const MealPlanner = () => {
    const [targetCals, setTargetCals] = useState('');
    const [dietPreference, setDietPreference] = useState('Balanced');
    const [dietRestrictions, setDietRestrictions] = useState('');
    const [days, setDays] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(targetCals, dietPreference, dietRestrictions, days);
    }

    return (
        <div className="container-fluid">
            <div className="mp-container">
                <h1 className="meal-planner-title">Meal Planner</h1>
                <Form 
                    targetCals={targetCals} 
                    setTargetCals={setTargetCals} 
                    dietPreference={dietPreference} 
                    setDietPreference={setDietPreference} 
                    dietRestrictions={dietRestrictions} 
                    setDietRestrictions={setDietRestrictions} 
                    days={days} 
                    setDays={setDays} 
                    handleSubmit={handleSubmit} 
                />
            </div>
        </div>
    );
}

export default MealPlanner;
