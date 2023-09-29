        // JavaScript to add new stream thumbnails when the "Load More" button is clicked
        const loadMoreButton = document.getElementById("load-more-button");
        const streamThumbnails = document.querySelector(".stream-thumbnails");

        loadMoreButton.addEventListener("click", function() {
            // Add new stream thumbnails dynamically (replace with your own images)
            const newThumbnail1 = `
                <div class="recommended-channel">
                    <img src="new_stream_thumbnail1.jpg" alt="New Stream Thumbnail 1" class="stream-thumbnail">
                    <p class="stream-title">New Stream 1</p>
                </div>
            `;

            const newThumbnail2 = `
                <div class="recommended-channel">
                    <img src="new_stream_thumbnail2.jpg" alt="New Stream Thumbnail 2" class="stream-thumbnail">
                    <p class="stream-title">New Stream 2</p>
                </div>
            `;

            // Append the new thumbnails to the stream-thumbnails section
            streamThumbnails.innerHTML += newThumbnail1 + newThumbnail2;
        });
        // Toggle sidebar visibility with a button
function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

// Add event listener to a button that toggles the sidebar
var toggleButton = document.querySelector('#toggle-sidebar-button');
toggleButton.addEventListener('click', toggleSidebar);
