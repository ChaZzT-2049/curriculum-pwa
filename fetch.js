let url = 'https://chazzt-2049.github.io/apijson/Datos.json';

function loadInfo() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => showData(data))
        .catch((error) => console.log(error));

    const showData = (data) => {
        console.log(data[0])

        //main

        const nombre = document.querySelector("#nombre");
        nombre.textContent = data[0].datos.nombre

        const desc = document.querySelector("#desc")
        desc.textContent = data[0].datos.desc

        const perfil = document.querySelector("#perfil")
        perfil.textContent = data[0].datos.perfil

        const educacion = document.querySelector("#educacion")
        data[0].educacion.forEach(entidad => {
            const div = document.createElement("div")
            div.innerHTML = `
                <h4>${entidad.entidad}</h4>
                <span>${entidad.fechaEstado}</span>
                <p>${entidad.carrera}</p>
            `;
            educacion.appendChild(div)
        })

        const experiencia = document.querySelector("#experiencia")
        data[0].experiencia.forEach(exp => {
            const div = document.createElement("div")
            div.innerHTML = `
                <h4>${exp.lugar}</h4>
                <b>${exp.fecha}</b>
                <h5>${exp.puesto}</h5>
                <p>${exp.desc}</p>
            `;
            experiencia.appendChild(div)
        })

        const competencias = document.querySelector("#competencias")
        data[0].competencias.forEach(competencia => {
            const li = document.createElement("li")
            li.textContent = competencia.competencia
            competencias.appendChild(li)
        })

        //aside

        const titulo = document.querySelector("#titulo")
        titulo.textContent = data[0].datos.titulo

        const tel = document.querySelector("#tel")
        tel.textContent = data[0].datos.tel

        const correo = document.querySelector("#correo")
        correo.textContent = data[0].datos.correo
        correo.href = `mailto:${data[0].datos.correo}`

        const idiomas = document.querySelector("#idiomas")
        data[0].conocimientos.idiomas.forEach(idioma => {
           const li = document.createElement("li")
           li.textContent = `${idioma.idioma}: ${idioma.nivel}`
           idiomas.appendChild(li)
        });

        const programas = document.querySelector("#programas")
        data[0].conocimientos.programas.forEach(programa => {
            const li = document.createElement("li")
            li.textContent = programa.nombre
            programas.appendChild(li)
        })

        const programacion = document.querySelector("#programacion")
        data[0].conocimientos.programacion.forEach(lenguaje => {
            const li = document.createElement("li")
            li.textContent = lenguaje.lenguaje
            programacion.appendChild(li)
        })

        const dbs = document.querySelector("#dbs")
        data[0].conocimientos.basesDatos.forEach(db => {
            const li = document.createElement("li")
            li.textContent = db.nombre
            dbs.appendChild(li)
        })
    }
}

loadInfo();