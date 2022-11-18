// function fade() {if ($('.fade').css('opacity') == 0) $('.fade').css('opacity', 1);}

// document.querySelector(".submitBook").addEventListener('click', () => {
//     const value = +document.getElementById("value").value;
//     const num = +document.getElementById("weight").value; 
//     console.log((num))
//     fetchData()
//     paypal(value)
//     event.preventDefault();
//     });

// function fetchData(){
//     fetch(`https://media-mail-api.herokuapp.com/api/weight`)
//     .then(data => {
//         console.log(data)
//     })
// }

// async function fetchData(){
    // await fetch(`https://media-mail-api.herokuapp.com/api/weight`, {
    //     mode: 'cors',
    //     headers: {
    //     'Access-Control-Allow-Origin':'*'
    //     }})
    // .then(res => console.log(res))
    // .then(data => console.log(data))
    // };

// function calShipPay(){
//     let weight = document.getElementById("weight").value;    
//     console.log(data.weight)
//     // if (shipFee > 0){
//     //     console.log(data.shipFee)
//     //     return data.shipFee
//     //     } else if (paypalFee == 0){
//     //         return 0.00;
//     //     }
// };
    
// function paypal(data){  
//     if (data > 0){
//         const paypalFeeResult = (data * .0349) + 0.49;
//         console.log(parseFloat(paypalFeeResult).toFixed(2))
//         return parseFloat(paypalFeeResult).toFixed(2)
//         } else if (data == 0){
//             return 0.00;
//         }
//     }

// function paypal2(){
//     let paypalFee = +document.getElementById("value").value;  
//     if (paypalFee > 0){
//         return paypalFeeResult = (paypalFee * .0289) + 0.49;
//         } else if (paypalFee == 0){
//             return 0.00;
//         }
//     }

// // as July 18th - Paypal Website: https://www.paypal.com/us/webapps/mpp/merchant-fees#fixed-fees-commercialtrans
    
// function bookPrice(){
//     let bookValue = +document.getElementById("value").value;
//     return parseFloat(bookValue).toFixed(2);
// };

// function totalAfter(){
//     let bookValue = +document.getElementById("value").value;
//     let ship = calShipPay();
//     let pay = paypal();
//     let price = bookPrice();
//     let totalValue = bookValue - (pay + ship);
//     totalValue = parseFloat(totalValue).toFixed(2);
//     // document.querySelector(".priceOne").style.display = "";
//     document.querySelector(".userProfit").textContent = totalValue;
//     document.querySelector(".shippingFee1").textContent = ship;
//     document.querySelector(".paypalFee1").textContent = (Math.round(pay * 100) / 100).toFixed(2);
//     document.querySelector(".userValue").textContent = price;
//     return false;
// };

// function totalBefore(){
//     let bookValue = +document.getElementById("value").value;
//     let ship = calShipPay();
//     let pay = paypal2();
//     let price = bookPrice();
//     let totalValue = bookValue + (pay + ship);
//     totalValue = parseFloat(totalValue).toFixed(2);
//     // document.querySelector(".priceTwo").style.display = "";
//     document.querySelector(".userSell").textContent = totalValue;
//     document.querySelector(".shippingFee2").textContent = ship;
//     document.querySelector(".paypalFee2").textContent = (Math.round(pay * 100) / 100).toFixed(2);
//     document.querySelector(".userValue2").textContent = price;
//     return false;
// };


// document.querySelector(".submitBook").addEventListener('click', () => {
//     bookPrice();
//     totalAfter();
//     totalBefore();
//     fade();
//     event.preventDefault();
//     });

const update = document.querySelector('#submitWeight')

update.addEventListener('click', _ => {
    fetch('https://media-mail-api.herokuapp.com/api/weight', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            weight: '',
            shipRate: ''
          })
      })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        window.location.reload(true)
      })
  })