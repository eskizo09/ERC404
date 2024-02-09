const learnMoreBtn = document.getElementById('learnMore');

learnMoreBtn.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.05)';
});

learnMoreBtn.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

learnMoreBtn.addEventListener('click', function() {
    // Redirect to a detailed page or section about ERC404 and PulseChain
    window.location.href = 'https://gofurs.cash/'; // Add your target URL here
});
