//Note: Facade Pattern
import 'server-only';

//#region imports
import fs, { PathOrFileDescriptor } from 'fs';
//#endregion imports

//#region functions

/**
 * Asynchronously reads a file.
 * @param {string} filePath [required]
 * @param {BufferEncoding} encoding [required]
 * @returns 
 */
async function ReadFileAsync(filePath: PathOrFileDescriptor, encoding: BufferEncoding): Promise<string> {
    const fileBuffer = await fs.readFileSync(filePath, encoding);
    return fileBuffer;
}

//#endregion functions

//#region exports 
export {
    ReadFileAsync
}
//#endregion exports