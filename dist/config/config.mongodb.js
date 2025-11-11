import mongoose from "mongoose";
const MONGODB_URI = 'mongodb+srv://victoribk:Jesusismylord1.@cluster0.qyk0ocl.mongodb.net/AIquiz';
const connectDatabase = async () => {
    await mongoose.connect(MONGODB_URI).then(() => {
        console.log(`Database connected successfully at ${Date.now()} `);
    })
        .catch((err) => {
        console.log(err.message);
    });
};
export default connectDatabase;
//# sourceMappingURL=config.mongodb.js.map