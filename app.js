// Welcome Message
console.log("E-Commerce Dashboard Loaded");

// Schedule Meeting
function scheduleMeeting() {
    alert("Meeting Scheduled Successfully");
}

// Approve Meeting
function approveMeeting() {
    alert("Meeting Approved");
}

// Reject Meeting
function rejectMeeting() {
    alert("Meeting Rejected");
}

// Deposit Funds
function depositFunds() {

    let amount = prompt("Enter Deposit Amount");

    if(amount){
        alert("$" + amount + " Deposited Successfully");
    }
}

// Withdraw Funds
function withdrawFunds() {

    let amount = prompt("Enter Withdraw Amount");

    if(amount){
        alert("$" + amount + " Withdrawn Successfully");
    }
}

// Transfer Payment
function transferPayment() {

    let supplier = prompt("Enter Supplier Name");
    let amount = prompt("Enter Amount");

    if(supplier && amount){
        alert("$" + amount + " Transferred To " + supplier);
    }
}

// Sign Agreement
function signAgreement() {

    let name = document.getElementById("signName");

    if(name.value === ""){
        alert("Please Enter Name");
        return;
    }

    alert("Agreement Signed Successfully");
}

// End Video Call
function endCall() {
    alert("Call Ended");
}

// Start Website Tour
function startTour() {

    alert(
        "Welcome!\n\n" +
        "1. Dashboard\n" +
        "2. Meetings\n" +
        "3. Wallet\n" +
        "4. Documents\n" +
        "5. E-Sign\n\n" +
        "Tour Completed"
    );
}

// Dummy OTP Verification
function verifyOTP() {

    let otp = prompt("Enter OTP");

    if(otp === "123456"){
        alert("OTP Verified");
    }
    else{
        alert("Invalid OTP");
    }
}

// Password Strength Checker
function checkPassword(password) {

    if(password.length < 6){
        return "Weak";
    }
    else if(password.length < 10){
        return "Medium";
    }
    else{
        return "Strong";
    }
}