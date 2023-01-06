var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var clearButton = document.querySelector(".clr");

var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{
    
    height = heightInput.value;
    weight = weightInput.value;
    
    BMI = weight/((height/100)**2); 
    result.innerText = BMI;

    if(BMI < 16){
        statement.innerText = "Severe Thinness";    
    }else if((BMI > 16) && (BMI < 17)){
        statement.innerText = "Moderate Thinness";
    }else if((BMI > 17) && (BMI < 18.5)){
        statement.innerText = "Mild Thinness";
    }else if((BMI > 18.5) && (BMI < 25)){
        statement.innerText = "Normal";
    }else if((BMI > 25) && (BMI < 30)){
        statement.innerText = "Overweight";
    }else if((BMI > 30) && (BMI < 35)){
        statement.innerText = "Obese Class I";
    }else if((BMI > 35) && (BMI < 40)){
        statement.innerText = "Obese Class II";
    }else{
        statement.innerText = "Obese Class III";
    }
});

clearButton.addEventListener("click",()=>{
    heightInput.value ="";
    weightInput.value ="";
    result.innerText="";
    statement.innerText="";
});
