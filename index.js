function distanceFromHqInBlocks (n){
    return Math.abs(42-n);
}
function distanceFromHqInFeet (n){
    return (distanceFromHqInBlocks(n) *264);
}
function distanceTravelledInFeet (start,destination) {
    return Math.abs(destination-start)*264;
}
function calculatesFarePrice (start,destination) {
    if (distanceTravelledInFeet(start,destination)<=400){
        return 0;
    }
    else if (distanceTravelledInFeet(start,destination) >=401 && distanceTravelledInFeet(start, destination) <=2000){
        return ((distanceTravelledInFeet(start,destination)-400)*0.02);
    }
    else if (distanceTravelledInFeet(start, destination)>2001 && distanceTravelledInFeet(start, destination)<2500) {
        return 25;
    }
    else if (distanceTravelledInFeet(start, destination)>2500){
        return "cannot travel that far";
    }
}