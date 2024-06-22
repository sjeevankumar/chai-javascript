const insert = document.getElementById('insert')

window.addEventListener('keydown',e=>{
    insert.innerHTML = `<h1>${e.code}<h1>`
})