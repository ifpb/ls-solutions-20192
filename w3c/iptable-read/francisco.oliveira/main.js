const ips = [
    {
      address: "192.168.0.2",
      mask: "255.255.255.0"
    },
    {
      address: "192.168.0.10",
      mask: "255.255.255.0"
    },
    {
      address: "192.168.0.26",
      mask: "255.255.255.0"
    },
    {
      address: "192.168.0.30",
      mask: "255.255.255.0"
    }
  ]

const viewip = document.querySelector(".table")

for(let i = 0; i< ips.length; i++){
    let view = `<tr>
            <td>${ips[i].address}</td>
            <td>${ips[i].mask}</td>
            </tr>`
    viewip.insertAdjacentHTML('beforeend', view)
}