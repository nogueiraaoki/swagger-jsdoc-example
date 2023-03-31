import { Router, Request, Response, NextFunction } from "express";

class Route {
  public router = Router();
  constructor() {
    /**
     * @swagger
     * /health:
     *   get:
     *     description: return health status of service
     *     tags:
     *      - health
     *     produces:
     *      - application/json
     *     responses:
     *       200:
     *         description: return true or false
     */
    this.router.get("/health", function (request: Request, response: Response) {
      response.json({ status: true });
    });
  }
}

export default Route;
