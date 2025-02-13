const availableTimes = ["12:00", "12:15", "12:30", "12:45", "1:00", "1:15", "1:30", "1:45", "2:00", "2:15", "2:30", "2:45", "3:00", "3:15", "3:30", "3:45", "4:00", "4:15", "4:30", "4:45", "5:00", "5:15", "5:30", "5:45", "6:00", "6:15", "6:30", "6:45", "7:00", "7:15", "7:30", "7:45", "8:00"];

function populateTimes(userTime) {

    //finds the user's time in the array of available times
    //ADD ERROR IF TIME NOT IN ARRAY
    function findTime(time, timeRange) {
        const selectedTime = timeRange.find((e) => e === time);
        return timeRange.indexOf(selectedTime);
    }

    //generates a list of the next 12 times
    //ADD ERROR IF PAST 8:00PM
    const startingIndex = findTime(userTime, availableTimes); //finds index of user inputted time
    const displayedTimes = [availableTimes[startingIndex]]; //starts at that index in list of available times
    let currentIndex = startingIndex; //resets current index to keep moving along the array

    for (let i = 0; (i < 11); i++) {
        currentIndex += 1;
        displayedTimes.push(availableTimes[currentIndex]);
    }

    console.log(displayedTimes); //returns array of times to display

}

populateTimes("7:30");