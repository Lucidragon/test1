// Fetch historical event for a given date
async function fetchEvent() {
    const date = document.getElementById('dateInput').value;
    const response = await fetch(`/historical-event?date=${date}`);
    const event = await response.json();
    document.getElementById('eventDisplay').innerHTML = `
        <h3>Event on ${date}</h3>
        <p>${event.description}</p>
    `;
}

// Add a goal to the personal tracker
function addGoal() {
    const goal = document.getElementById('goalInput').value;
    if (!goal) return;

    const listItem = document.createElement('li');
    listItem.textContent = goal;
    document.getElementById('goalList').appendChild(listItem);
    document.getElementById('goalInput').value = '';
}
