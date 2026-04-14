import { Utils } from "./Utils/Utils";
import { Type as _Type } from "./Type/Type";

export class Encodex {
    public static Utils: typeof Utils = Utils;
}

export namespace Encodex {
    export import Type = _Type;
}
