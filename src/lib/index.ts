import { dirname } from "path"


export const getDirectoryName = (fileName:string) :string =>{
    const __dirname = dirname(fileName);
    return __dirname
}