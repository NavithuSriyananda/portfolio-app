//Note: Facade Pattern
import 'server-only';

import fs, { promises as fsPromises, PathLike } from 'fs';


/**
 * Asynchronously reads a file.
 * @param {string} filePath [required]
 * @param {BufferEncoding} encoding [required]
 * @returns {string} { fileContent: string }
 */
async function ReadFileAsync(filePath: PathLike, encoding: BufferEncoding): Promise<string> {
    const content = fsPromises.readFile(filePath, { encoding: encoding, flag: 'r' });
    return content;
}


export {
    ReadFileAsync
}
