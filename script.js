const hamburgerIcon = document.querySelector(".hamburger--icon")
const drawer = document.querySelector(".drawer")
const overlay = document.createElement("div")

// Add overlay class
overlay.classList.add("overlay")
document.body.appendChild(overlay) // Append overlay to body

hamburgerIcon.addEventListener("click", (event) => {
  drawer.style.left = "0"
  overlay.style.display = "block" // Show overlay
})

document.addEventListener("click", (event) => {
  if (!drawer.contains(event.target) && !hamburgerIcon.contains(event.target)) {
    drawer.style.left = "-150%"
    overlay.style.display = "none" // Hide overlay when clicking outside the drawer
  }
})
