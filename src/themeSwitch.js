document.addEventListener('DOMContentLoaded', function () {
    const themeSwitchContainer = document.querySelector('.theme-switch');
    const lightThemeIcon = document.getElementById('light-theme');
    const darkThemeIcon = document.getElementById('dark-theme');
    
    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
    }

    function updateThemeIconsVisibility() {
        const isDarkTheme = document.body.classList.contains('dark-theme');
        lightThemeIcon.style.visibility = isDarkTheme ? 'hidden' : 'visible';
        darkThemeIcon.style.visibility = isDarkTheme ? 'visible' : 'hidden';
    }

    themeSwitchContainer.addEventListener('click', function () {
        toggleTheme();
        updateThemeIconsVisibility();
    });

    themeSwitchContainer.addEventListener('mouseover', function () {
        themeSwitchContainer.style.transform = 'scale(1.1)';
    });

    themeSwitchContainer.addEventListener('mouseout', function () {
        themeSwitchContainer.style.transform = 'scale(1)';
    });

    // Initial visibility setup
    updateThemeIconsVisibility();
});