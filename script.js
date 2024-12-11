function showHoverImage(event) {
    const hoverImage = document.getElementById("hoverImage");
    const area = event.target; // Get the area that triggered the event
    const coords = area.coords.split(','); // Get the coordinates
    const x1 = parseInt(coords[0]); // x1
    const y1 = parseInt(coords[1]); // y1
    const x2 = parseInt(coords[2]); // x2
    const y2 = parseInt(coords[3]); // y2

    // Calculate the position to center the hover image
    const hoverX = 106; // You can adjust this if needed
    const hoverY = 2451; // You can adjust this if needed

    hoverImage.style.display = "block"; // Show the new image
    hoverImage.style.left = hoverX + "px"; // Position the hover image
    hoverImage.style.top = hoverY + "px"; // Position the hover image
}

function hideHoverImage() {
    const hoverImage = document.getElementById("hoverImage");
    hoverImage.style.display = "none"; // Hide the new image
}

function redirectToLink(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const link = event.target.href; // Get the href from the area
    window.location.href = link; // Redirect to the link
}

function showHoverImage1(event) {
    const hoverImage1 = document.getElementById("hoverImage1");
    const area = event.target; // Get the area that triggered the event
    const coords = area.coords.split(','); // Get the coordinates
    const x1 = parseInt(coords[0]); // x1
    const y1 = parseInt(coords[1]); // y1
    const x2 = parseInt(coords[2]); // x2
    const y2 = parseInt(coords[3]); // y2

    // Calculate the position to center the hover image
    const hoverX = 39; // You can adjust this if needed
    const hoverY = 1155; // You can adjust this if needed

    hoverImage1.style.display = "block"; // Show the new image
    hoverImage1.style.left = hoverX + "px"; // Position the hover image
    hoverImage1.style.top = hoverY + "px"; // Position the hover image
}

function hideHoverImage1() {
    const hoverImage1 = document.getElementById("hoverImage1");
    hoverImage1.style.display = "none"; // Hide the new image
}

function redirectToLink1(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const link = event.target.href; // Get the href from the area
    window.location.href = link; // Redirect to the link
}