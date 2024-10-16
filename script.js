const hamburgerIcon = document.querySelector(".hamburger--icon")
const drawer = document.querySelector(".drawer")

hamburgerIcon.addEventListener("click", (event) => {
  drawer.style.left = "0"
})

document.addEventListener("click", (event) => {
  if (!drawer.contains(event.target) && !hamburgerIcon.contains(event.target)) {
    drawer.style.left = "-150%"
  }
})
