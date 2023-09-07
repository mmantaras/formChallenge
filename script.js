document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
    const url = 'https://jsonplaceholder.typicode.com/users';
    const data = {
      nombre: document.getElementById('nombre').value,
      apellido: document.getElementById('apellido').value,
      fechaNacimiento: document.getElementById('fechaNacimiento').value
    };
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); 
      alert('Formulario enviado con éxito');
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  