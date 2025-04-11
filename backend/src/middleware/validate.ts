import { Request, Response, NextFunction, RequestHandler } from 'express';
import { AnyZodObject } from 'zod';

export const validate = (schema: AnyZodObject): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        params: req.params,
        body: req.body,
        query: req.query,
      });
      next();
    } catch (e: any) {
      res.status(400).json(e.errors);
    }
  };
};
