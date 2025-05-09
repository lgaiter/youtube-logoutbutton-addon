function hideSignOutButton() {
    const signOutLink = document.querySelector('a#endpoint[href="/logout"]');
  
    if (signOutLink) {
      signOutLink.style.display = 'none';
    }
  }
  
  hideSignOutButton();
  
  const observer = new MutationObserver(hideSignOutButton);
  observer.observe(document.body, { childList: true, subtree: true });