import { NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";

export class LoggerMidleware implements NestMiddleware{
    use(req: Request, res: Response, next: Function) {
       console.log(req.url,req.method)
       next();
    }

}