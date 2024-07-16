// Async function
 async function fetchUserData () {
   
  // URL API endpoint from which you’ll fetch user data.
   const apiUrl = 'https://jsonplaceholder.typicode.com/users';

   // Data container element.
   const dataContainer = document.getElementById('api-data');
   
   // Fetch data using try-catch
 
   try {
    // Code that might throw an exception goes here
    const response = await fetch('apiUrl');
    const users = await response.json();
    // Display the users
  } 
  catch (error) {
    // Code to run if there's an exception goes here
    console.error('Failed to load user data.', error);
  }

 
}  