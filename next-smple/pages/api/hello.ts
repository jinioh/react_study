import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type HelloResponse = {
    name: string
}

export default (req: NextApiRequest, res: NextApiResponse<HelloResponse>) => {
    res.status(200).json({ name: 'Jini Oh' });
}