
  const colorsContainer = document.querySelector('#divprincipal')
  for(i in colors){
      const colorview = `<tr>
            <td>${i}</td>
            <td>${colors[i]}</td>
            <td style="background: ${i}"></td>
        </tr>`
        colorsContainer.insertAdjacentHTML('beforeend', colorview)
  }