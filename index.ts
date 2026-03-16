import { Structure } from "./DataStructures/Structure";
import { Maths } from "./Maths/Maths";
import { Sorting } from "./Sorting/Sorting";
import { Util } from "./Utilities/Util";
import { Monads } from "./Monads/Monads";

export class Encodex {
    public static Structure: typeof Structure = Structure;
    public static Maths: typeof Maths = Maths;
    public static Sorting: typeof Sorting = Sorting;
    public static Util: typeof Util = Util;
    public static Monads: typeof Monads = Monads;
}
