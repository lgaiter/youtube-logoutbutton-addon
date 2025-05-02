function hideSignOutButton() {
    // Try to find the sign-out button using different selectors
    const signOutButton1 = document.querySelector('button[aria-label="Sign out"]');
    const signOutButton2 = document.querySelector('.yt-spec-button-shape-next--primary[title="Sign out"]');
    const signOutButton3 = document.querySelector('#account-menu button[data-item-id="sign_out"]'); // Another potential selector
  
    if (signOutButton1) {
      signOutButton1.style.display = 'none';
    }
    if (signOutButton2) {
      signOutButton2.style.display = 'none';
    }
    if (signOutButton3) {
      signOutButton3.style.display = 'none';
    }
  }
  
  // Call the function when the page loads and also on subsequent DOM changes
  hideSignOutButton();
  
  // Optionally, observe DOM changes in case the button loads dynamically
  const observer = new MutationObserver(hideSignOutButton);
  observer.observe(document.body, { childList: true, subtree: true });