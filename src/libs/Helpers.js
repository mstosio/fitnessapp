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
