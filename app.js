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
         if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('service-worker.js')
                .then(function(registration) {
                    console.log('Service Worker registered with scope:', registration.scope);
                })
                .catch(function(error) {
                    console.error('Service Worker registration failed:', error);
                });
        }

button.addEventListener("click", ()=>{
    sendPushNotification()
   if ('Notification' in window && Notification.permission === 'granted') {
                // Create a new notification
                var notification = new Notification('Button Pressed', {
                    body: 'You pressed the button!',
                    
                });
            }
})
self.addEventListener('push', function(event) {
    event.waitUntil(
        self.registration.showNotification('Push Notification', {
            body: event.data.text(),
            
        })
    );
});

 function sendPushNotification() {
            if ('PushManager' in window && 'serviceWorker' in navigator) {
                // Request permission for push notifications
                Notification.requestPermission()
                    .then(function(permission) {
                        if (permission === 'granted') {
                            // Get the active service worker registration
                            navigator.serviceWorker.ready
                                .then(function(registration) {
                                    // Subscribe to push notifications
                                    registration.pushManager.subscribe({
                                        userVisibleOnly: true,
                                        applicationServerKey: 'your_public_key'
                                    })
                                    .then(function(subscription) {
                                        // Send the subscription details to the server for further processing
                                        console.log('Push subscription:', JSON.stringify(subscription));
                                        // Send the push notification message to the server
                                        fetch('your_push_notification_endpoint', {
                                            method: 'POST',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({
                                                subscription: subscription,
                                                message: 'Button pressed!'
                                            })
                                        })
                                        .then(function(response) {
                                            console.log('Push notification sent successfully:', response);
                                        })
                                        .catch(function(error) {
                                            console.error('Error sending push notification:', error);
                                        });
                                    })
                                    .catch(function(error) {
                                        console.error('Error subscribing to push notifications:', error);
                                    });
                                });
                        } else {
                            console.warn('Push notification permission denied.');
                        }
                    });
            } else {
                console.warn('Push notifications are not supported.');
            }
        }