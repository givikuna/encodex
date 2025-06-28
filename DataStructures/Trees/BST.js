"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BST = exports.BSTNode = void 0;
const Default_1 = require("../../Utilities/Default");
class BSTNode {
    key;
    left;
    right;
    constructor(key, left = null, right = null) {
        this.key = key;
        this.left = left;
        this.right = right;
    }
}
exports.BSTNode = BSTNode;
class BST {
    root = null;
    comparator;
    constructor(comparator) {
        this.comparator = comparator ?? Default_1.Default.comparator;
    }
    insert(key) {
        this.root = this._insert(this.root, key);
    }
    _insert(node, key) {
        if (!node) {
            return new BSTNode(key);
        }
        const cmp = this.comparator(key, node.key);
        if (cmp < 0) {
            node.left = this._insert(node.left, key);
        }
        else if (cmp > 0) {
            node.right = this._insert(node.right, key);
        }
        return node;
    }
    contains(key) {
        return this._contains(this.root, key);
    }
    _contains(node, key) {
        if (!node) {
            return false;
        }
        const cmp = this.comparator(key, node.key);
        if (cmp < 0) {
            return this._contains(node.left, key);
        }
        else if (cmp > 0) {
            return this._contains(node.right, key);
        }
        return true;
    }
    remove(key) {
        this.root = this._remove(this.root, key);
    }
    _remove(node, key) {
        if (!node) {
            return null;
        }
        const cmp = this.comparator(key, node.key);
        if (cmp < 0) {
            node.left = this._remove(node.left, key);
        }
        else if (cmp > 0) {
            node.right = this._remove(node.right, key);
        }
        else {
            // Node with only one child or no child
            if (!node.left)
                return node.right;
            if (!node.right)
                return node.left;
            const minNode = this._min(node.right);
            if (!minNode)
                throw new Error("Unexpected null successor");
            node.key = minNode.key;
            node.right = this._deleteMin(node.right);
        }
        return node;
    }
    _deleteMin(node) {
        if (!node) {
            return null;
        }
        if (!node.left) {
            return node.right;
        }
        node.left = this._deleteMin(node.left);
        return node;
    }
    _min(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }
}
exports.BST = BST;
