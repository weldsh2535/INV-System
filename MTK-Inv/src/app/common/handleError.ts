import { Observable } from "rxjs";
import { AppError } from "./app-error";
import { BadInput } from "./bad-input";
import { NotFoundError } from "./not-found-error";

export class HandleError{
   public handleError(error: Response) {
        if (error.status === 400)
          return Observable.throw(new BadInput(error.json()));
      
        if (error.status === 404)
          return Observable.throw(new NotFoundError());
        
        return Observable.throw(new AppError(error));
      }
}
