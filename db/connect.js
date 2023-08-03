const mongoose= require('mongoose')




const connectDB=(url) =>{
    return mongoose.connect(url, { // bu satırları saçma sapan warningler vermesin diye ekledik, bu 4 satırı yazma sebebimiz bu..
        useNewUrlParser:true,
        useCreateIndex: true,
        useFindModify: false,
        useUnifiedTopology: true,
    })

}
module.exports=connectDB