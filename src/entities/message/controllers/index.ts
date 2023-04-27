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

  async delete(req: Request, res: Response) {
    try {
      const body = await messageService.delete(req.body);
      res.json({body: body});

    } catch (error) {
      res.json({error: error});
    }
  },

  async deleteMany(req: Request, res: Response) {
    try {
      const body = await messageService.deleteMany(req.body);
      res.json({body: body});

    } catch (error) {
      res.json({error: error});
    }
  },

  async checkMany(req: Request, res: Response) {
    try {
      const body = await messageService.checkMany(req.body);
      res.json({body: body});

    } catch (error) {
      res.json({error: error});
    }
  },

  async edit(req: Request, res: Response) {
    try {
      const body = await messageService.edit(req.body);
      res.json({body: body});

    } catch (error) {
      res.json({error: error});
    }
  },

  // ADMIN COMMANDS
  async editAsAdmin(req: Request, res: Response) {
    try {
      const body = await messageService.editAsAdmin(req.body);
      res.json({body: body});

    } catch (error) {
      res.json({error: error});
    }
  },

  async deleteAsAdmin(req: Request, res: Response) {
    try {
      const body = await messageService.deleteAsAdmin(req.body);
      res.json({body: body});

    } catch (error) {
      res.json({error: error});
    }
  },

  async deleteManyAsAdmin(req: Request, res: Response) {
    try {
      const body = await messageService.deleteManyAsAdmin(req.body);
      res.json({body: body});

    } catch (error) {
      res.json({error: error});
    }
  },
}
