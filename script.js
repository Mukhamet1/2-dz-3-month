

const userIdInput = document.getElementById("userIdInput");
const btn = document.getElementById("btn");
const room = document.getElementById("room");

btn.addEventListener("click", () => {
    const userId = userIdInput.value;
    if (userId >= 1 && userId <= 10) {
        fetchUserData(userId);
    } else {
        alert("Please enter a number between 1 and 10.");
    }
});

userIdInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const userId = userIdInput.value;


        if (userId >= 1 && userId <= 10) {
            fetchUserData(userId);
        } else {
            alert("Please enter a number between 1 and 10.");
        }
    }
});

function fetchUserData(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => {

            room.innerHTML = `
                    <h3>Name: ${data.name}</h3>
                    <b>Username: ${data.username}</b>
                    <p>Phone: ${data.phone}</p>
                `;
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
            room.innerHTML = "<p>Error fetching user data. Please try again later.</p>";
        });
}
