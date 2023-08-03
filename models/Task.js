const mongoose =require('mongoose');

const TaskSchema = new mongoose.Schema({ //bunlar validation
    name: {
      type: String,
      required: [true, 'must provide name'],  //name boş olmasın
      trim: true, // "  boşlukları ignore etsin  "
      maxlength: [20, 'name can not be more than 20 characters'],
    },
    completed: {
      type: Boolean,
      default: false, //default olarak tasklar tamamlanmamış olacak.
    },
  })

module.exports=mongoose.model('Task',TaskSchema)