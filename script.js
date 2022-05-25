if('serviceWorker' in navigator){
    navigator.serviceWorker.register('https://chazzt-2049.github.io/curriculum-pwa/serviceworker.js')
    .then(reg => console.log('Registro sw exitoso', reg))
    .catch(error => console.warn(error))
}
