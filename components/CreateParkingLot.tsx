"use client";

import React, { useState } from "react";
import { createParkingLot } from "../services/parkingLotService";

const CreateParkingLot: React.FC = () => {
    const [id, setId] = useState("");
    const [floors, setFloors] = useState(0);
    const [slots, setSlots] = useState(0);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await createParkingLot(id, floors, slots);
        setMessage(response.message);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
            <h2 className="text-lg font-bold mb-4">Create Parking Lot</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium">Parking Lot ID</label>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="mt-1 p-2 border rounded w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium">Number of Floors</label>
                <input
                    type="number"
                    value={floors}
                    onChange={(e) => setFloors(Number(e.target.value))}
                    className="mt-1 p-2 border rounded w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium">Number of Slots per Floor</label>
                <input
                    type="number"
                    value={slots}
                    onChange={(e) => setSlots(Number(e.target.value))}
                    className="mt-1 p-2 border rounded w-full"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Create
            </button>
            {message && <p className="mt-4 text-green-500">{message}</p>}
        </form>
    );
};

export default CreateParkingLot;
