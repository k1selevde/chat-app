import {Response, Request} from "express";

import { UserModel } from "../models"
import {IUser} from "../models/User";



class UserController {
    constructor() {
    }

    // find user
    static show = (req: Request, res: Response): void => {
        const id: string = req.params.id
        UserModel.findById(id, (err: any, user: IUser) => {
            return Boolean(err) ?
                res.status(404).json({ message: 'User not found'})
                : res.json(user);
        })
    }


    // find me doc
    static getMe = (req: Request, res: Response): void => {
        // const id: any = Boolean(req.user) && req.user._id;
        const id = '12'
        UserModel.findById(id, (err: any, user: IUser) => {
            if (err || !user) {
                return res.status(404).json({
                    message: "User not found"
                });
            }
            res.json(user);
        })
    }



    static findUsers = (req: Request, res: Response): void => {
        const query: any = req.query.query || '';
        UserModel.find().or([
            { fullname:new RegExp(query, "i") },
            { email: new RegExp(query, "i")}
        ])
        .then((users: IUser[]) => res.json(users))
        .catch(( err: any ) => {
            message: "error"
        })

    }

    static delete = (req: Request, res: Response): void => {
        const id: string = req.params.id;
        UserModel.findByIdAndDelete({_id: id})
            .then((user: IUser | null) => {
                if (user) {
                    res.json({
                        message: `User ${user.fullname} deleted`
                    })
                } else {
                    res.status(404).json({ message: 'Error: user not found.'})
                }
            })
            .catch((err: any) => {
                res.json({
                    message: err
                })
            })
    }


    static create = (req: Request, res: Response): void => {
        /*const data: {fullname: string, email: string, password: string } = {
            email: req.body.email,
            fullname: req.body.fullname,
            password: req.body.password
        }
        // const errors = validationResult(req)

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array()})
        } else {
            let user = new UserModel(data);

            user.save()
                .then((doc: IUser) => {
                    res.json(doc);
                    mailer.sendMail(
                        {
                            from: "me@test.ru",
                            to: data.email,
                            subject: " Подтверждение почты full-chat-app :D",
                            html: `Для того чтобы подтвердить почту перейдите на <a href="http://localhost:3000/signup/verify?hash=${doc.confirm_hash}">по этой ссылке</a>\`
                        }, 
                        function (err, info) {
                           if (err) {
                             console.log(err);
                           } else {
                             console.log(info);
                          }
                        }
                    )
                })
                .catch((reason) => {
                   res.status(500).json({
                     status: "error",
                     message: reason,
                   });
                });
        }*/
    }

    static verify = (req: Request, res: Response): void => {
        const hash: any = req.query.hash || '';

        if (!hash) {
            res.status(422).json({ errors: "Invalid hash" });
        } else {
            UserModel.findOne({ confirm_hash: hash}, (err: any, user: IUser) => {
                if (err || !user) {
                    return res.status(404).json({
                        status: "error",
                        message: "Hash not found"
                    });
                }

                user.confirmed = true;
                user.save((err: any) => {
                    if (err) {
                        return res.status(404).json({
                            status: "error",
                            message: err,
                        });
                    }

                    res.json({
                        status: "success",
                        message: "Аккаунто успешно подтвержден!"
                    })
                })
            })
        }
    }

    static login = (req: Request, res: Response): void => {
        const data: { email: string, password: string} = {
            email: req.body.email,
            password: req.body.password
        };
        // const errors: Result ...

        // if (!errors.isEmpty()) {
        //     res.status(422).json({ errors: ''})
        // }
    }

}


export default UserController;