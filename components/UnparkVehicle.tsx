"use client";

import React, { useState } from "react";
import { unparkVehicle } from "../services/parkingLotService";

const UnparkVehicle: React.FC = () => {
    const [ticketId, setTicketId] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await unparkVehicle(ticketId);
        setMessage(response.message);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
            <h2 className="text-lg font-bold mb-4">Unpark Vehicle</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium">Ticket ID</label>
                <input
                    type="text"
                    value={ticketId}
                    onChange={(e) => setTicketId(e.target.value)}
                    className="mt-1 p-2 border rounded w-full"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Unpark
            </button>
            {message && <p className="mt-4 text-green-500">{message}</p>}
        </form>
    );
};

export default UnparkVehicle;
