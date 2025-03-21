export class BTNode<T> {
    public val: T;
    public left: BTNode<T> | null;
    public right: BTNode<T> | null;

    constructor(val: T, left?: BTNode<T> | null, right?: BTNode<T> | null) {
        this.val = val;
        this.left = left ?? null;
        this.right = right ?? null;
    }
}

export class BinarySearchTree<T> {
    protected root: BTNode<T> | null;

    constructor(...args: T[]) {
        for (let i: number = 0; i < args.length; i++) this.insert(args[i]);
    }

    insert(val: T): T {
        if (this.root == null) this.root = new BTNode(val, null, null);
        const insert_helper: (node: BTNode<T>, val: T) => void = (node: BTNode<T>, val: T): void => {
            const leftNull: boolean = node!.left?.val == null || node.left?.val == undefined;
            const rightNull: boolean = node!.right?.val == null || node.right?.val == undefined;

            if (val < node.val) {
                if (leftNull) node.left = new BTNode(val, null, null);
                else insert_helper(node.left!, val);
            } else {
                if (rightNull) node.right = new BTNode(val, null, null);
                else insert_helper(node.right!, val);
            }
        };

        insert_helper(this.root!, val);

        return val;
    }

    includes(val: T | null): boolean {
        return this.find(val) != null;
    }

    find(val: T | null): BTNode<T> | null {
        if (val == null) return null;
        const find_helper: (node: BTNode<T> | null, val: T) => BTNode<T> | null = (
            node: BTNode<T> | null,
            val: T,
        ): BTNode<T> | null => {
            if (node == null) return null;
            if (node.val == val) return node;
            if (val < node.val) return find_helper(node.left, val);
            else return find_helper(node.right, val);
        };

        return find_helper(this.root, val);
    }

    parent(val: T): T | null {
        const parent_helper: (node: BTNode<T> | null, val: T) => BTNode<T> | null = (
            node: BTNode<T> | null,
            val: T,
        ): BTNode<T> | null => {
            if (node == null) return null;
            if (node.left?.val == val || node.right?.val == val) return node;
            if (val < node.val) return parent_helper(node.left, val);
            else return parent_helper(node.right, val);
        };

        return parent_helper(this.root, val)?.val ?? null;
    }

    min(): T | null {
        if (this.root == null) return null;
        let current: BTNode<T> = this.root;
        while (current.left != null) current = current.left;
        return current.val;
    }

    max(): T | null {
        if (this.root == null) return null;
        let current: BTNode<T> = this.root;
        while (current.right != null) current = current.right;
        return current.val;
    }

    subtree(val: T): BinarySearchTree<T> | null {
        const tree: BinarySearchTree<T> = new BinarySearchTree<T>();
        const node: BTNode<T> | null = this.find(val);
        if (node == null) return null;

        const subtree_helper: (node: BTNode<T> | null) => void = (node: BTNode<T> | null): void => {
            if (node == null) return;
            tree.insert(node.val);
            subtree_helper(node.left);
            subtree_helper(node.right);
        };

        subtree_helper(node);

        return tree;
    }

    children(val: T): [T | null, T | null] {
        const node: BTNode<T> | null = this.find(val);

        return [node?.left?.val ?? null, node?.right?.val ?? null];
    }

    height(val?: T): number {
        return !this.includes(val ?? null)
            ? -1
            : this.root == null
            ? 0
            : 1 +
              Math.max(
                  this.height(this.find(val ?? null)!.left!.val),
                  this.height(this.find(val ?? null)!.right!.val),
              );
    }

    del(val: T): T | null {
        return this.weightedDel(val);
    }

    weightedDel(val: T): T | null {
        const parentVal: T | null = this.parent(val);
        if (parentVal == null) return null;
        const parent: BTNode<T> = this.find(parentVal)!;

        const isLeft: boolean = parent.left?.val === val;
        const node: BTNode<T> = parent.left?.val === val ? parent.left : parent.right!;
        if (node.left == null && node.right == null) parent[isLeft ? "left" : "right"] = null;
        else if (node.left != null && node.right == null) parent[isLeft ? "left" : "right"] = node.left;
        else if (node.left == null && node.right != null) parent[isLeft ? "left" : "right"] = node.right;
        else
            return this.height(node.left!.val) > this.height(node.right!.val)
                ? this.maxDel(node.val)!
                : this.minDel(node.val)!;

        return val;
    }

    minDel(val: T): T | null {
        const parentVal: T | null = this.parent(val);
        if (parentVal == null) return null;
        const parent: BTNode<T> = this.find(parentVal)!;

        const isLeft: boolean = parent.left?.val === val;
        const node: BTNode<T> = parent.left?.val === val ? parent.left : parent.right!;

        if (node.left == null && node.right == null) parent[isLeft ? "left" : "right"] = null;
        else if (node.left != null && node.right == null) parent[isLeft ? "left" : "right"] = node.left;
        else if (node.left == null && node.right != null) parent[isLeft ? "left" : "right"] = node.right;
        else
            parent[isLeft ? "left" : "right"] = new BTNode<T>(
                this.minDel(this.subtree(node.left!.val)!.min()!)!,
                node.left!.val == val ? null : node.left!,
                node.right!,
            );

        return node.val;
    }

    maxDel(val: T): T | null {
        const parentVal: T | null = this.parent(val);
        if (parentVal == null) return null;
        const parent: BTNode<T> = this.find(parentVal)!;

        const isLeft: boolean = parent.left?.val === val;
        const node: BTNode<T> = parent.left?.val === val ? parent.left : parent.right!;

        if (node.left == null && node.right == null) parent[isLeft ? "left" : "right"] = null;
        else if (node.left != null && node.right == null) parent[isLeft ? "left" : "right"] = node.left;
        else if (node.left == null && node.right != null) parent[isLeft ? "left" : "right"] = node.right;
        else
            parent[isLeft ? "left" : "right"] = new BTNode<T>(
                this.maxDel(this.subtree(node.left!.val)!.max()!)!,
                node.left!,
                node.right!.val == val ? null : node.right!,
            );

        return node.val;
    }
}
