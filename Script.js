//Code goes here

let cashier = 0
let c_tot = 0
let c_num = 0

let overall = 0
let o_tot = 0
let o_num = 0


//Button Function
function button(x,y,z) {
 x = document.getElementById(y)
 x.addEventListener('click', function() {
    c_tot = c_tot + z
    c_num = c_num + 1
    cashier = c_tot / c_num
    console.log(cashier)

})
}

//Overall Button Function
function oButton(a,b,c) {
 a = document.getElementById(b)
 a.addEventListener('click', function() {
    o_tot = o_tot + c
    o_num = o_num + 1
    overall = o_tot / o_num
    console.log(overall)
       
})
}

//Cashier Rating Buttons
button('cashierScoreBtn1','cashier=1',1)

button('cashierScoreBtn2','cashier=2',2)

button('cashierScoreBtn3','cashier=3',3)

button('cashierScoreBtn4','cashier=4',4)

button('cashierScoreBtn5','cashier=5',5)


//Overall Rating Buttons
oButton('overallScoreBtn1','overall=1',1)

oButton('overallScoreBtn2','overall=2',2)

oButton('overallScoreBtn3','overall=3',3)

oButton('overallScoreBtn4','overall=4',4)

oButton('overallScoreBtn5','overall=5',5)

let casheirScore = document.getElementById("cashierScore")
let overallScore = document.getElementById("overallScore")

let showHide = document.getElementById("show-hide")
showHide.addEventListener('click',function() {
    let scoresDiv = document.getElementById("show-scores")

    casheirScore.textContent = cashier
    overallScore.textContent = overall

    let btnText = showHide.textContent
    if(btnText === "Display Ratings") {
        scoresDiv.style.display = "block"
        showHide.innerHTML = "Hide Ratings"

    }
    else{
        scoresDiv.style.display = "none"
        showHide.innerHTML = "Display Ratings"
    }
})