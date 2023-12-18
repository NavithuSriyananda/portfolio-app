import { GetFileContentAsync } from "@/libs/FileLibrary";
import { YamlContentToModel } from "@/libs/YamlLibrary";
import path from "path";
import { Type } from "typescript";

async function YamlFileToModel<T = Type,>(fileName: string): Promise<T> {
    const yamlFilePath = path.join(process.cwd(), 'public/data/', fileName);
    var fileContent = await GetFileContentAsync(yamlFilePath, 'utf8');
    var model = await YamlContentToModel<T>(fileContent);
    return model;
}

export {
    YamlFileToModel
}