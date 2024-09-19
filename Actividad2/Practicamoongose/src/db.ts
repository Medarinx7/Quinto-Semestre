import mongoose from 'mongoose';
mongoose.set('debug', true);

export const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/tu-base-datos', {
    
    });
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
};
