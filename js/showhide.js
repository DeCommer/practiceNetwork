const hidden = document.querySelector('.hidden');
const toggleBtn = document.querySelector('.toggleBtn');


toggleBtn.addEventListener('click', function hideCode() {
    if (hidden.style.display === "block") {
        hidden.style.display = "none";
        toggleBtn.textContent = "See the Javascript"
    } else {
        hidden.style.display = "block";
        toggleBtn.textContent = "Hide the Javascript"
    }
  });