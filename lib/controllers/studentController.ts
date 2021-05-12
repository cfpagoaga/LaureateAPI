import * as mongoose from 'mongoose';
import { StudentSchema } from '../models/studentModel';
import { Request, Response } from 'express';

const Student = mongoose.model('students', StudentSchema);

export class StudentController{

    public addNewStudent (req: Request, res: Response) {                
        let newStudent = new Student(req.body);
    
        newStudent.save((err, contact) => {
            if(err){
                res.send(err);
            }    
            res.json(contact);
        });
    }

    public getStudents (req: Request, res: Response) {           
        Student.find({}, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    public getStudentWithID (req: Request, res: Response) {     
        Student.findById(req.params.studentId, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    public updateStudent (req: Request, res: Response) {           
        Student.findOneAndUpdate({ _id: req.params.studentId }, req.body, { new: true }, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    public deleteStudent (req: Request, res: Response) {           
        Student.deleteOne({_id: req.params.studentId}).then(result => {
            res.json(result);
        }).catch(function(error){
            res.send(error);
        });
    }
}