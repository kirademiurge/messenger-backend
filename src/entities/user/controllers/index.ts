import { Request, Response } from "express";
import { userService } from "../services";

export const userController = {
  // USER COMMANDS
  async getOne(req: Request, res: Response) {
    try {
      const body = await userService.getOne(req.body);
      res.json({body: body});

    } catch (error) {
      res.json({error: error});
    }
  },

  async getAll(req: Request, res: Response) {
    try {
      const body = await userService.getAll(req.body);
      res.json({body: body});

    } catch (error) {
      res.json({error: error});
    }
  },

  async edit(req: Request, res: Response) {
    try {
      const body = await userService.edit(req.body);
      res.json({body: body});

    } catch (error) {
      res.json({error: error});
    }
  },

  // ADMIN COMMANDS
  async getAllAsAdmin(req: Request, res: Response) {
    try {
      const body = await userService.getAllAsAdmin();
      res.json({body: body});

    } catch (error) {
      res.json({error: error});
    }
  },

  async getOneAsAdmin(req: Request, res: Response) {
    try {
      const body = await userService.getOneAsAdmin(req.body);
      res.json({body: body});

    } catch (error) {
      res.json({error: error});
    }
  },

  async createAsAdmin(req: Request, res: Response) {
    try {
      const body = await userService.createAsAdmin(req.body);
      res.json({body: body});

    } catch (error) {
      res.json({error: error});
    }
  },

  async editAsAdmin(req: Request, res: Response) {
    try {
      const body = await userService.editAsAdmin(req.body);
      res.json({body: body});

    } catch (error) {
      res.json({error: error});
    }
  },

  async deleteAsAdmin(req: Request, res: Response) {
    try {
      const body = await userService.deleteAsAdmin(req.body);
      res.json({body: body});

    } catch (error) {
      res.json({error: error});
    }
  },

  async deleteManyAsAdmin(req: Request, res: Response) {
    try {
      const body = await userService.deleteManyAsAdmin(req.body);
      res.json({body: body});

    } catch (error) {
      res.json({error: error});
    }
  },
}
