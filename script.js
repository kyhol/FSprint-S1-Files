// Function to format and return the mindfulness information
function getMindfulnessInfo(data) {
    let mindfulnessInfo = "";
    mindfulnessInfo += `<h2>Mindfulness:</h2>`;
    mindfulnessInfo += `<p><strong>Description:</strong> ${data.mental_health_information.mindfulness.description}</p>`;
    mindfulnessInfo += `<p><strong>Benefits:</strong></p>`;
    mindfulnessInfo += `<ul>`;
    data.mental_health_information.mindfulness.benefits.forEach((benefit) => { // loops through mindfulness benefits
        mindfulnessInfo += `<li>${benefit}</li>`; // called the data
    });
    mindfulnessInfo += `</ul>`;
    mindfulnessInfo += `<p><strong>Techniques:</strong></p>`;
    mindfulnessInfo += `<ul>`;
    data.mental_health_information.mindfulness.techniques.forEach((technique) => { // loops through the techniques
        mindfulnessInfo += `<li><strong>${technique.name}:</strong> ${technique.description}</li>`; // called the data
    });
    mindfulnessInfo += `</ul>`;
    return mindfulnessInfo;
}

// Function to format and return the yoga information
function getYogaInfo(data) {
    let yogaInfo = "";
    yogaInfo += `<h2>Yoga:</h2>`;
    yogaInfo += `<p><strong>Description:</strong> ${data.mental_health_information.yoga.description}</p>`;
    yogaInfo += `<p><strong>Benefits:</strong></p>`;
    yogaInfo += `<ul>`;
    data.mental_health_information.yoga.benefits.forEach((benefit) => { // loop through yoga benefits
        yogaInfo += `<li>${benefit}</li>`; // called the data
    });
    yogaInfo += `</ul>`;
    yogaInfo += `<p><strong>Styles:</strong></p>`;
    yogaInfo += `<ul>`;
    data.mental_health_information.yoga.styles.forEach((style) => { // loops through yoga styles
        yogaInfo += `<li><strong>${style.name}:</strong> ${style.description}</li>`; // called the data
    });
    yogaInfo += `</ul>`;
    return yogaInfo;
}

// Function to format and return the other topics information
function getOtherTopicsInfo(data) {
    let otherTopicsInfo = "";
    otherTopicsInfo += `<h2>Other Topics:</h2>`;
    otherTopicsInfo += `<ul>`;
    data.mental_health_information.other_topics.forEach((topic) => { // Loop through other topics
        otherTopicsInfo += `<li><strong>${topic.name}:</strong> ${topic.description}</li>`; // called the data
        otherTopicsInfo += `<p><strong>Benefits:</strong></p>`;
        otherTopicsInfo += `<ul>`;
        topic.benefits.forEach((benefit) => { // loops benefits 
            otherTopicsInfo += `<li>${benefit}</li>`; // called the data
        });
        otherTopicsInfo += `<br>`
        otherTopicsInfo += `</ul>`;
    });
    otherTopicsInfo += `</ul>`;
    return otherTopicsInfo;
}
fetch(`./data.json`) // fetching the data.json file
    .then((response) => { // If the computer gets the file successfully, this part of the code checks if everything is okay with the file. If it's not okay (ie: if the file doesn't exist), it will stop and show an error message
        if (!response.ok) { // if the response fails then using throw new Error displays the error
            throw new Error(`There is a HTTP ERROR!!!! status: ${response.status}`);
        }
        return response.json(); // Convert the response to a JSON object
    })
    .then((data) => { // If everything is okay, this part of the code reads the file's data and displays it in the console
        console.log(data); // displays data.json to console

        // Displays mental health information to console
        const rawMentalHealthData = data.mental_health_information;
        console.log(rawMentalHealthData);

        // Call the functions and make them const(thought const would be better than let or var) to get the display information
        const dspMindfulnessInfo = getMindfulnessInfo(data);
        const dspYogaInfo = getYogaInfo(data);
        const dspOtherTopicsInfo = getOtherTopicsInfo(data);

        // Display the dsp information in HTML elements to console
        console.log(dspMindfulnessInfo);
        console.log(dspYogaInfo);
        console.log(dspOtherTopicsInfo);
       
        document.getElementById(`mindfulnessInfo`).innerHTML = dspMindfulnessInfo;
        document.getElementById(`yogaInfo`).innerHTML = dspYogaInfo;
        document.getElementById(`otherTopicsInfo`).innerHTML = dspOtherTopicsInfo;
    })
    .catch((error) => {
        console.log(`Error reading the JSON file:`, error); // gets called if there is an error reading the json file. There isn't an error. I checked!
    })