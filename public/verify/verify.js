(() => {
  const fragment = new URLSearchParams(window.location.hash.slice(1));
  const query = new URLSearchParams(window.location.search);
  const error = fragment.get('error') || query.get('error') ||
    fragment.get('error_code') || query.get('error_code');
  const confirmed = fragment.get('type') === 'signup' && !!fragment.get('access_token');

  // This page is a confirmation landing page. Sign-in happens in the extension.
  // Remove auth parameters from the address bar without saving any tokens.
  if (window.location.hash || window.location.search) {
    window.history.replaceState(null, '', window.location.pathname);
  }

  const title = document.getElementById('verification-title');
  const message = document.getElementById('verification-message');
  if (error) {
    title.textContent = 'We couldn’t confirm your email.';
    message.textContent = 'This confirmation link may have expired or already been used. If you already confirmed your email, try signing in to the Fire Lister extension. Otherwise, contact support for help.';
  } else if (confirmed) {
    title.textContent = 'Email confirmed.';
    message.textContent = 'Your email is confirmed. Open the Fire Lister Chrome extension and sign in to get started.';
  }
})();
