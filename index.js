
document.getElementById("main-data").style.visibility="hidden";

function formValidate() {
  var height=document.getElementById("height").value;
  var weight=document.getElementById("weight").value;
  var age=document.getElementById("age").value;

  if(age==="" || (age<2 || age>120)) {
    alert("Enter a valid Age");
  }
  else if(height==="" || height>3) {
    alert("Enter a valid Height");
  }
  else if(weight==="" || (weight>200)) {
    alert("Enter a valid Weight");
  }

  else {
    caluclateBMI();
  }
}



function caluclateBMI() {



  var height=document.getElementById("height").value;
  var weight=document.getElementById("weight").value;

  var bmi = (weight)/(height*height);

  bmi=bmi.toFixed(2);

  document.getElementById("title").style.padding="18% 5% 0 5%";

  document.getElementById("demo").innerHTML="Your BMI is : "+ bmi;

  var answer;

  if(bmi<18.5) {
    answer="UNDERWEIGHT";
  }
  else if(bmi>=18.5 && bmi<25) {
    answer="NORMALWEIGHT";
  }
  else if(bmi>=25 && bmi<30) {
    answer="OVERWEIGHT";
  }
  else {
    answer="Obesity"
  }

  document.getElementById("main-data").style.visibility="visible";

  document.getElementById("output").innerHTML="You are Under "+answer+" category";

}
