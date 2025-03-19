function convertTime(time) {
    const getHour = time.split(":");
    const hour = parseInt(getHour[0]);
    if (hour > 12) {
        const pm = hour - 12;
        const newHour = pm.toString() + ":00";
        console.log(newHour);
        return newHour;
    }
}

convertTime("17:00")