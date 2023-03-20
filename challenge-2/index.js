function speedDetector(speed){
    const speedLimit = 70;
    const speedDetectorPointPer5kmAbove = 1

    if(speed < 70 + 5){
        return ok;
    } else{
        const kmOver =  speed-speedLimit;
        const demeritPoint = math.floor(kmOver/5)*demeritPointsPer5KmOver;
        if(demeritPoints >= 12){
            return "license suspended";
        } else{
            return "points"+ demeritPoints;
        }

    }
}