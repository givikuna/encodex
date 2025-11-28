import { Digraph } from "./Graphs/Digraph";

import { MinHeap } from "./Heaps/MinHeap";
import { MaxHeap } from "./Heaps/MaxHeap";

import { LinkedList, LLNode } from "./Lists/LinkedList";

import { Queue } from "./Queues/Queue";

import { Stack } from "./Stacks/Stack";

import { BST, BSTNode } from "./Trees/BST";
import { LLRB, LLRBNode } from "./Trees/LLRB";

export class Structure {
    public static Digraph = Digraph;

    public static MinHeap = MinHeap;
    public static MaxHeap = MaxHeap;

    public static LinkedList = LinkedList;
    public static LLNode = LLNode;

    public static Queue = Queue;
    public static Stack = Stack;

    public static BST = BST;
    public static BSTNode = BSTNode;
    public static LLRB = LLRB;
    public static LLRBNode = LLRBNode;
}
