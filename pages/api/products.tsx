import { NextApiRequest, NextApiResponse } from 'next';
import jsonServer from 'json-server';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'db.json');

const server = jsonServer.create();
const router = jsonServer.router(dbPath); // Use db.json file as the data source
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  server(req, res); // Handle the request with JSON Server
};

export default handler;