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
    