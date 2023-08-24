function validateForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const pincodeInput = document.getElementById("pincode");
    const mobileInput = document.getElementById("mobile");
    
    if (!/^[a-zA-Z]+$/.test(nameInput.value)) {
        alert('Name should only contain alphabetic characters.');
        return false;
    }
    
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    if (!/^\d{10}$/.test(mobileInput.value)) {
        alert('Mobile number should be a valid 10-digit number.');
        return false;
    }
    
    if (!/^\d{6}$/.test(pincodeInput.value)) {
        alert('Pin code should be a valid 6-digit number.');
        return false;
    }
    
    const registeredEmails = ["test@example.com"];
    const registeredMobiles = ["1234567890"];
    
    if (registeredEmails.includes(emailInput.value)) {
        alert('This email is already registered.');
        return false;
    }
    
    if (registeredMobiles.includes(mobileInput.value)) {
        alert('This mobile number is already registered.');
        return false;
    }
    
    alert('Registration successful!');
    return true;
}
