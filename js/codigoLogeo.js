/*
document.addEventListener("DOMContentLoaded", () => {

    const formLogeo = document.getElementById("login-form");
  
    formLogeo.addEventListener("submit", (event) => {
      event.preventDefault();
      const username = document.querySelector("#username").value;
      const pass = document.querySelector("#password").value;

      // Función para obtener y parsear el JSON desde un archivo
    async function cargarUsuarios() {
        try {
            const response = await fetch('datos/usuarios.json'); // Obtiene el archivo JSON
            const data = await response.json(); // Parse el JSON y guarda en data
            return data; // Retorna el objeto JavaScript
        } catch (error) {
            console.error('Error al cargar el archivo JSON:', error);
        }
    }

    // Uso de la función
    cargarUsuarios().then(usuarios => {
        console.log(usuarios); // Muestra el objeto en la consola
        // Aquí puedes trabajar con la variable 'usuarios'
    });

    const usuarioEncontrado = usuarios.find(user => user.usuario === username && user.password === pass);

        if (usuarioEncontrado) {
            // Redireccionar si se encuentra el usuario
            window.location.href = "index.html";
        } else {
            // Mostrar alerta si las credenciales son incorrectas
            alert('Usuario o contraseña incorrectos');
        }

      fetch('datos/usuarios.json')
        .then(response => response.json())
        .then(data => {
          const usuarioEncontrado = data.find(user => user.usuario === username && user.password === pass);
  
          if (usuarioEncontrado) {
            window.location.href = "index.html";
          } else {
            alert('Usuario o contraseña incorrectos');
          }
        })
        .catch(error => {
          console.error('Error al leer el archivo JSON:', error);
        });
    });
  });
  */

  /*
document.addEventListener("DOMContentLoaded", () => {
    async function cargarUsuarios() {
        try {
            const response = await fetch('codigoJS/usuarios.json'); // Obtiene el archivo JSON
            const data = await response.json(); // Parse el JSON
            return data; // Retorna el objeto JavaScript
        } catch (error) {
            console.error('Error al cargar el archivo JSON:', error);
        }
    }

    cargarUsuarios().then(usuarios => {
        // Aquí puedes usar la variable usuarios
        console.log(usuarios);
        // Por ejemplo, implementar el inicio de sesión
        const formLogeo = document.getElementById("login-form");

        formLogeo.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.querySelector("#username").value;
            const pass = document.querySelector("#password").value;

            // Verificar si el usuario existe
            const usuarioEncontrado = usuarios.find(user => user.usuario === username && user.password === pass);

            if (usuarioEncontrado) {
                window.location.href = "index.html"; // Redirige si el usuario es encontrado
            } else {
                alert('Usuario o contraseña incorrectos');
            }
        });
    });
});
*/

document.addEventListener("DOMContentLoaded", () => {
    // Datos JSON en una variable
    // const usuarios = [
    //     {
    //         "nombre": "Nereo",
    //         "tipo": "Coordinador",
    //         "password": "1",
    //         "zona": "Muñiz"
    //     },
    //     {
    //         "nombre": "Naza",
    //         "tipo": "Coordinador",
    //         "password": "2",
    //         "zona": "San Miguel"
    //     },
    //     {
    //         "nombre": "Naim",
    //         "tipo": "Paciente",
    //         "password": "1"
    //     },
    //     {
    //         "nombre": "Sele",
    //         "tipo": "Paciente",
    //         "password": "2"
    //     }
    // ];

    const formLogeo = document.getElementById("login-form");
  
    formLogeo.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.querySelector("#username").value;
        const pass = document.querySelector("#password").value;


        const usuarioEncontrado = usuarios.find(user => user.nombre === username && user.password === pass);

        if (usuarioEncontrado) {
            if (usuarioEncontrado.tipo === "Coordinador") {
                usuarioEncontrado.iniciado = "si";
                console.log(usuarioEncontrado);
                window.location.href = "indexCor.html";
            }
            if (usuarioEncontrado.tipo === "Paciente") {
                window.location.href = "indexPac.html";
            }
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
});