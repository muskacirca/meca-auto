import moment from 'moment'

const WORK_HOURS = 8 * 60;

export function computeFreeTime(dateOfTheDay, events) {

    var remainingWorkHours = WORK_HOURS;
    events.forEach(event => {

        let startTime = event.start.dateTime;
        let endTime = event.end.dateTime;

        let duration = computeDuration(startTime, endTime)
        remainingWorkHours = remainingWorkHours - duration;

    });
    
    if (remainingWorkHours > 5 * 60) {
        return "free"
    } else if(remainingWorkHours <= 0) {
        console.log("FULLY BOOKED");
        return "FULLY BOOKED"
    } else {
        console.log("please call");
        return "please call"
    }
}


export function computeDuration(start, end) {
    return moment(end).diff(start, "minutes");
}
