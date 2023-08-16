import 'server-only' // Server only
import Yaml from 'js-yaml'
import fs from 'fs'
import { DataModel } from '@/models/app/DataModel';

export default function getData() {
    const data = Yaml.load(fs.readFileSync('./src/app/data.yml', 'utf8')) as DataModel;
    return data;
}