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
   if ('Notification' in window && Notification.permission === 'granted') {
                // Create a new notification
                var notification = new Notification('Button Pressed', {
                    body: 'You pressed the button!',
                    icon: 'path_to_notification_icon.png' // Replace with your own icon path
                });
            }
})
self.addEventListener('push', function(event) {
    event.waitUntil(
        self.registration.showNotification('Push Notification', {
            body: event.data.text(),
            icon: 'path_to_notification_icon.png' // Replace with your own icon path
        })
    );
});
