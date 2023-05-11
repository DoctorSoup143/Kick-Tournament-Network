let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();

  // Stash the event so it can be triggered later.
  deferredPrompt = e;

  // Update UI to notify the user they can add to home screen
  showAddToHomeScreen();
});

function showAddToHomeScreen() {
  // Display a custom prompt to the user
  const prompt = document.querySelector('#add-to-home-screen-prompt');
  prompt.style.display = 'block';
}

function addToHomeScreen() {
  // Hide the custom prompt
  const prompt = document.querySelector('#add-to-home-screen-prompt');
  prompt.style.display = 'none';

  // Show the browser's Add to Home Screen prompt
  deferredPrompt.prompt();

  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the A2HS prompt');
    } else {
      console.log('User dismissed the A2HS prompt');
    }
    deferredPrompt = null;
  });
}
