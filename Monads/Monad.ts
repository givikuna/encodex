import { Either } from "./Either";
import { Maybe } from "./Maybe";

export class Monad {
    public static Either: typeof Either = Either;
    public static Maybe: typeof Maybe = Maybe;
}
