import multer from 'multer'
const Storage = multer.diskStorage({
    destination: function (req: any, file: any, callback: any) {
        callback(null, "./Images/profilephotos");
    },
    filename: function (req: any, file: any, callback: any) {
        console.log(file.fieldname + "_" + Date.now() + "_" + file.originalname)
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});
const upload = multer({
    storage: Storage
});

export default upload