import { Cloneable } from "./Cloneable";
import { Filterable } from "./Filterable";
import { Mappable } from "./Mappable";

export interface Structure<T> extends Filterable<T>, Mappable<T>, Cloneable<T> {
    remove(predicate: (item: T, index?: number) => boolean): boolean;
}
