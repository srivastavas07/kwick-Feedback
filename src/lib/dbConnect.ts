import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}
const connection: ConnectionObject = {
}
const dbConnect = async (): Promise<void> => {
    if (connection.isConnected) {
        console.log("already connected");
        return
    }
    try {

        const db = await mongoose.connect(process.env.MONGO_URI as string || '');
        connection.isConnected = db.connections[0].readyState;
        console.log("Connected to database..!!")

    } catch (error) {
        console.error("Database connection failed..!!", error);
        process.exit(1);
    }
}
export default dbConnect;
