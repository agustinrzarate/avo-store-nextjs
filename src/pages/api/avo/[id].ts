import { NextApiRequest, NextApiResponse } from 'next';
import DB from '@database';

const AvoDetail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = new DB();
    const avoId = req.query.id as string;
    const avo = await db.getById(avoId);
    res.status(200).json(avo);
  } catch (error) {
    console.error(error);
    res.status(404).end();
  }
};

export default AvoDetail;