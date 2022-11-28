/* Called the index.html form*/
const form = document.querySelector("#speed");
form.addEventListener("submit", (button)=>{
/*allowed the data to be submit to the js form*/
    button.preventDefault()
    let jsform = new FormData(form);
/*provided the logic of the data being submitted */
    if(jsform.get("limit") <= 70){
        alert("OK")
    }
    else if(jsform.get("limit") > 70){
        let limit = (jsform.get("limit")-70)/5;
        console.log(limit)
        alert(`Points: ${limit}`)
    }
})