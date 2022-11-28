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