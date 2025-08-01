function handleFormSubmit(event) {
  event.preventDefault();
  const pincode = document.getElementById("pincode").value;
  const seats = document.querySelector('input[name="seatertype"]:checked')?.value;
  const date = document.getElementById("date").value;

  // Save data for next page
  localStorage.setItem("searchPincode", pincode);
  localStorage.setItem("searchseats", seats);
  localStorage.setItem("searchDate", date);

  window.location.href = "carDetail.html";
}

// Check if user is logged in
const token = localStorage.getItem("token");

if (token) {
  // Show Logout Button
  document.getElementById("logoutBtn").style.display = "inline-block";
  document.getElementById("logoutBtn").style.width = "80px";
  document.getElementById("hide").style.display = "none";
  document.getElementById("hidden").style.display = "none";
} else {
  // Hide Logout Button
  document.getElementById("logoutBtn").style.display = "none";
  document.getElementById("hide").style.display = "flex";
  document.getElementById("hidden").style.display = "flex";
}

{/* // Logout Function */ }
function logout() {
  localStorage.clear();
  alert("तुसी जा रे हो?");
  alert("तुसी ना जाओ")
  alert("logout successful")
  window.location.href = "index.html";
}


