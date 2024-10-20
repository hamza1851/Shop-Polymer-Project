const hamburgerIcon = document.querySelector(".hamburger--icon")
const drawer = document.querySelector(".drawer")
const overlay = document.createElement("div")
overlay.classList.add("overlay")

hamburgerIcon.addEventListener("click", (event) => {
  drawer.style.left = "0"

  // document.body.style.overflow = "hidden"
  document.body.scrollTo(0, 0)
})

document.addEventListener("click", (event) => {
  if (!drawer.contains(event.target) && !hamburgerIcon.contains(event.target)) {
    drawer.style.left = "-150%"

    // document.body.style.overflow = "auto"
  }
})


