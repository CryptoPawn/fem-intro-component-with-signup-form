const errorClass = "error";
const submit = "#signup-submit";

const validateEmail = (input) => {
    return input.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function checkErrors(element) {
    // current = inputs[i];
    current = element;
    error = false;

    if (current.attr('type') === "text" || current.attr('type') === "password" ) {
        if (current.val() !== "") {
            error = false;
        } else {
            error = true;
        }
    } else {
        const emailVal = current.val();

        if (validateEmail(emailVal)) {
            error = false;
        } else {
            error = true;
        }
    };
    
    if (error) {
        current.addClass(errorClass);
        current.parent().children("p").css("display","block");
    } else {
        current.parent().children("p").css("display","none");
        current.removeClass(errorClass);                
    }
}

$(document).ready(function() {
    $(submit).on("click", function() {
        inputFields = [$("#signup-firstname"), $("#signup-lastname"), $("#signup-email"), $("#signup-password")]

        for (i=0; i<4; i++) {
            checkErrors(inputFields[i]);
        }
    });

    $("input").on('keyup', function() {
        if ($(this).attr('type' !== "button")) {
            checkErrors($(this));
        }
    });
});