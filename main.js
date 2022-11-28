/* Created an arrow function called Enter*/
const Enter = (grade)=>{
/*Inside the arrow Function a for loop was created for the range*/
    for(grade; grade<=100;){
/*if statements were used for different ranges*/
        if(grade >= 79){
            return "A"
        }
        else if(grade >= 60){
            return "B"
        }
        else if(grade >= 49){
            return "c"
        }
        else if(grade >= 40){
            return "D"
        }
        else if(grade < 40){
            return "E"
        }
    }
}
/* called the function*/
console.log(Enter(41))


/*Question 2*/
/* creates a function callled question */
const question = (speed)=>{
    if(speed <= 70){
        return "OK"
    }
/*created a logic behind for every point in above 75*/
    else if (speed > 70){
        return "Points:"+((speed-70)/5);
    }
}
/* called the function*/
console.log(question(71))
const calclate = (basicSalary, benefits )=>{
    let nhif;
    let nssf;
    benefits = nhif + nssf
    if(basicSalary <= 24000 && benefits < 500){
        benefits =
        ((basicSalary*10)/100) - benefits  
    }
}