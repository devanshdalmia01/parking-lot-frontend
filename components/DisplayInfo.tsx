"use client";

import React, { useState } from "react";
import { displayFreeCount, displayFreeSlots, displayOccupiedSlots } from "../services/parkingLotService";

const DisplayInfo: React.FC = () => {
    const [vehicleType, setVehicleType] = useState("");
    const [displayType, setDisplayType] = useState("");
    const [result, setResult] = useState<string[]>([]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        let response;
        if (displayType === "free_count") {
            response = await displayFreeCount(vehicleType);
        } else if (displayType === "free_slots") {
            response = await displayFreeSlots(vehicleType);
        } else if (displayType === "occupied_slots") {
            response = await displayOccupiedSlots(vehicleType);
        }
        setResult(response);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
            <h2 className="text-lg font-bold mb-4">Display Information</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium">Vehicle Type</label>
                <select
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    className="mt-1 p-2 border rounded w-full"
                >
                    <option value="" disabled>
                        Select vehicle type
                    </option>
                    <option value="CAR">Car</option>
                    <option value="BIKE">Bike</option>
                    <option value="TRUCK">Truck</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium">Display Type</label>
                <select
                    value={displayType}
                    onChange={(e) => setDisplayType(e.target.value)}
                    className="mt-1 p-2 border rounded w-full"
                >
                    <option value="" disabled>
                        Select display type
                    </option>
                    <option value="free_count">Free Count</option>
                    <option value="free_slots">Free Slots</option>
                    <option value="occupied_slots">Occupied Slots</option>
                </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Display
            </button>
            {result.length > 0 && (
                <div className="mt-4">
                    {result.map((res, index) => (
                        <p key={index}>{res}</p>
                    ))}
                </div>
            )}
        </form>
    );
};

export default DisplayInfo;
