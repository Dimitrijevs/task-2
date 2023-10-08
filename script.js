function updateH3Content() {
  const h3Elements = document.querySelectorAll('.container h3');
  
  if (window.innerWidth < 800) {
    h3Elements[0].textContent = 'VĒLIES PALĪDZĒT KĀDĀM PIEPILDĪT SAPNI?';
    h3Elements[1].textContent = 'VĒLIES PIEPILDĪT SAVU SAPNI?';
  } else {
    h3Elements[0].textContent = 'VĒLIES PIEPILDĪT SAVU SAPNI?';
    h3Elements[1].textContent = 'VĒLIES PALĪDZĒT KĀDĀM PIEPILDĪT SAPNI?';
  }
}

updateH3Content();

window.addEventListener('resize', updateH3Content);
