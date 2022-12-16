import {connect} from "mongoose";

export class database {

    private readonly dbURI = 'mongodb://localhost:27017/Workshop';
   

    public dbConnect() {
        try {
            console.log("start connect")
            connect(this.dbURI);
            console.log("db connected")
        } catch(e) {
            console.log(e);
        }
    }
}