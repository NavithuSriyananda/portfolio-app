// Note: Facade Pattern
import 'server-only';

//#region imports
import jsYaml from 'js-yaml';
import { Type } from 'typescript';
//#endregion imports

//#region functions
/**
 * 
 * @param content 
 * @returns 
 */
async function YamlContentToModel<T = Type,>(content: string): Promise<T> {
    var model = await jsYaml.load(content, { json: true }) as T;
    return model;
}

//#endregion functions

//#region exports
export {
    YamlContentToModel
}
//#endregion exports