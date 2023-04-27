import { Request, Response } from "express";
import { messageService } from "../services";

export const messageController = {
  // USER COMMANDS
  async create(req: Request, res: Response) {
    try {
      const body = await messageService.create(req.body);
      res.json({body: body});

    } catch (error) {
      res.json({error: error});
    }
  },
}
