// Ex2.6 - Years and Centuries
// The first century spans from the year 1 up to and including the year 100, The second - from the
// year 101 up to and including the year 200, etc.
// Task :
// Given a year, return the century it is in.
// Input , Output Examples ::
// centuryFromYear(1705) returns (18)
// centuryFromYear( 1900) returns (19)
// centuryFromYear(1601) returns (17)
// centuryFromYear(2000) returns (20)

function centuryFromYear(year) {
    let century = Math.floor(year / 100);
    century += year % 100 > 0 ? 1 : 0;
    return century;
}
console.log(centuryFromYear(50));
console.log(centuryFromYear(101));
console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1901));
console.log(centuryFromYear(2000));
