
let seats = document.getElementsByClassName("seat");
let bookedSeats = document.getElementsByClassName("booked");
let remainingSeats = document.getElementsByClassName("remaining");


for(let i = 0; i < seats.length; i++)
    seats[i].addEventListener("click", () => {
        
        let currentStatus = seats[i].classList[1];

        if(currentStatus === "remaining") {
            seats[i].classList.remove("remaining");
            seats[i].classList.add("booked");
        }
        else if(currentStatus === "booked") {
            seats[i].classList.remove("booked");
            seats[i].classList.add("remaining");
        }

    });


setInterval(() => {

    document.getElementsByClassName("number-booked")[0].innerHTML = bookedSeats.length;
    document.getElementsByClassName("number-remaining")[0].innerHTML = remainingSeats.length;

    if(bookedSeats.length == 0 )
        document.getElementsByClassName("number-booked")[0].style.color = "#D00";
    else
        document.getElementsByClassName("number-booked")[0].style.color = "#EEE";

    if(remainingSeats.length <= 5)
        document.getElementsByClassName("number-remaining")[0].style.color = "#D00";
    else
        document.getElementsByClassName("number-remaining")[0].style.color = "#EEE";


}, 1);






