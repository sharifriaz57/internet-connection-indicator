
window.onload = () => {
    
    const mainContent = document.querySelector('.main-content');
    const statusBar = document.querySelector('#status_bar');
    const status = document.querySelector('.status');
    const offlineContent = document.querySelector('.offline-content');
    const iconOnline = document.querySelector('#status_bar .icon-wifi');
    const iconOffline = document.querySelector('#status_bar .icon-wifi-off');
    const close = document.querySelector('#status_bar .cancel');

    mainContent.style.display = navigator.onLine ? 'flex' : 'none';
    offlineContent.style.display = navigator.onLine ? 'none' : 'flex';

    close.addEventListener('click', () => {
        statusBar.classList.remove('offline', 'online');
    })

    function checkConnection() {
        mainContent.style.display = navigator.onLine ? 'flex' : 'none';
        status.innerHTML = navigator.onLine ? "Connected to internet" : "You are currently offline";
        iconOnline.style.display =  navigator.onLine ? 'flex' : 'none';
        iconOffline.style.display = navigator.onLine ? 'none' : 'flex';
        offlineContent.style.display = navigator.onLine ? 'none' : 'flex';
        !navigator.onLine && statusBar.classList.add('offline');

        if (navigator.onLine) {
            if (!statusBar.classList.contains('online')) {
                statusBar.classList.add('online')
            }
            setTimeout(() => {
                statusBar.classList.remove('offline', 'online')
            }, 3000)
        }
    }

    window.addEventListener('online', checkConnection);
    window.addEventListener('offline', checkConnection);

}
