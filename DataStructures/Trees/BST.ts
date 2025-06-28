import { Default } from "../../Utilities/Default";
import { Comparator, Nullable } from "../../Types";

export class BSTNode<T> {
    public key: T;
    public left: Nullable<BSTNode<T>>;
    public right: Nullable<BSTNode<T>>;

    constructor(key: T, left: Nullable<BSTNode<T>> = null, right: Nullable<BSTNode<T>> = null) {
        this.key = key;
        this.left = left;
        this.right = right;
    }
}

export class BST<T> {
    protected root: Nullable<BSTNode<T>> = null;
    protected comparator: Comparator<T>;

    constructor(comparator?: Comparator<T>) {
        this.comparator = comparator ?? Default.comparator;
    }

    public insert(key: T): void {
        this.root = this._insert(this.root, key);
    }

    protected _insert(node: Nullable<BSTNode<T>>, key: T): BSTNode<T> {
        if (!node) {
            return new BSTNode(key);
        }

        const cmp: number = this.comparator(key, node.key);
        if (cmp < 0) {
            node.left = this._insert(node.left, key);
        } else if (cmp > 0) {
            node.right = this._insert(node.right, key);
        }

        return node;
    }

    public contains(key: T): boolean {
        return this._contains(this.root, key);
    }

    protected _contains(node: Nullable<BSTNode<T>>, key: T): boolean {
        if (!node) {
            return false;
        }

        const cmp: number = this.comparator(key, node.key);
        if (cmp < 0) {
            return this._contains(node.left, key);
        } else if (cmp > 0) {
            return this._contains(node.right, key);
        }

        return true;
    }

    public remove(key: T): void {
        this.root = this._remove(this.root, key);
    }

    protected _remove(node: BSTNode<T> | null, key: T): BSTNode<T> | null {
        if (!node) {
            return null;
        }

        const cmp = this.comparator(key, node.key);
        if (cmp < 0) {
            node.left = this._remove(node.left, key);
        } else if (cmp > 0) {
            node.right = this._remove(node.right, key);
        } else {
            // Node with only one child or no child
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            const minNode = this._min(node.right);
            if (!minNode) throw new Error("Unexpected null successor");
            node.key = minNode.key;
            node.right = this._deleteMin(node.right);
        }

        return node;
    }

    protected _deleteMin(node: BSTNode<T> | null): BSTNode<T> | null {
        if (!node) {
            return null;
        }
        if (!node.left) {
            return node.right;
        }

        node.left = this._deleteMin(node.left);
        return node;
    }

    protected _min(node: BSTNode<T>): BSTNode<T> {
        while (node.left) {
            node = node.left;
        }
        return node;
    }
}
