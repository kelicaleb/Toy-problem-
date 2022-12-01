let form = document.querySelectorAll("#speed")
/* Called the index.html form*/

form.addEventListener("submit", (button)=>{
/*allowed the data to be submit to the js form*/
    button.preventDefault()
    let jsform = new FormData(form);
/*provided the logic of the data being submitted */
    if(jsform.get("limit") <= 70){
        alert("OK")
    }
    else if(jsform.get("limit") > 70){
        let dermitPoint = (jsform.get("limit")-70)/5;
        alert(`Points: ${dermitPoint}`)
        if(dermitPoint > 12){
            alert(`Points:${dermitPoint} your licence is susupended`)
        }
    }
})