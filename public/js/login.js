const loginHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();
  
    if (email && password) {
        console.log(email + password);
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // // If successful, redirect the browser to the profile page
         document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  document.querySelector('#login-form').addEventListener('submit', loginHandler);