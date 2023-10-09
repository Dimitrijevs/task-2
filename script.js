// update two-buttons h3
function updateH3Content() {
  const h3Elements = document.querySelectorAll('.container h3');
  const [firstH3, secondH3] = h3Elements;

  const text1 = 'VĒLIES PALĪDZĒT KĀDĀM PIEPILDĪT SAPNI?';
  const text2 = 'VĒLIES PIEPILDĪT SAVU SAPNI?';

  if (window.innerWidth < 800) {
    [firstH3.textContent, secondH3.textContent] = [text1, text2];
  } else {
    [firstH3.textContent, secondH3.textContent] = [text2, text1];
  }
}

// change photo places in photo container 
function handleResize() {
  const zandaImage = document.querySelector("#photo1");
  const sibillaImage = document.querySelector("#photo2");
  const photosContainer = document.querySelector("#photo3");
  const andaImage = document.querySelector("#photo4");

  const parentDiv = document.querySelector(".photos-wrapper");
  const isSmallScreen = window.innerWidth <= 500;

  parentDiv.innerHTML = '';
  if (isSmallScreen) {
    parentDiv.appendChild(photosContainer);
    parentDiv.appendChild(andaImage);
    parentDiv.appendChild(zandaImage);
    parentDiv.appendChild(sibillaImage);
  } else {
    parentDiv.appendChild(zandaImage);
    parentDiv.appendChild(sibillaImage);
    parentDiv.appendChild(photosContainer);
    parentDiv.appendChild(andaImage);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateH3Content();
  handleResize();

  window.addEventListener('resize', () => {
    updateH3Content();
    handleResize();
  });
});

// side-bar menu
document.addEventListener("DOMContentLoaded", function () {
  const menuButtonClosed = document.querySelector(".menu-closed");
  const menuButtonOpen = document.querySelector(".menu-open");
  const navBar = document.querySelector(".menu");
  const body = document.querySelector("body");

  menuButtonClosed.addEventListener("click", function () {
    navBar.classList.add("open");
    menuButtonClosed.style.display = "none";
    menuButtonOpen.style.display = "block";
    body.classList.add("darken-background");
    body.style.overflow = "hidden";
  });

  menuButtonOpen.addEventListener("click", function () {
    navBar.classList.remove("open");
    menuButtonOpen.style.display = "none";
    menuButtonClosed.style.display = "block";
    body.classList.remove("darken-background");
    body.style.overflow = "auto";
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 100) {
      menuButtonClosed.style.display = "";
    }
  });
});
