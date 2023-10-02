// Note: Facade Pattern
import 'server-only';

//#region imports
import jsYaml from 'js-yaml';
//#endregion imports

//#region functions

export function YamlToModel<T>(contentString: string) {
    var model = jsYaml.load(contentString, { json: true }) as T;
    return model;
}

//#endregion functions

//#region exports
//#endregion exports