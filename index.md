
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale = 1.0">
        <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <style>

    
  .flex-container {
      display: flex;
      height: 300px;
          flex-wrap: wrap;
      align-items: center;
      justify-content: right;
      
  }

  </style>
        <title>Assignment4</title>
    </head>
    <div class="flex-container" style="background-color: rgb(235, 108, 108); height: 60px;">
        <header><h2>Komputer Store</h2></header>
    </div>

    <body>
        
            <div class="container text-center">    
                <br>
                <div class="row">
                  <div class="col-sm-4">
                    <section>
                        <h3>Bank</h3>
                        <h4>Balance: <span id = "totalBalance"></span> SEK</h4> 
                        <p id="totalBalance"></p>
                        <h4>Loan remaining: <span id = "totalLoan"></span> SEK</h4>
                        <p id="totalLoan"></p>
                        <button id="getLoan" style="background-color: crimson; width: 100px; height: 50px; font-size: 18px;"> Get Loan</button>
                    </section>
                  </div>
                  <div class="col-sm-4"> 
                    <section>
                        <h3>Work</h3>
                        <h4>Pay: <span id = "totalPay"></span> SEK</h4>
                        <p id="totalPay"></p>
                        <button id="bank" style="background-color: aquamarine; width: 90px; height: 45px; font-size: 16px;">Bank</button>
                        <button id="work" style="background-color: chartreuse; width: 90px; height: 45px; font-size: 16px;" >Work</button>
                        <button id="payLoan" style="background-color: rgb(178, 108, 243); width: 90px; height: 45px; font-size: 14px;">Payback Loan</button>
                    </section>
                  </div>
                  <div class="col-sm-4">
                    <div class="well" style="background-color: rgb(67, 202, 243);">
                        <section>
                            <h3>Laptops</h3>
                            <select name="laptops" id="laptops"></select>
                            <h5>Features: <span id="features"></span></h5>
                            <p id="features"></p>
                            
                        </section>
                     
                    </div>
                
                  </div>
                  
                </div>
                <div class="well" style="background-color: rgb(255, 150, 111);">
                    <div class="flex-container">
                        <div class="col-sm-4">
                            <img id="image" src="" onerror="imageError(this)" width=300px; height=300px;>
                        </div>
                         <div>
                            <h2><span id="laptopName"></span></h2>
                            <p id="laptopName"></p>
                            <h5><span id="description"></span></h5>
                            <p id="description"></p>
                            <h4>Price: <span id="price"></span> SEK</h4>
                            <p id="price"></p>
                            <button id="buy" style="background-color: rgb(243, 184, 34); width: 100px; height: 55px; font-size:18px ;">Buy Now</button>
                        </div>
                         
                    </div>
                </div>
                
                
              </div><br>
        
        <script src="Assignment4.js"></script>
    </body>

</html>
