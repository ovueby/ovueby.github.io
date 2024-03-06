const qs = (q) => document.querySelector(q);
const qsa = (q) => document.querySelectorAll(q);

const id_value = (val) => qs("#" + val).value.trim();

const name_regex = /[A-Za-z]([a-z]| )*/;
const email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]/ // Inspired by https://regexr.com/3e48o

document.addEventListener("DOMContentLoaded", (event) => {
    const newsletter_submit = qs("#newsletter_submit");
    const contact_submit = qs("#contact_submit");

    /* THE NEWSLETTER */
    newsletter_submit.addEventListener("click", (event) => {
        event.preventDefault();
        const name = id_value("newsletter_name");
        const email = id_value("newsletter_email");

        if(!name_regex.test(name)) {
            alert("The name \"" + name + "\" is invalid.");
        }
        else if(!email_regex.test(email)) {
            alert("The email \"" + email + "\" is invalid.");
        }
        else {
            alert("Thank you, " + name.split(" ")[0] + "!\nIf email functionality worked, you would have been signed up at " + email + ".");
        }
    });

    /* THE CONTACT */
    contact_submit.addEventListener("click", (event) => {
        event.preventDefault();
        const name = id_value("contact_name");
        const subject = id_value("contact_subject");
        const message = id_value("contact_message");

        if(!name_regex.test(name)) {
            alert("The name \"" + name + "\" is invalid.");
        }
        else if(subject == "") {
            alert("Please enter a subject.");
        }
        else if(message == "") {
            alert("Please enter a message.");
        }
        else {
            alert(`Thank you, ${name.split(" ")[0]}!\nPlease send this email to us:\nSubject: ${subject}\nMessage: ${message}`);
        }

    });
})