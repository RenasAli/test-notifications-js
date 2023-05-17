const button = document.getElementById("button");
 // Check if the browser supports notifications
        if ('Notification' in window && 'serviceWorker' in navigator) {
            // Request permission for notifications
            Notification.requestPermission().then(function (permission) {
                if (permission === 'granted') {
                    console.log('Notification permission granted.');
                } else {
                    console.log('Notification permission denied.');
                }
            });
        }

button.addEventListener("click", ()=>{
   if ('Notification' in window && 'serviceWorker' in navigator) {
            // Request permission for notifications
            Notification.requestPermission().then(function (permission) {
                if (permission === 'granted') {
                    console.log('Notification permission granted.');
                } else {
                    console.log('Notification permission denied.');
                }
            });
        }
})