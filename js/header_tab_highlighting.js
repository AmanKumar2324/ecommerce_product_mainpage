document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('#header_tabs h4');
    const underline = document.querySelector('.underline');

    // Function to move the underline
    function moveUnderline(target) {
        underline.style.width = `${target.offsetWidth}px`; // Set the width to the hovered tab's width
        underline.style.left = `${target.offsetLeft}px`; // Set the left position to the hovered tab's left position
    }

    // Add event listeners to each tab
    tabs.forEach(tab => {
        tab.addEventListener('mouseover', () => {
            moveUnderline(tab);
        });

        // Optional: Reset underline position on mouseout
        tab.addEventListener('mouseout', () => {
            // Optionally move back to the first tab or any desired behavior
            const activeTab = document.querySelector('#header_tabs h4.active');
            if (activeTab) {
                moveUnderline(activeTab);
            }
        });
    });

    // Set the initial position of the underline
    moveUnderline(tabs[0]); // Start with the first tab
    tabs[0].classList.add('active'); // Set the first tab as active
});
