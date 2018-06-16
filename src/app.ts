// register service worker

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(
    '/src/ngsw-worker.js',
    {scope: '/'}
    )
    .then((registration) => console.log('service worker installed' + registration))
    .catch(err => console.log('Error', err));
}

window.onload = () => {
};
