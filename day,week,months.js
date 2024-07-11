//days,week,months
function life(age) {

    var yearsRemaining = 90-age;//69 years
    var daysRemaining = 365*age;//7665 days
   var weeksRemaining = 52*age;//1092 weeks
    var monthsRemaining = 12*age;//252 months

    console.log("You have"+" "+yearsRemaining+" years,"+ " "+daysRemaining+" days," +" "+weeksRemaining+" weeks and"+ " "+ monthsRemaining+" months remaining");
}