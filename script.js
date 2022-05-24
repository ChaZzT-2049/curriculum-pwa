if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/serviceworker.js')
    .then(reg => console.log('Registro sw exitoso', reg))
    .catch(error => console.warn(error))
}