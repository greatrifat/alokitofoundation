import mongoose from "mongoose";

const projectsSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name of the project
  date: { type: Date, default: Date.now }, // Start date of the project
  location: { type: String, default: "" }, // Project location
  budget: { type: Number, default: 0 }, // Budget for the project
  contributors: [{ type: String, default: "" }], // Multiple contributors
  imageUrl: { type: String, default: "/image/default.jpg" }, // Image URL
  details: { type: String, default: "" }, // Detailed description of the project (fixing the typo)
  description: { type: String, maxlength: 500 }, // Short project description for overviews
  tags: [{ type: String }], // Tags or categories for the project
  status: { 
    type: String, 
    enum: ['pending', 'active', 'completed', 'archived'], 
    default: 'pending' 
  }, // Status of the project
}, {timestamps: true});

const Projects = mongoose.models.users || mongoose.model("projects", projectsSchema);

export default Projects;