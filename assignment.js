//https://github.com/sabbirsaad/JavaScript-problem-solving

//problem_no: 01

function kilometerToMeter(kilometer) {

    if (kilometer >= 0) {        //check input value is negative or not.
        var calculateMeter = kilometer * 1000;
        return calculateMeter;
    }

    else {
        return 'Distance cannot be negative';
    }

}
var meter = kilometerToMeter(15);
console.log(meter);

//problem_no: 02

function budgetCalculator(watch, phone, laptop) {

    if (watch >= 0 && phone >= 0 && laptop >= 0) {     //check any input value is negative or not. 
        result = (50 * watch) + (100 * phone) + (500 * laptop);
        return result;
    }
    else {
        return 'Budget cannot be negative';
    }

}
var totalBudget = budgetCalculator(2, 5, 10);
console.log(totalBudget);

//problem_no: 03

function hotelCost(days) {
    var rent = 0;
    if (days > 0) {  //check input value is negative,zero or not.
        for (var i = 1; i <= days; i++) {
            if (i >= 1 && i <= 10) {
                rent = rent + 100;
            }
            else if (i > 10 && i <= 20) {
                rent = rent + 80;
            }
            else if (i > 20) {
                rent = rent + 50;
            }
        }
        return rent;
    }

    else {
        return 'Rent cannot be negative or zero';
    }

}
var totalRent = hotelCost(30);
console.log(totalRent);