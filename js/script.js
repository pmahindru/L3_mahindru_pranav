// JS learn from the Lab 3 recordings and try to make it better on the web page

// submit form
var submitButton = document.getElementById("submit");

submitButton.addEventListener("click", onSubmitForm);

function onSubmitForm(e){
    // prevent default is used to stop refreshing the page after we press the submit button in the form.
    e.preventDefault();

    var firstname = document.getElementById("first_name").value;
    var lastname = document.getElementById("last_name").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var country = document.querySelector("#select_country").value;

    if(firstname === "" || lastname === "" || gender === "" || country === ""){
        alert('Please fill the form properly to submit your response\nFill the empty fields in the form :) ');
    }
    else{
        // change the heading because when you click submit it will show this 
        document.getElementById("changeheading").innerHTML = "Your Application is Submitted";

        // response which is submitted by the user, showing on the web page
        document.getElementById("fname").innerHTML = firstname;
        document.getElementById("lname").innerHTML = lastname;
        document.getElementById("gender_select").innerHTML = gender;
        document.getElementById("country").innerHTML = country;

        // this is for hide the form and showing you response that you submitted
        document.getElementById("forminputs").style.display = "none";
        document.getElementById("showanswers").style.display = "block";

        // answers in console 
        console.log("----------------------------------------------------------------------------------");
        console.log("first name --> " + firstname);
        console.log("last name -->  " + lastname);
        console.log("Gender --> " + gender);
        console.log("Country --> " + country);
        console.log("----------------------------------------------------------------------------------");
    }
}

// back to form
var backButton = document.getElementById("back");

backButton.addEventListener("click", backToFormPage);

function backToFormPage(e){
    // prevent default is used to stop refreshing the page after we press the submit button in the form.
    e.preventDefault();

    // change the heading because when you click back to form button it will show this 
    document.getElementById("changeheading").innerHTML = "Form";

    // this is for hide the response and showing you form that you want to submit
    document.getElementById("forminputs").style.display = "block";
    document.getElementById("showanswers").style.display = "none";

}