import CreateParkingLot from "../components/CreateParkingLot";
import ParkVehicle from "../components/ParkVehicle";
import UnparkVehicle from "../components/UnparkVehicle";
import DisplayInfo from "../components/DisplayInfo";

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">Parking Lot Management System</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <CreateParkingLot />
                    <ParkVehicle />
                    <UnparkVehicle />
                    <DisplayInfo />
                </div>
            </div>
        </div>
    );
};

export default Home;
