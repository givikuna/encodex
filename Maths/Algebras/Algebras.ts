import { LinearAlgebra } from "./LinearAlgebra/LinearAlgebra";
import { BooleanAlgebra } from "./BooleanAlgebra/BooleanAlgebra";
import { BitwiseLogic } from "./BitwiseLogic/BitwiseLogic";
import { SetAlgebra } from "./SetAlgebra/SetAlgebra";

export class Algebras {
    public static BooleanAlgebra: typeof BooleanAlgebra = BooleanAlgebra;
    public static BitwiseLogic: typeof BitwiseLogic = BitwiseLogic;
    public static SetAlgebra: typeof SetAlgebra = SetAlgebra;
    public static LinearAlgebra: typeof LinearAlgebra = LinearAlgebra;
}
