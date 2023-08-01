<script>
function redirectToPage() {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

  if (dayOfWeek === 0) {
    // Redirect to the desired page on Sundays
    window.location.replace('/path/to/sunday-page'); // Replace '/path/to/sunday-page' with the actual URL of your Sunday page
  }
}

// Call the function when the page loads
window.onload = redirectToPage;
</script>
