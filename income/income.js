
/* Declearing the function called netSalary*/
const netSalary =()=>{
    

    let basicSal = prompt("Please enter your Basic Salary: "); 
    document.getElementById("basic").innerHTML = basicSal; 
    
/* If basic salary is not null*/
    if (basicSal!=null){
        let totalBenefits = prompt("Please enter your total Benefits`: "); 
        document.getElementById("benefits").innerHTML = totalBenefits; 
        let grossSalary = parseInt(basicSal) + parseInt(totalBenefits);
        document.getElementById("gross").innerHTML = grossSalary; 

      
        function NHIF(){
            if(grossSalary<=5999){
                let nhif=150;
                document.getElementById("nhif").innerHTML = nhif; 
                n
            }
            else if(grossSalary>=6000 && grossSalary<=7999){
                let nhif=300;
                document.getElementById("nhif").innerHTML = nhif; 
                
            }
            else if(grossSalary>=8000 && grossSalary<=11999){
                let nhif=400;
                document.getElementById("nhif").innerHTML = nhif; 
               
            }
            else if(grossSalary>=12000 && grossSalary<=14999){
                let nhif=500;
                document.getElementById("nhif").innerHTML = nhif; 
                
            }
            else if(grossSalary>=15000 && grossSalary<=19999){
                let nhif=600;
                document.getElementById("nhif").innerHTML = nhif; 
                
            }
            else if(grossSalary>=20000 && grossSalary<=24999){
                let nhif=750;
                document.getElementById("nhif").innerHTML = nhif; 
                
            }
            else if(grossSalary>=25000 && grossSalary<=29999){
                let nhif=850;
                document.getElementById("nhif").innerHTML = nhif; 
                
            }
            else if(grossSalary>=30000 && grossSalary<=34999){
                let nhif=900;
                document.getElementById("nhif").innerHTML = nhif; 
                
            }
            else if(grossSalary>=35000 && grossSalary<=39999){
                let nhif=950;
                document.getElementById("nhif").innerHTML = nhif; 
               
            }
            else if(grossSalary>=40000 && grossSalary<=44999){
                let nhif=1000;
                document.getElementById("nhif").innerHTML = nhif; 
                
            }
            else if(grossSalary>=45000 && grossSalary<=49999){
                let nhif=1100;
                document.getElementById("nhif").innerHTML = nhif; 
                
            }
            else if(grossSalary>=50000 && grossSalary<=59999){
                let nhif=1200;
                document.getElementById("nhif").innerHTML = nhif; 
                
            }
            else if(grossSalary>=60000 && grossSalary<=69999){
                let nhif=1300;
                document.getElementById("nhif").innerHTML = nhif;
                
            }
            else if(grossSalary>=70000 && grossSalary<=79999){
                let nhif=1400;
                document.getElementById("nhif").innerHTML = nhif; 
                
            }
            else if(grossSalary>=80000 && grossSalary<=89999){
                let nhif=1500;
                document.getElementById("nhif").innerHTML = nhif;
                
            }
            else if(grossSalary>=90000 && grossSalary<=99999){
                let nhif=1600;
                document.getElementById("nhif").innerHTML = nhif; 
                
            }
            else{
                let nhif=1700;
                document.getElementById("nhif").innerHTML = nhif; 
                
            }
        }
        NHIF();

        function NSSF(){
           
            let tier = prompt("Please enter the tier. It should be either 1 or 2: "); /*user prompt*/ 
            tier=parseInt(tier);
            if(tier === 1){
                let calcTier = 2*0.06*6000; /*Deductions from both employer and employee each 6% */
                document.getElementById("nssf").innerHTML = calcTier; 
                

            }
            else if (tier===2){
                let pensionablePay = prompt("Please pensionable pay:");
                if (pensionablePay>=6001 && pensionablePay<=18000){
                    let calcTier = 2*0.06 * pensionablePay;
                    document.getElementById("nssf").innerHTML = calcTier; 
                    
                }
                else{
                    document.getElementById("nssf").innerHTML = 0;
                   
                }
            }
        }
        NSSF();

        function PAYEE(){
            grossSalary=parseInt(grossSalary);
            if(grossSalary<=24000){
                let tax = 0.1 * grossSalary;
                document.getElementById("payee").innerHTML = tax; 
                  
            }
            else if(grossSalary>=24001 && grossSalary<=32333){
                let tax = 0.25 * grossSalary;
                document.getElementById("payee").innerHTML = tax; 
                    
            }
            else{
                let tax = 0.3 * grossSalary;
                document.getElementById("payee").innerHTML = tax; 
                
            }
            
        }
        PAYEE();
       
        
        let totalDeductions=parseInt(document.getElementById("nhif").innerHTML) + 
        parseInt(document.getElementById("payee").innerHTML) +
        parseInt(document.getElementById("nssf").innerHTML);

        document.getElementById("deductions").innerHTML=totalDeductions;

        let netSal= parseInt(document.getElementById("gross").innerHTML) -
        parseInt(document.getElementById("deductions").innerHTML);

        document.getElementById("net").innerHTML=netSal;

    }
    
    
/*If Basic Salary is null*/
    else{
        document.getElementById("basic").innerHTML = basic; 
        document.getElementById("benefits").innerHTML = totalBenefits; 
        let grossSalary = basicSal + totalBenefits;
        document.getElementById("gross").innerHTML = grossSalary;
    }
}
