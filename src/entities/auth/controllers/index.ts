import { Request, Response } from "express";
import { authService } from "../services";

export const authController = {
  async register(req: Request, res: Response) {
    try {
      const body = await authService.register(req.body);
      res.json({body: body});

    } catch (error) {
      res.json({error: error});
    }
  },

  async login(req: Request, res: Response) {
    try {
      const body = await authService.login(req.body);
      res.json({body: body});

    } catch (error) {
      res.json({error: error});
    }
  }
}
