import * as mongoose from 'mongoose';
import { isEmail } from 'validator';

const Schema = mongoose.Schema;

export const StudentSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    birthDate: {
        type: Date,   
        required: 'Enter a birth Date'
    },
    email: {
        type: String,
        validate: [isEmail,'invalid Email'],
        required: 'Enter a valid email'        
    },
    address: {
        type: String,
        required: 'Enter a Address'          
    },
    gender: {
        type: String,
        required: 'Enter a Gender'       
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});