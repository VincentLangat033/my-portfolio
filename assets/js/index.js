// function to send me an email
function sendEmail() {
    var link = "mailto:kimutailangat033@gmail.com"
             + "?Bcc=info@nerdware@gmail.com"
             + "&subject=" + encodeURIComponent("ENQUIRY ABOUT")
             + "&body=" + encodeURIComponent ("Hello, I hope you are doing well, I would like to make an enquiry about ..") // (document.getElementById('myText').value)
    ;
    
    window.location.href = link;
  }
  function myButton(){
    // console.log() ;
    alert ("Vincent Says Thank You for checking!")
  }