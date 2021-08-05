
const totalBalanceElement = document.getElementById("totalBalance");
const totalLoanElement = document.getElementById("totalLoan");
const totalPayElement = document.getElementById("totalPay");
const workElement = document.getElementById("work");
const bankElement = document.getElementById("bank");
const laptopsElement = document.getElementById("laptops");
const priceElement = document.getElementById("price");
const buyElement = document.getElementById("buy");
const payLoanElement = document.getElementById("payLoan");
const getLoanElement = document.getElementById("getLoan");
const featuresElement = document.getElementById("features");
const laptopNameElement = document.getElementById("laptopName");
const descriptionElement = document.getElementById("description");
const imageElement = document.getElementById("image");



let totalBalance = 0.0;
totalBalanceElement.innerHTML = totalBalance.toFixed(2);
let totalLoan = 0.0;
totalLoanElement.innerHTML = totalLoan.toFixed(2);
let totalPay = 0.0;
totalPayElement.innerHTML = totalPay.toFixed(2);
let laptops = [];
let price = 0.0;
payLoanElement.style.display = 'none';


//Fetches the object (JSON) data from a selected API
fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
.then(response => response.json())
.then(data => laptops = data)
.then(laptops => addLaptops(laptops));

//Adds each created instance of a laptop to the laptops array
const addLaptops = (laptops) => {
    laptops.forEach(x => addLaptop(x))
}
//Creates an instance of a laptop from the fetched API data  
const addLaptop = (laptop) => {
    const laptopElement = document.createElement("option");
    laptopElement.value = laptop.id;
    laptopElement.appendChild(document.createTextNode(laptop.title));
    laptopsElement.appendChild(laptopElement);
    priceElement.innerText = laptops[0].price;
    featuresElement.innerText = laptops[0].specs;
    descriptionElement.innerText = laptops[0].description;
    laptopNameElement.innerText = laptops[0].title;
    imageElement.src = "https://noroff-komputer-store-api.herokuapp.com/" + laptops[0].image;

}
//Changes the object sent to the html when the user selects a different laptop from the select bar
const handleLaptopMenuChange = e => {
    const selectedLaptop = laptops[e.target.selectedIndex];
    priceElement.innerText = selectedLaptop.price;
    featuresElement.innerText = selectedLaptop.specs;
    descriptionElement.innerText = selectedLaptop.description;
    laptopNameElement.innerText = selectedLaptop.title;
    imageElement.src = "https://noroff-komputer-store-api.herokuapp.com/" + selectedLaptop.image;

        
}
//provides a placeholder image for if a URL is broken
const imageError = (image) =>{
    imageElement.src = "https://silhouette-ac.com/_next/image?url=https%3A%2F%2Fthumb.silhouette-ac.com%2Ft%2Fe8%2Fe88a8d6ff9657f312bc65d45f821f6af_w.jpeg&w=3840&q=75"
    return true;
}
//Buys a laptop if the user has enough money, and returns an appropriate alert. 
const buy = () =>{
    if(totalBalance >= priceElement.innerText){
        alert("Congratulations on buying your new laptop!");
        totalBalance = totalBalance - priceElement.innerText;
        totalBalanceElement.innerText = totalBalance;
    }else{
        alert("You don't have enough money to buy that!")
    }

}
//Adds 100 SEK to the pay account on every click
const work = () =>{
        totalPay = totalPay + 100;
        totalPayElement.innerHTML = totalPay.toFixed(2);
    
}
//Adds pay to bank. If A loan has bee taken out 10% of pay is automatically sent to pay off loan.
const bank = () =>{
    if(totalPay < 1){
        alert("Cannot bank nothing!");
    
    }else{
        if(totalLoan > 0 ){
            totalLoan = totalLoan - (0.1*totalPay);
            totalLoanElement.innerHTML = totalLoan.toFixed(2);
            totalPay = 0.9*totalPay;
            totalBalance = totalBalance  + totalPay;
            totalBalanceElement.innerHTML = totalBalance.toFixed(2);
            totalPay = 0.0;
            totalPayElement.innerHTML = 0.0;
        }
        else{
            totalBalance = totalBalance  + totalPay;
            totalPay = 0.0;
            totalPayElement.innerHTML = totalPay.toFixed(2);
            totalBalanceElement.innerHTML = totalBalance.toFixed(2);
        }
    }
           
}
//Takes out a loan if the user is allowed too (if they already have a loan or they will take 
//out more than twice their total balance they will be denied). Returns an approriate alert:
const loan = () => {
        if(totalLoan == 0.0 ){
            const loanPrompt = prompt("How much would you like to Loan?", 0.0);
            const loanAmount = parseInt(loanPrompt);
             if (loanAmount > 2*totalBalance){
                alert("You may not loan more than twice your total balance!");
            }else{
                totalLoan = totalLoan + loanAmount;
                totalBalance = totalBalance + loanAmount;
                totalLoanElement.innerHTML = totalLoan.toFixed(2);
                totalBalanceElement.innerHTML = totalBalance.toFixed(2);
                payLoanElement.style.display = 'inline';
                }
        }else{
            const noLoanPromt = alert('You already have an outstanding loan! ' + totalLoan.toFixed(2)+ 'SEK');
        
        }
 }
 //Option to pay loan instead of transffering the money to the bank balance. Only available afte the user has taken out a loan.
 const payLoan = () => {
     if(totalPay > totalLoan){
         totalPay = totalPay - totalLoan;
         totalLoan = 0.0;
         totalLoanElement.innerText = totalLoan.toFixed(2);
         totalPayElement.innerText = totalPay.toFixed(2);
         
     }else{
         totalLoan = totalLoan - totalPay;
         totalPay = 0.0;
         totalLoanElement.innerText = totalLoan.toFixed(2);
         totalPayElement.innerText = totalPay.toFixed(2);
     }

 }
 
 
laptopsElement.addEventListener("change", handleLaptopMenuChange);
bankElement.addEventListener("click",bank); 
getLoanElement.addEventListener("click",loan);
workElement.addEventListener("click",work);
buyElement.addEventListener("click", buy);
payLoanElement.addEventListener("click", payLoan);

