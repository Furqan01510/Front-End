
const toggleBtn = document.getElementById('toggle-btn');
const text = document.getElementById('text');

toggleBtn.addEventListener('click', function() {
  // Toggle background color
  
  document.body.classList.toggle('bg-dark');
  
  // Toggle text color
  text.classList.toggle('text-light');
});