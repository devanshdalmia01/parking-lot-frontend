// services/parkingLotService.ts
export const createParkingLot = async (id: string, numberOfFloors: number, numberOfSlotsPerFloor: number) => {
    const response = await fetch("http://localhost:5063/parkinglot/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ parkingLotId: id, numberOfFloors, numberOfSlotsPerFloor }),
    });
    return response.json();
};

export const parkVehicle = async (vehicleType: string, registrationNumber: string, color: string) => {
    const response = await fetch("http://localhost:5063/parkinglot/park", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ vehicleType, registrationNumber, color }),
    });
    return response.json();
};

export const unparkVehicle = async (ticketId: string) => {
    const response = await fetch("http://localhost:5063/parkinglot/unpark", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ticketId }),
    });
    return response.json();
};

export const displayFreeCount = async (vehicleType: string) => {
    const response = await fetch(`http://localhost:5063/parkinglot/display/free_count/${vehicleType}`);
    return response.json();
};

export const displayFreeSlots = async (vehicleType: string) => {
    const response = await fetch(`http://localhost:5063/parkinglot/display/free_slots/${vehicleType}`);
    return response.json();
};

export const displayOccupiedSlots = async (vehicleType: string) => {
    const response = await fetch(`http://localhost:5063/parkinglot/display/occupied_slots/${vehicleType}`);
    return response.json();
};
