//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve user-provided text and delay values
    const text = document.getElementById("text").value;
    const delay = parseInt(document.getElementById("delay").value);

    // Display a message after the specified delay
    try {
        await delayFunction(delay);
        displayMessage(text);
    } catch (error) {
        console.error("Error:", error);
    }
});

// Function to introduce a delay using async/await
function delayFunction(delay) {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    });
}

// Function to display the message on the webpage
function displayMessage(message) {
    const output = document.getElementById("output");
    output.textContent = message;
}
