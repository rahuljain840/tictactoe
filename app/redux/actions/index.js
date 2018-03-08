import moment from 'moment';
export const INIT_ACTION = 'INIT_ACTION';
export const SEARCH_FLIGHTS = 'SEARCH_FLIGHTS';
export const REFINE_BY_PRICE = 'REFINE_BY_PRICE';

export const initAction = () => {
    return {
        type: INIT_ACTION
    };
};

export const searchFlights = (flights) => {
    return {
        type: SEARCH_FLIGHTS,
        data: flights
    };
};

export const refineByPrice = (flights) => {
    return {
        type: REFINE_BY_PRICE,
        data: flights
    };
};

// departureDate, arrivalDate, origin, destination, isRound
export const search = (filters) => {
    return (dispatch) => {
        dispatch(initAction);
        fetch('/api/flights').then(response => {
            console.log(response);
            return response.json();
        }).then((data) => {
            console.log(data);
            var flights = [];
            var departFlights = data.filter((flight) => {
                const flightDepartureDate = new Date(flight.departuretime);
                if ((filters.origin.toLowerCase() == flight.departurecode.toLowerCase() || filters.origin.toLowerCase() == flight.departure.toLowerCase()) && 
                    (filters.destination.toLowerCase() == flight.arrivalcode.toLowerCase() || filters.destination.toLowerCase() == flight.arrival.toLowerCase()) && 
                    flightDepartureDate >= new Date(filters.departureDate)) {
                    return flight;
                }
            });

            var arrivalFlights = [];
            if (filters.isRound) {
                arrivalFlights = data.filter((flight) => {
                    const flightArrivalDate = new Date(flight.arrivaltime);
                    if ((filters.origin.toLowerCase() == flight.arrivalcode.toLowerCase() || filters.origin.toLowerCase() == flight.arrival.toLowerCase()) && 
                        (filters.destination.toLowerCase() == flight.departurecode.toLowerCase() || filters.destination.toLowerCase() == flight.departure.toLowerCase()) && 
                        flightArrivalDate >= new Date(filters.arrivalDate)) {
                        return flight;
                    }
                });

                departFlights.forEach((departFlight) => {
                    arrivalFlights.forEach((arrivalFlight) => {
                        var flight = {};
                        flight.source = departFlight;
                        flight.destination = arrivalFlight;

                        flights.push(flight);
                    });
                });
            }
            else {
                departFlights.forEach((departFlight) => {
                    flights.push({ source: departFlight });
                });
            }
            console.log("filtered flights are", flights);
            dispatch(searchFlights(flights));
        });
    }
}

export const extendedSearch = (filters, flightArray, refineFilterValue) => {
    return (dispatch) => {
        dispatch(initAction);
        var flights = flightArray.filter((flight) => {
            if (filters.isRound) {
                if ((flight.source.charges + flight.destination.charges) <= refineFilterValue) {
                    return flight;
                }
            }
            else {
                if (flight.source.charges <= refineFilterValue) {
                    return flight;
                }
            }
        });
        dispatch(refineByPrice(flights));
    }
}

