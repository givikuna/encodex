import { Utils } from "./lib/Utils/Utils";
import { Type as _Type } from "./lib/Type/Type";

export class Encodex {
    public static Utils: typeof Utils = Utils;
}

export namespace Encodex {
    export import Type = _Type;
}
