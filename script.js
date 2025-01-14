function submitForm() {
  const nameInput = document.getElementById("name");
  const attendance = document.querySelector('input[name="attendance"]:checked');
  const confirmationMessage = document.getElementById("confirmationMessage");
  const popup = document.getElementById("popup");

  // Check if the name and attendance option are provided
  if (!nameInput.value || !attendance) {
    confirmationMessage.innerText = "Please complete the form before submitting.";
    confirmationMessage.style.color = "red";
    return;
  }

  // Show confirmation message
  confirmationMessage.innerText = `Thank you, ${nameInput.value}! Your attendance is recorded as: ${attendance.value}.`;
  confirmationMessage.style.color = "#4caf50";

  // Display popup
  popup.style.display = "block";

  // Hide popup after 2 seconds
  setTimeout(() => {
    popup.style.display = "none";
  }, 2000);

  // Save data to Google Sheets
  const data = {
    name: nameInput.value,
    attendance: attendance.value,
    date: new Date().toLocaleDateString() // Capture the current date
  };

  console.log(data)
  // NOTE: Testing new code. 
  fetch("https://script.google.com/macros/s/AKfycbw9jdxAhjG8fNAUkNauHeeHVGoanamYZdjQdI1xUKtO5soMncwXlVkkD5KU8XvalSjm/exec", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Test User",               // Replace with actual form input if testing
        attendance: "Present",           // Replace with actual form input if testing
        date: new Date().toLocaleDateString()
    })
})
.then(response => response.text())
.then(result => console.log("Response from server:", result))
.catch(error => console.error("Error:", error));

  // const scriptURL = 'https://script.google.com/macros/s/AKfycbw9jdxAhjG8fNAUkNauHeeHVGoanamYZdjQdI1xUKtO5soMncwXlVkkD5KU8XvalSjm/exec'
  // const form = document.form['attendanceForm']

  // form.addEventListener('submit', e => {
  //   e.preventDefault()
  //   fetch ()
  // })

  // Clear form fields
  nameInput.value = "";
  attendance.checked = false;
}

