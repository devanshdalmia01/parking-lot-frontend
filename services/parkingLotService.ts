const backendAPI =
    process.env.NODE_ENV === "production" ? "https://parkinglotapi.azurewebsites.net/" : "http://localhost:5063/";

export const createParkingLot = async (id: string, numberOfFloors: number, numberOfSlotsPerFloor: number) => {
    const response = await fetch(`${backendAPI}parkinglot/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ parkingLotId: id, numberOfFloors, numberOfSlotsPerFloor }),
    });
    return response.json();
};

export const parkVehicle = async (vehicleType: string, registrationNumber: string, color: string) => {
    const response = await fetch(`${backendAPI}parkinglot/park`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ vehicleType, registrationNumber, color }),
    });
    return response.json();
};

export const unparkVehicle = async (ticketId: string) => {
    const response = await fetch(`${backendAPI}parkinglot/unpark`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ticketId }),
    });
    return response.json();
};

export const displayFreeCount = async (vehicleType: string) => {
    const response = await fetch(`${backendAPI}parkinglot/display/free_count/${vehicleType}`);
    return response.json();
};

export const displayFreeSlots = async (vehicleType: string) => {
    const response = await fetch(`${backendAPI}parkinglot/display/free_slots/${vehicleType}`);
    return response.json();
};

export const displayOccupiedSlots = async (vehicleType: string) => {
    const response = await fetch(`${backendAPI}parkinglot/display/occupied_slots/${vehicleType}`);
    return response.json();
};
