import { Digraph } from "./Graphs/Digraph";

import { MinHeap } from "./Heaps/MinHeap";
import { MaxHeap } from "./Heaps/MaxHeap";

import { LinkedList, LLNode } from "./Lists/LinkedList";

import { Queue } from "./Queues/Queue";

import { Stack } from "./Stacks/Stack";

import { BST, BSTNode } from "./Trees/BST";
import { LLRB, LLRBNode } from "./Trees/LLRB";

export class Structure {
    public static Digraph: typeof Digraph = Digraph;

    public static MinHeap: typeof MinHeap = MinHeap;
    public static MaxHeap: typeof MaxHeap = MaxHeap;

    public static LinkedList: typeof LinkedList = LinkedList;
    public static LLNode: typeof LLNode = LLNode;

    public static Queue: typeof Queue = Queue;
    public static Stack: typeof Stack = Stack;

    public static BST: typeof BST = BST;
    public static BSTNode: typeof BSTNode = BSTNode;
    public static LLRB: typeof LLRB = LLRB;
    public static LLRBNode: typeof LLRBNode = LLRBNode;
}
