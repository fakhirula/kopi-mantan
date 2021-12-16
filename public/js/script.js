// Add shadow
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#navbar').addClass('drop-shadow transition ease-in-out duration-700');
    } else {
        $('#navbar').removeClass('drop-shadow transition ease-in-out duration-700');
    }
});

// Smooth Scroll
$('a.page-scroll').on('click', function (e) {
    e.preventDefault()

    $('html, body').animate(
        {
        scrollTop: $($(this).attr('href')).offset().top - 50,
        }, 1300, 'easeInOutExpo'
    )
})

// Form function
function sendFunction() {
    alert("Pesan berhasil dikirim");
}

// Dropdown
const btn = document.querySelector("button.dropdown-button");
const menu = document.querySelector(".dropdown-list");

// Add Event Listeners
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});