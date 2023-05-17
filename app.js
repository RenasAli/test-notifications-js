const button = document.getElementById("button");

button.addEventListener("click", ()=>{
    Notification.requestPermission().then(perm => {
        if(perm === "granted"){
            const notification = new Notification("Test Notification", {
                body: " hej",
                data: {hello: "world"}
                
            })
        }
    }

    )
})