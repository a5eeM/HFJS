var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};

var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};

var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
};

var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
};

function prequal(car) {
    if (car.mileage <= 10000 && car.year <= 1960) {
        return true;
    }
    return false;
}

var worthALook = prequal(taxi);

if (worthALook) {
    console.log("You gotta check this " + taxi.make + " " + taxi.model);
} else {
    console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}

function isWorthALook(didQualify, car) {
    if (didQualify) {
        console.log("You gotta check this " + car.make + " " + car.model);
    } else {
        console.log("You should really pass on the " + car.make + " " + car.model);
    }
}

isWorthALook(prequal(taxi), taxi);
isWorthALook(prequal(cadi), cadi);
isWorthALook(prequal(fiat), fiat);
isWorthALook(prequal(chevy), chevy);