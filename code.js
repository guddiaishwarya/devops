const form = document.getElementById("Registration form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const Name = document.getElementById("Name").value;

    const Email = document.getElementById("Email").value;

    const SelectedEvent = document.getElementById("Event").value;

    alert("Thank you " + Name + ", you have registered for the "
        + SelectedEvent + "\n confirmation sent to:" + Email);
});
