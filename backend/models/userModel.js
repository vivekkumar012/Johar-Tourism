import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["Tourist", "Local Guide", "Tribal Artisan", "Homestay Owner", "Transport Provider", "Tourism Official", "Event Organizer"], default: "Tourist" },
}, { timestamps: true });

export default mongoose.model("User", userSchema);
