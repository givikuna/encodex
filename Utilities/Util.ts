import { Default } from "./Default";
import { Func } from "./Func";
import { List } from "./List";
import { Str } from "./Str";

export class Util {
    public static Default: typeof Default = Default;
    public static Func: typeof Func = Func;
    public static List: typeof List = List;
    public static Str: typeof Str = Str;
}
