function was_package_received_yesterday(tz_from, tz_to, start, duration) {

    // // a
    // let send_time = start - tz_from
    // // b
    // let uTC_arrival_time = send_time + duration
    // // c
    // let local_arrival_time = uTC_arrival_time + tz_to
    // // d
    // let arrival_offset = Math.floor(local_arrival_time / 24)
    // // if arrival time is 0 then its same day, if -1 then its previous day
    // return arrival_offset == -1 ? true : false;

    // Another Method
    return start + duration + (tz_to - tz_from) < 0;

}