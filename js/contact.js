// =========================
// EmailJS Contact Form
// =========================

emailjs.init("0hwaTowFZYiL1fPrS");

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit", function(e){

e.preventDefault();

emailjs.sendForm(

"service_89jko9n",

"template_4wp507w",

this

)

.then(function(){

alert("✅ Thank you! Your message has been sent successfully.");

contactForm.reset();

})

.catch(function(error){

alert("❌ Message could not be sent.");

console.log(error);

});

});

}
