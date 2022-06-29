import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {

        const ctx = host.switchToHttp();
        const req = ctx.getRequest();
        const res = ctx.getResponse();
        const status = exception.getStatus();
        
        const errResponse = {
            code: status,
            name: exception.name,
            timestamp: new Date().toLocaleDateString(),
            path: req.url,
            method: req.method,
            message: exception.message || exception || null,
        };
        
        res.status(status).json(errResponse);
    }
}