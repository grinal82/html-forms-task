// selecting the "main" checkboxes (outer level) by clicking on which
// you should have the inside .ul checkboxes to be checked
const mainCheckboxes = document.querySelectorAll(".interest__check");

// starting the itteration over an array of "checkboxes"
// and adding EventListener on click
mainCheckboxes.forEach((mainCheckbox) => {
    mainCheckbox.addEventListener("click", function () {
        // The event listener finds the subcheckboxes by using parentElement and nextElementSibling
        const subCheckboxes =
            this.parentElement.nextElementSibling.querySelectorAll(
                ".interest__check"
            );
        // loop through subcheckboxes we found above.
        // setting their checked property to the value of the main checkbox's checked property
        subCheckboxes.forEach((subCheckbox) => {
            subCheckbox.checked = this.checked;
        });
    });
});
