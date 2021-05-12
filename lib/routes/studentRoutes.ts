import {Request, Response} from "express";
import { StudentController } from "../controllers/studentController";

export class Routes {    

    public studentController: StudentController = new StudentController()

    public routes(app): void {   
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        
        app.route('/student')
        .post(this.studentController.addNewStudent)
        .get(this.studentController.getStudents);
        
        app.route('/student/:studentId')
        .get(this.studentController.getStudentWithID)
        .put(this.studentController.updateStudent)
        .delete(this.studentController.deleteStudent);
    }
}