// scheduleMeeting(..) should take a start time (in 24-hour format as a string "hh:mm") and a meeting duration
// (number of minutes). It should return true if the meeting falls entirely within the work day (according to the times
// specified in dayStart and dayEnd ); return false if the meeting violates the work day bounds.
// scheduleMeeting("7:00",15); // false
// scheduleMeeting("07:15",30); // false
// scheduleMeeting("7:30",30); // true
// scheduleMeeting("11:30",60); // true
// scheduleMeeting("17:00",45); // true
// scheduleMeeting("17:30",30); // false
// scheduleMeeting("18:00",15); // false

const dayStart = '7:30'
const dayEnd = '17:45'
function scheduleMeeting(startTime, duration) {
    var [startMeetingHour, startMeetingmin] = startTime.match(/^(\d{1,2}):(\d{2})$/) || [];
    duration = Number(duration);
    if (typeof startMeetingHour == String && typeof startMeetingmin == String) {
        let durationHour = Math.floor(duration / 60);
        duration = duration - (durationHour * 60);
        let endmeetingHour = durationHour + Number(startMeetingHour);
        let endmeetingmin = duration + Number(startMeetingmin);
        if (duration >= 60) {
            endmeetingHour = endmeetingHour + 1;
            endmeetingmin = endmeetingmin - 1;
        }
        let meetingStart = `${startMeetingHour.padStart(2, '0')}: ${startMeetingmin.padStart(2, '0')}`;
        let meetingEnd = `${endmeetingHour.padStart(2, '0')}:${endmeetingmin.padStart(2, '0')}`;
        return (
            meetingStart >= dayStart &&
            meetingEnd <= dayEnd
        );
    }
    return false;
}

// The range(..) function takes a number as its first argument, representing the first number in a desired range of
// numbers. The second argument is also a number representing the end of the desired range (inclusive). If the
// second argument is omitted, then another function should be returned that expects that argument.

//first we most defind start &end ^^
function range(start, end) {
    start = Number(start) || 0;
    if (end === undefiend) {
        return function getEnd(end) {
            return getRange(start, end);
        }
    } else {
        end = Number(end) || 0;
        return getRange(start, end);
    }
    function getRange(start, end) {
        let ret = [];
        for (let i = start; i <= end; i++) {
            ret.push(i);
        }
        return ret;
    }
}
