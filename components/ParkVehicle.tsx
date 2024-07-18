"use client";

import React, { useState } from "react";
import { parkVehicle } from "../services/parkingLotService";

const ParkVehicle: React.FC = () => {
    const [type, setType] = useState("");
    const [regNumber, setRegNumber] = useState("");
    const [color, setColor] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await parkVehicle(type, regNumber, color);
        setMessage(response.ticketId ? `Parked vehicle. Ticket ID: ${response.ticketId}` : response.message);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
            <h2 className="text-lg font-bold mb-4">Park Vehicle</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium">Vehicle Type</label>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
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
                <label className="block text-sm font-medium">Registration Number</label>
                <input
                    type="text"
                    value={regNumber}
                    onChange={(e) => setRegNumber(e.target.value)}
                    className="mt-1 p-2 border rounded w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium">Color</label>
                <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="mt-1 p-2 border rounded w-full"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Park
            </button>
            {message && <p className="mt-4 text-green-500">{message}</p>}
        </form>
    );
};

export default ParkVehicle;
