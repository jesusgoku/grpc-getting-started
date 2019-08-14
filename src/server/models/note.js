import mongoose from 'mongoose';

export default mongoose.model('Note', {
  title: String,
  content: String,
});
