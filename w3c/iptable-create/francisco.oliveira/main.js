const ip = document.querySelector("#ip")
const mask = document.querySelector("#mask")
const version = document.querySelector("#version")
const but = document.querySelector(".btn")
const viewtable = document.querySelector(".table")

but.addEventListener("click", function(event){
    if(ip.value == ""){
        ip.value = "-"
    }
    if(mask.value == ""){
        mask.value = "-"
    }
    if(version.value == ""){
        version.value = "-"
    }
    let view = `<tr>
                <td>${ip.value}</td>
                <td>${mask.value}</td>
                <td>${version.value}</td>
                </tr>`
    viewtable.insertAdjacentHTML('beforeend', view)
    ip.value = ''
    mask.value = ''
    version.value = ''
    event.preventDefault()
})