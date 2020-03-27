//A bus has n stops numbered from 0 to n - 1 that form a circle.
//We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.
//The bus goes along both directions i.e. clockwise and counterclockwise.
//Return the shortest distance between the given start and destination stops.


var distanceBetweenBusStops = function(distance, start, destination) {
   
    const length = distance.length;

    let clockwise = 0;
    let counterclockwise = 0;
    let i = start;
    let j = start;
    
    while (i !== destination || j !== destination) {
        if (i !== destination) {
            clockwise += distance[i];
            i = (i + 1) % length;
        }

        if (j !== destination) {
            j = j === 0 ? length - 1 : j - 1;
            counterclockwise += distance[j];
        }
    }

    return Math.min(clockwise, counterclockwise);
};
