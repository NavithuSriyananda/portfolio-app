//Note: Facade Pattern
import 'server-only';

import fs, { promises as fsPromises, PathLike } from 'fs';


/**
 * Asynchronously reads a file.
 * @param {string} filePath [required]
 * @param {BufferEncoding} encoding [required]
 * @returns {string} { fileContent: string }
 */
async function GetFileContentAsync(filePath: PathLike, encoding: BufferEncoding): Promise<string> {
    const content = fsPromises.readFile(filePath, { encoding: encoding, flag: 'r' });
    return content;
}

async function GetFileBufferAsync(filePath: PathLike): Promise<Buffer> {
    const buffer = fsPromises.readFile(filePath, { flag: 'r' });
    return buffer;
}

export {
    GetFileContentAsync,
    GetFileBufferAsync
}
