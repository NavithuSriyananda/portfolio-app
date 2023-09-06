import 'server-only' // Server only

import Yaml from 'js-yaml'
import fs from 'fs'
import { DataModel } from '@/models/app/DataModel';
import { NextFetchEvent } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';

async function getData() {
    const data = Yaml.load(fs.readFileSync('./src/app/data.yml', 'utf8')) as DataModel;
    return data;
}

async function getResumeFile() {
    var res = await fetch("https://drive.google.com/u/0/uc?id=1g6Yp06BiGdVKoUVy1zAwAYNv32FrW0f4&export=download");
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return await res.blob();
}

async function _handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const data = req.body;
        res.status(200).json({ data });
        res.end();
    } catch (error) {

    }
}

export { getData, getResumeFile }