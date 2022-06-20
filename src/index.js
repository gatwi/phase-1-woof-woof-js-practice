document.addEventListener("DOMContentLoaded", init)

function toggleFilterDogs(e) {
    const filterDogsButton = document.querySelector("#good-dog-filter")
    if (filterDogsButton.innerText.includes("OFF")) {
        filterDogsButton.innerText = "Filter good dogs: ON"
        updateDogBar()
    } else {
        filterDogsButton.innerText = "Filter good dogs: OFF"
        updateDogBR()
    }
}