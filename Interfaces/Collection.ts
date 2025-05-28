import { Cloneable } from "./Cloneable";
import { Filterable } from "./Filterable";
import { Mappable } from "./Mappable";
import { Reducible } from "./Reducible";
import { Reversible } from "./Reversible";

export interface Collection<T>
    extends Filterable<T>,
        Mappable<T>,
        Reducible<T>,
        Reversible<T>,
        Cloneable<T> {}
