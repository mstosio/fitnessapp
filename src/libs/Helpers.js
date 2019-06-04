export const calculateBMI = (weight, height) => {
    const BMI = weight / Math.pow(height/100, 2);
    return parseInt(BMI.toFixed(2));
};


export const calculateBmiRange = (BMI) => {
    switch(true){
        case(BMI === ""):
            return "";
        case(BMI < 15):
            return "Very severely underweight";
        case(BMI > 15 && BMI < 16):
            return "Severely underweight";
        case(BMI > 16 && BMI < 18.5):
            return "Underweight";
        case(BMI > 18.5 && BMI < 25):
            return "Normal (Healthy weight)";
        case(BMI > 25 && BMI < 30):
            return "Overweight";
        case(BMI > 30 && BMI < 35):
            return "Obese Class I";
        case(BMI > 35 && BMI < 40):
            return "Obese Class II";
        case(BMI > 40):
            return "Super Obese!!";
    }
};

const activityRateMan =  {
    verylowactivity: 25,
    lowactivity: 29,
    avarageactivity: 33,
    highactivity: 36

};

const acivityRateWoman = {
    verylowactivity: 23,
    lowactivity: 27,
    avarageactivity: 31,
    highactivity: 34
};


export const calculateDailyCaloricDemand = (gender, weight, height, activity) => {
    const activityRate = (gender === "male") ? activityRateMan : acivityRateWoman;
    const BMR = activityRate[activity];
    
    return weight * BMR;   
};


const lowCarbDietInfo = {
    protein: 2,
    fatPercent: 0.40
};

const highCarbDietInfo = {
    protein: 2,
    fatPercent: 0.25
};

const balacancedDietInfo = {
    protein: 2,
    fatPercent: 0.3
};

export const calculateDailyMacro = (BMR, weight, dietType) => {
    const typeOfDiet = dietType === "lowcarb" ? lowCarbDietInfo : (dietType === "highcarb" ? highCarbDietInfo : balacancedDietInfo);

    const proteins = typeOfDiet.protein * weight;
    const fatsKcal = typeOfDiet.fatPercent * BMR;

    const proteinsKcal = proteins*4;
    const fats = fatsKcal/9;

    const carbsKcal = BMR - (proteinsKcal + fatsKcal);
    const carbs = carbsKcal/4;

    return {
        proteins: Math.round(proteins),
        carbs: Math.round(carbs),
        fats: Math.round(fats)
    };  

};

export const calculateNewMacros = (macros, dietType) => {

    if(dietType === "loseWeight"){
       macros.carbs = macros.carbs - 50;
       macros.fats = macros.fats - 11;
    } else {
        macros.carbs = macros.carbs + 50;
        macros.fats = macros.fats + 11;
    }
    
    return macros;
};

export const calculateNewBMR = (BMR, dietType) => {
    if(dietType === "loseWeight"){
        return BMR - 300;
    }

    return BMR + 300;
};