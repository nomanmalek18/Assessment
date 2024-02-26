 // Function to check the strength of the password
 function checkPasswordStrength() {
    // Get the password value from the input field
    var password = $("#password").val();

    // Regular expressions for checking password strength
    var regexWeak = /^(?=.*[a-z])/;
    var regexMedium = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
    var regexStrong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;
    
    // Check the strength of the password and update the indicator
    if (regexStrong.test(password)) {
        $("#password-strength-indicator").text('strong');
    } else if (regexMedium.test(password)) {
        $("#password-strength-indicator").removeClass().addClass("medium");
        console.log("Medium Password");
        $("#password-strength-indicator").text('mmedd');
    } else if (regexWeak.test(password)) {
        $("#password-strength-indicator").removeClass().addClass("weak");
        console.log("Weak Password");
        $("#password-strength-indicator").text('weak');
    } else {
        $("#password-strength-indicator").removeClass();
        $("#password-strength-indicator").text('');
        console.log("Password does not meet any strength criteria");
    }
}