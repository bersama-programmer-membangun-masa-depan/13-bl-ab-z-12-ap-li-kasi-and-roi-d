console.clear();

const root = document.documentElement;
const toggle = document.querySelector('.c-toggle');

toggle.addEventListener('click', function () {
  if (toggle.classList.contains('active')) {
    toggle.classList.remove('active');
    toggle.querySelector('.c-toggle__icon').innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
    toggle.querySelector('.c-toggle__wordmark').innerHTML = 'Night';
    root.style.setProperty('--rootBg', `var(--gray-100)`);
    root.style.setProperty('--rootColor', `var(--gray-700)`);
    root.style.setProperty('--componentBg', `var(--white)`);
    root.style.setProperty('--componentColor', `var(--gray-700)`);
  } else {
    toggle.classList.add('active');
    toggle.querySelector('.c-toggle__icon').innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
    toggle.querySelector('.c-toggle__wordmark').innerHTML = 'Day';
    root.style.setProperty('--rootBg', `var(--gray-800)`);
    root.style.setProperty('--rootColor', `var(--gray-200)`);
    root.style.setProperty('--componentBg', `var(--gray-900)`);
    root.style.setProperty('--componentColor', `var(--gray-100)`);
  }
});