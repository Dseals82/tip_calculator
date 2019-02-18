function calculateTip() {
  //data from inputs
  var billAmount = document.getElementById('billAmount').value;
  var serviceQuality = document.getElementById('serviceQuality').value;
  var totalPeople = document.getElementById('totalPeople').value;
  //validations
  if(billAmount === "" || serviceQuality === 0) {
    window.alert('Oops! You must enter a value!');
    return;
  }
  if(!billAmount.match(/^\d+$/)) {
    window.alert('Oops! You can only enter a numerical value!');
    return;
  }
  if(serviceQuality == 0) {
    window.alert('Please select tip amount!');
    return;
  }
  //check to see if input is empty or less than one
  if(totalPeople === "" || totalPeople <= 1) {
    totalPeople = 1;

    document.getElementById('each').style.display="none";
  } else {
    document.getElementById('each').style.display="block";
  }

  //calculation
  var total = (billAmount * serviceQuality) / totalPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  //tip display
  document.getElementById('totalTip').style.display= "block";
  document.getElementById('tip').innerHTML = total;
}

document.getElementById('totalTip').style.display="none";
document.getElementById('each').style.display="none";
document.getElementById('calculate').onclick= function() { calculateTip();};
