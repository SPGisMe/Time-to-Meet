function timeToMeet(v1, v2, start) {
    const goal = start / (v2 - v1);
    
    if (goal <= 0){return null}
    
    let h = Math.trunc(goal);
    let m = Math.floor(goal * 60 - h * 60);
    let s = Math.floor(goal * 3600 - h * 3600 - m * 60);
    
    return `${h}:${m}:${s}`;
}
