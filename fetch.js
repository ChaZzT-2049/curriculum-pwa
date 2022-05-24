let url = 'https://chazzt-2049.github.io/apijson/Datos.json';

function loadInfo() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => showData(data))
        .catch((error) => console.log(error));

    const showData = (data) => {
        console.log(data)
        let datos = "";
        let lenguajes = "";
        let databases = "";
        let idiomas = "";
        let informacion = "";
        let formacion = "";
        let trabajos = "";
        let referencias = "";
        datos += `
            <li>
                Domicilio: ${data[0].domicilio}
            </li>
            <li>
                Celurlar: ${data[0].numero}
            </li>
            <li>
                Correo: ${data[0].correo}
            </li>
            <li>
                Edad: ${data[0].edad}
            </li>
            <li>
                Fecha de Nacimiento: ${data[0].fechaNacimiento}
            </li>
            <li>
                Lugar de Nacimiento: ${data[0].lugarNacimiento}
            </li>
            <li>
                Nacionalidad: ${data[0].nacionalidad}
            </li>
        `;
        lenguajes += `
            <li>
                PHP: ${data[1].php}
            </li>
            <li>
                JavaScript: ${data[1].javascript}
            </li>
            <li>
                HTML: ${data[1].html}
            </li>
            <li>
                CSS: ${data[1].css}
            </li>
            <li>
                Python: ${data[1].python}
            </li>
        `;
        databases += `
            <li>
                MySQL: ${data[2].mysql}
            </li>
        `;
        idiomas += `
            <li>
                Español: ${data[3].español}
            </li>
            <li>
                Ingles: ${data[3].ingles}
            </li>
        `;
        informacion += `
            <li>
                Nombre: ${data[4].nombre}
            </li>
            <li>
                ¿Quién Soy? ${data[4].quienSoy}
            </li>
            <li>
                Puesto Solicitado: ${data[4].puestoSolicitado}
            </li>
        `;
        formacion += `
            <li>
                Secundaria: ${data[5].secundaria}
            </li>
            <li>
                Preparatoria: ${data[5].preparatoria}
            </li>
            <li>
                Universidad: ${data[5].universidad}
            </li>
        `;
        trabajos += `
            <li>
                Empresa: ${data[6].empresa}
            </li>
            <li>
                Puesto: ${data[6].puesto}
            </li>
            <li>
                Tiempo: ${data[6].tiempo}
            </li>
        `;
        referencias += `
            <li>
                Nombre: ${data[7].nombreRef}
            </li>
            <li>
                Puesto: ${data[7].cargo}
            </li>
            <li>
                Celular: ${data[7].celular}
            </li>
        `;
        document.getElementById('datosp').innerHTML = datos;
        document.getElementById('lp').innerHTML = lenguajes;
        document.getElementById('db').innerHTML = databases;
        document.getElementById('im').innerHTML = idiomas;
        document.getElementById('inf').innerHTML = informacion;
        document.getElementById('fa').innerHTML = formacion;
        document.getElementById('tb').innerHTML = trabajos;
        document.getElementById('ref').innerHTML = referencias;
    }
}

loadInfo();