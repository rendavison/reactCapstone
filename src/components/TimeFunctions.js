const availableTimes = [ "17:00", "17:30", "19:30", "20:00", "21:30", "22:30", "23:00", "23:30" ];

function splitTime(time) { //returns array of strings [hour, minute] from time
    const split = time.split(":");
    return split;
}

function convertTime(time) { //changes time to 12hr from 24hr
    const split = splitTime(time);
    const hour = parseInt(split[0]);
    const minute = split[1];
    if (hour > 12) {
        const pm = hour - 12;
        const newTime = pm.toString() + ":" + minute;
        return newTime;
    } else {
        return time;
    }
}

//finds the user's time in the array of available times
// returns the index of the closest time in available times AFTER the user's time
function findTime(time, timeRange) {

    const selectedTime = timeRange.find((e) => e === time);
    const selectedIndex = timeRange.indexOf(selectedTime);

    if (selectedIndex < 0) {
        const hr = splitTime(time)[0];
        const minute = splitTime(time)[1];

        for (let i = 0; i < timeRange.length; i++) {
            let currentTime = timeRange[i];
            let currentHour = splitTime(currentTime)[0];
            let currentMinute = splitTime(currentTime)[1];
            if (currentHour > hr) {
                return i;
            } else if (currentHour === hr) {
                if (currentMinute >= minute) {
                    return i;
                }
           }
        }
    } else {
        return selectedIndex;
    }
}

const startingIndex = findTime("18:30", availableTimes); //finds index of user inputted time
const newTimes = availableTimes.slice(startingIndex);
console.log(newTimes);
return newTimes;