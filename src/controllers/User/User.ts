import { Request, Response } from 'express';
import { CrudController } from '../CrudController';
import { DADOU_NAME } from '../../config/constants'

export class UserController extends CrudController {
    public create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }
    public read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        //Not the use of backticks `` in the below string to support interpolation!
        res.json({ message: `GET /user request received. Many thanks, ${ DADOU_NAME }! `});
    }
    public update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }
    public delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }
}