var swiper = new Swiper('.home', {
  
  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  },
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}


// Profile dropdown functionality
const profileDropdown = document.getElementById('profileDropdown');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownArrow = document.getElementById('dropdownArrow');

// Toggle dropdown on click
profileDropdown.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdownMenu.classList.toggle('active');
    profileDropdown.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    if (!profileDropdown.contains(e.target)) {
        dropdownMenu.classList.remove('active');
        profileDropdown.classList.remove('active');
    }
});

// Close dropdown when pressing Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        dropdownMenu.classList.remove('active');
        profileDropdown.classList.remove('active');
    }
});

// Handle dropdown item clicks
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the text of the clicked item
        const itemText = this.querySelector('span').textContent;
        
        if (itemText === 'Logout') {
            // Handle logout
            if (confirm('Are you sure you want to logout?')) {
                window.location.href = 'logout.html';
            }
        } else if (itemText === 'My Orders') {
            window.location.href = 'orders.html';
        } else if (itemText === 'My Profile') {
            window.location.href = 'profile.html';
        } else if (itemText === 'Wishlist') {
            window.location.href = 'wishlist.html';
        } else if (itemText === 'Notifications') {
            window.location.href = 'notifications.html';
        } else if (itemText === 'Settings') {
            window.location.href = 'settings.html';
        } else if (itemText === 'Help & Support') {
            window.location.href = 'help.html';
        }
        
        // Close dropdown after clicking
        dropdownMenu.classList.remove('active');
        profileDropdown.classList.remove('active');
    });
});