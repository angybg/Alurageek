const btnLupa2 = document.querySelector(".header__lupa2");
const btnLupa = document.querySelector(".header__search-button");
const barraBuscar = document.querySelector(".header__search");

function Lupa2() {
    barraBuscar.classList.add("classSearch");
    barraBuscar.classList.remove("header__search");
    // barraBuscar.style.display="flex";
    btnLupa2.classList.add("lupaNone2");
    btnLupa.classList.add("lupaNone");

    

}

function classDelete() {
    barraBuscar.classList.remove("classSearch");
    barraBuscar.classList.add("header__search");
    btnLupa2.classList.remove("lupaNone2");
    btnLupa.classList.remove("lupaNone");
    // if(screen.width < 617 && (btnLupa2.style.display="block"))
    //     {
    //         barraBuscar.style.display="none";
    //     }
    //     else
    //     {
    //         barraBuscar.style.display="flex";
    //     }
}

function outOfTarget(event) {
    if (!barraBuscar.contains(event.target)) {
      classDelete();
    //   barraBuscar.classList.add("hideSearch");
    }
  }

  btnLupa2.addEventListener("click", Lupa2);
  window.addEventListener("scroll", classDelete);
  document.addEventListener("mousedown", outOfTarget);