const on_card_number = document.getElementById("card-number" );
const on_card_name = document.getElementById("card-name");
const on_card_month = document.getElementById("oc-month");
const on_card_year = document.getElementById("oc-year");
const on_card_cvc = document.getElementById("card-cvc" );

const Cardholder_in = document.getElementById("Cardholder");
const card_number_in = document.getElementById("card-number-in");
const month_in = document.getElementById("month");
const year_in = document.getElementById("year");
const cvc_in = document.getElementById("cvc");

const warning = document.getElementsByClassName("warning");

const confirm_btn = document.getElementById("confirm-btn");
const continue_btn = document.getElementById("continue-btn");

const date = new Date("2333");
const verifyYear = date.getYear() - 100;

let all_correct = 1;

Cardholder_in.addEventListener("keyup", function () {
    on_card_name.innerHTML = Cardholder_in.value;
});
card_number_in.addEventListener("keyup", function () {
    
    on_card_number.innerHTML = card_number_in.value.slice('0', '4') + ' ' + card_number_in.value.slice('4', '8') + ' ' + card_number_in.value.slice('8', '12') + ' ' + card_number_in.value.slice('12', '16');
});
month_in.addEventListener("keyup", function () {
    on_card_month.innerHTML = month_in.value.slice("0", "2");
});
year_in.addEventListener("keyup", function () {
    on_card_year.innerHTML = year_in.value.slice("0", "2");
});
cvc_in.addEventListener("keyup", function() {
    on_card_cvc.innerHTML = cvc_in.value.slice("0", "3");
});
confirm_btn.addEventListener("click", function () {
    check_input();
    complete();
});



function complete() {
    all_correct = check_input();
    if(all_correct) {
        document.getElementById("form").classList.add("hidden");
        document.getElementById("form").classList.remove("flex");
        document.getElementById("thanks").classList.remove("hidden");
        document.getElementById("thanks").classList.add("flex");
    } else {
        document.getElementById("form").classList.remove("hidden");
        document.getElementById("form").classList.add("flex");
        document.getElementById("thanks").classList.add("hidden");
        document.getElementById("thanks").classList.remove("flex");
    }
}
function check_input() {
    if((!Cardholder_in.value.match(/[a-z]/i))) {
        warning[0].innerHTML = "please enter a correct format";
        Cardholder_in.classList.remove("border-gray-400");
        Cardholder_in.classList.add("border-red-500");
        all_correct = 0;
    } else {
        warning[0].innerHTML = "";
        Cardholder_in.classList.add("border-gray-400");
        Cardholder_in.classList.remove("border-red-500");
        all_correct = 1;
    }
    if (!(card_number_in.value.match(/^\d{16}$/))) {
        warning[1].innerHTML = "please enter a correct format";
        card_number_in.classList.remove("border-gray-400");
        card_number_in.classList.add("border-red-500");
        all_correct = 0;
    } else {
        warning[1].innerHTML = "";
        card_number_in.classList.add("border-gray-400");
        card_number_in.classList.remove("border-red-500");
        all_correct = 1;
    }
    if (!(month_in.value.match(/^\d{2}$/)) || month_in.value > 12) {
        warning[2].innerHTML = "wrong format";
        month_in.classList.remove("border-gray-400");
        month_in.classList.add("border-red-500");
        all_correct = 0;
    } else {
        warning[2].innerHTML = "";
        month_in.classList.add("border-gray-400");
        month_in.classList.remove("border-red-500");
    }
    if (!(year_in.value.match(/^\d{2}$/)) && year_in.value < parseInt(verifyYear)) {
        warning[2].innerHTML = "wrong format";
        year_in.classList.remove("border-gray-400");
        year_in.classList.add("border-red-500");
        all_correct = 0;
    } else {
        warning[2].innerHTML = "";
        year_in.classList.add("border-gray-400");
        year_in.classList.remove("border-red-500");
    }
    if (!(cvc_in.value.match(/^\d{3}$/))) {
        warning[3].innerHTML = "wrong format";
        cvc_in.classList.remove("border-gray-400");
        cvc_in.classList.add("border-red-500");
        all_correct = 0;
    } else {
        warning[3].innerHTML = "";
        cvc_in.classList.add("border-gray-400");
        cvc_in.classList.remove("border-red-500");
    }   
    return all_correct;
}

continue_btn.addEventListener("click", function() {
    document.getElementById("form").classList.remove("hidden");
    document.getElementById("form").classList.add("flex");
    document.getElementById("thanks").classList.add("hidden");
    document.getElementById("thanks").classList.remove("flex");
    card_number_in.value ="";
    Cardholder_in.value = "";
    month_in.value = "";
    year_in.value = ""
    cvc_in.value = "";
    on_card_name.innerHTML ="Jane Appleseed"; 
    on_card_number.innerHTML = "0000 0000 0000 0000";
    on_card_month.innerHTML = "00";
    on_card_year.innerHTML = "00";
    on_card_cvc.innerHTML = "000";
});
