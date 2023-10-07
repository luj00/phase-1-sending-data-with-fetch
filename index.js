function submitData(name, email) {
    // Create a data object with the name and email
    const userData = {
      name: name,
      email: email
    };
  
    // Make a POST request to /users
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
      // Retrieve the new id value and append it to the DOM
      const id = data.id;
      const idElement = document.createElement('p');
      idElement.textContent = `New ID: ${id}`;
      document.body.appendChild(idElement);
    })
    .catch(error => {
      // Handle a failed POST request using catch, append the error message to the DOM
      const errorElement = document.createElement('p');
      errorElement.textContent = error.message;
      document.body.appendChild(errorElement);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
   
    submitData('lujain', 'lujain@example.com');
  });
  