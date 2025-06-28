import { BST, BSTNode } from "./BST";

import { Nullable } from "../../Types";
import { Comparator } from "../../Types/Comparator";

enum LLRBColor {
    RED,
    BLACK,
}

export class LLRBNode<T> extends BSTNode<T> {
    public color: LLRBColor = LLRBColor.RED;
    public override left: Nullable<LLRBNode<T>>;
    public override right: Nullable<LLRBNode<T>>;

    constructor(
        key: T,
        color: LLRBColor = LLRBColor.RED,
        left: Nullable<LLRBNode<T>> = null,
        right: Nullable<LLRBNode<T>> = null,
    ) {
        super(key, left, right);
        this.color = color;
        this.left = left;
        this.right = right;
    }
}

export class LLRB<T> extends BST<T> {
    protected override root: Nullable<LLRBNode<T>> = null;

    constructor(compare: Comparator<T>) {
        super(compare);
    }

    override insert(key: T): void {
        this.root = this._insert(this.root, key);
        if (this.root) this.root.color = LLRBColor.BLACK;
    }

    protected override _insert(node: LLRBNode<T> | null, key: T): LLRBNode<T> {
        if (!node) {
            return new LLRBNode(key);
        }

        const cmp = this.comparator(key, node.key);
        if (cmp < 0) {
            node.left = this._insert(node.left as LLRBNode<T>, key);
        } else if (cmp > 0) {
            node.right = this._insert(node.right as LLRBNode<T>, key);
        } else {
            node.key = key;
        }

        if (this.isRed(node.right) && !this.isRed(node.left)) {
            node = this.rotateLeft(node);
        }
        if (this.isRed(node.left) && this.isRed(node.left?.left as LLRBNode<T>)) {
            node = this.rotateRight(node);
        }
        if (this.isRed(node.left) && this.isRed(node.right)) {
            this.flipLLRBColors(node);
        }

        return node;
    }

    protected isRed(node: LLRBNode<T> | null): boolean {
        return node?.color === LLRBColor.RED;
    }

    protected rotateLeft(h: LLRBNode<T>): LLRBNode<T> {
        const x = h.right as LLRBNode<T>;
        h.right = x.left;
        x.left = h;
        x.color = h.color;
        h.color = LLRBColor.RED;
        return x;
    }

    protected rotateRight(h: LLRBNode<T>): LLRBNode<T> {
        const x = h.left as LLRBNode<T>;
        h.left = x.right;
        x.right = h;
        x.color = h.color;
        h.color = LLRBColor.RED;
        return x;
    }

    protected flipLLRBColors(h: LLRBNode<T>): void {
        h.color = LLRBColor.RED;
        if (h.left) {
            h.left.color = LLRBColor.BLACK;
        }
        if (h.right) {
            h.right.color = LLRBColor.BLACK;
        }
    }

    override contains(key: T): boolean {
        return super.contains(key);
    }

    protected override _remove(h: Nullable<LLRBNode<T>>, key: T): Nullable<LLRBNode<T>> {
        if (!h) return null;

        if (this.comparator(key, h.key) < 0) {
            if (h.left) {
                if (!this.isRed(h.left) && !this.isRed((h.left as LLRBNode<T>).left)) {
                    h = this.moveRedLeft(h);
                }
                h.left = this._remove(h.left as LLRBNode<T>, key);
            }
        } else {
            if (this.isRed(h.left)) {
                h = this.rotateRight(h);
            }
            if (this.comparator(key, h.key) === 0 && !h.right) {
                return null;
            }
            if (h.right) {
                if (!this.isRed(h.right) && !this.isRed((h.right as LLRBNode<T>).left)) {
                    h = this.moveRedRight(h);
                }
                if (this.comparator(key, h.key) === 0) {
                    const min = this._min(h.right as LLRBNode<T>);
                    h.key = min.key;
                    h.right = this._deleteMin(h.right as LLRBNode<T>);
                } else {
                    h.right = this._remove(h.right as LLRBNode<T>, key);
                }
            }
        }

        return this.fixUp(h);
    }

    protected moveRedLeft(h: LLRBNode<T>): LLRBNode<T> {
        this.flipLLRBColors(h);
        if (this.isRed((h.right as LLRBNode<T>)?.left)) {
            h.right = this.rotateRight(h.right as LLRBNode<T>);
            h = this.rotateLeft(h);
            this.flipLLRBColors(h);
        }
        return h;
    }

    protected moveRedRight(h: LLRBNode<T>): LLRBNode<T> {
        this.flipLLRBColors(h);
        if (this.isRed((h.left as LLRBNode<T>)?.left)) {
            h = this.rotateRight(h);
            this.flipLLRBColors(h);
        }
        return h;
    }

    protected fixUp(h: LLRBNode<T>): LLRBNode<T> {
        if (this.isRed(h.right)) {
            h = this.rotateLeft(h);
        }
        if (this.isRed(h.left) && this.isRed((h.left as LLRBNode<T>).left)) {
            h = this.rotateRight(h);
        }
        if (this.isRed(h.left) && this.isRed(h.right)) {
            this.flipLLRBColors(h);
        }
        return h;
    }

    protected override _deleteMin(h: Nullable<LLRBNode<T>>): Nullable<LLRBNode<T>> | null {
        if (!h) {
            return null;
        }
        if (!h.left) {
            return null;
        }
        if (!this.isRed(h.left) && !this.isRed((h.left as LLRBNode<T>).left)) {
            h = this.moveRedLeft(h);
        }
        h.left = this._deleteMin(h.left as LLRBNode<T>);
        return this.fixUp(h);
    }

    protected override _min(node: LLRBNode<T>): LLRBNode<T> {
        while (node.left) {
            node = node.left as LLRBNode<T>;
        }
        return node;
    }
}
