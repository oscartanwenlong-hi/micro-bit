document.querySelector('.start-button').addEventListener('click', () => {
    window.location.href = 'learning.html'; // 跳转到学习平台页面
});
]

// Function to toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');

    // Check if the sidebar is currently open
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-300px'; // Hide sidebar
    } else {
        sidebar.style.left = '0px'; // Show sidebar
    }
}
