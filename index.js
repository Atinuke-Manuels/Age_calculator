   
    const years =document.getElementById('years').innerHTML;
    const months = document.getElementById('months').innerHTML;
    const days = document.getElementById('days').innerHTML;

    const day_error = document.getElementById("day_error").innerHTML;
    const month_error = document.getElementById("month_error").innerHTML;
    const year_error =  document.getElementById("year_error").innerHTML;



function age() {
    const d1 = document.getElementById('dayInput').value;
    const m1 = document.getElementById('monthInput').value;
    const y1 = document.getElementById('yearInput').value;

    let date = new Date();
    let d2 = date.getDate();
    let m2 = 1 + date.getMonth();
    let y2 = date.getFullYear();

    //The maximum days in each month of the year.
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if(d1 > d2){
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }

    if(m1 > m2){
        m2 = m2 + 12;
        y2 = y2 -1;
    }


    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2 - y1;

    if(d1 < 0 || d1 > 31 ){
        document.getElementById("day_error").innerHTML= "incorrect format";
        document.getElementById("day_error").style.color='red';
        document.getElementById("dayInput").style.color='red';
        // document.getElementById("dayInput").style.borderColor='red';

        //Helps to ensure incorrect information is not submitted.
        return false;
    }

        if(m1 < 0 || m1 > 12 ){
        document.getElementById("month_error").innerHTML= "incorrect format";
        document.getElementById("month_error").style.color='red';
        document.getElementById("monthInput").style.color='red';
        // document.getElementById("monthInput").style.borderColor='red';

        //Helps to ensure incorrect information is not submitted.
        return false;
    }

        if( y1 > date.getFullYear()){
        document.getElementById("year_error").innerHTML= "incorrect format";
        document.getElementById("year_error").style.color='red';
        document.getElementById("yearInput").style.color='red';
        // document.getElementById("yearInput").style.borderColor='red';
        //Helps to ensure incorrect information is not submitted.
        return false;
    }

    document.getElementById('years').innerHTML = +y+ ' ';
    document.getElementById('months').innerHTML = +m+ ' ';
    document.getElementById('days').innerHTML = +d+ ' ';

}

function reset() {
  // Reset input fields
  document.getElementById("dayInput").value = "";
  document.getElementById("monthInput").value = "";
  document.getElementById("yearInput").value = "";
  
  // Reset output values
  document.getElementById("years").innerHTML = "--";
  document.getElementById("months").innerHTML = "--";
  document.getElementById("days").innerHTML = "--";
  
  // Clear error messages
  document.getElementById("day_error").innerHTML = "";
  document.getElementById("month_error").innerHTML = "";
  document.getElementById("year_error").innerHTML= "";
}




