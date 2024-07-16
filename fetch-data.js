// Async function
 async function fetchUserData(){
   
  // URL API endpoint from which you’ll fetch user data.
   const apiUrl = 'https://jsonplaceholder.typicode.com/users';

   // Data container element.
   const datacontainer = document.getElementById('api-data');
   
   // Fetch data using try-catch
   try {
    // fetch data from apiUrl
    const response = await fetch('apiUrl');
    const users = await response.json();

    // Clear loading message.
    datacontainer.innerHTML = '';


   }
 }