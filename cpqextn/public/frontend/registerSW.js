if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/assets/cpqextn/frontend/sw.js', { scope: '/assets/cpqextn/frontend/' })})}