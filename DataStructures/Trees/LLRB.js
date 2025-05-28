"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLRB = exports.LLRBNode = void 0;
const BST_1 = require("./BST");
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLACK"] = 1] = "BLACK";
})(Color || (Color = {}));
class LLRBNode extends BST_1.BSTNode {
    color = Color.RED;
    left;
    right;
    constructor(key, color = Color.RED, left = null, right = null) {
        super(key, left, right);
        this.color = color;
        this.left = left;
        this.right = right;
    }
}
exports.LLRBNode = LLRBNode;
class LLRB extends BST_1.BST {
    root = null;
    constructor(compare) {
        super(compare);
    }
    insert(key) {
        this.root = this._insert(this.root, key);
        if (this.root)
            this.root.color = Color.BLACK;
    }
    _insert(node, key) {
        if (!node) {
            return new LLRBNode(key);
        }
        const cmp = this.comparator(key, node.key);
        if (cmp < 0) {
            node.left = this._insert(node.left, key);
        }
        else if (cmp > 0) {
            node.right = this._insert(node.right, key);
        }
        else {
            node.key = key;
        }
        if (this.isRed(node.right) && !this.isRed(node.left)) {
            node = this.rotateLeft(node);
        }
        if (this.isRed(node.left) && this.isRed(node.left?.left)) {
            node = this.rotateRight(node);
        }
        if (this.isRed(node.left) && this.isRed(node.right)) {
            this.flipColors(node);
        }
        return node;
    }
    isRed(node) {
        return node?.color === Color.RED;
    }
    rotateLeft(h) {
        const x = h.right;
        h.right = x.left;
        x.left = h;
        x.color = h.color;
        h.color = Color.RED;
        return x;
    }
    rotateRight(h) {
        const x = h.left;
        h.left = x.right;
        x.right = h;
        x.color = h.color;
        h.color = Color.RED;
        return x;
    }
    flipColors(h) {
        h.color = Color.RED;
        if (h.left) {
            h.left.color = Color.BLACK;
        }
        if (h.right) {
            h.right.color = Color.BLACK;
        }
    }
    contains(key) {
        return super.contains(key);
    }
    _remove(h, key) {
        if (!h)
            return null;
        if (this.comparator(key, h.key) < 0) {
            if (h.left) {
                if (!this.isRed(h.left) && !this.isRed(h.left.left)) {
                    h = this.moveRedLeft(h);
                }
                h.left = this._remove(h.left, key);
            }
        }
        else {
            if (this.isRed(h.left)) {
                h = this.rotateRight(h);
            }
            if (this.comparator(key, h.key) === 0 && !h.right) {
                return null;
            }
            if (h.right) {
                if (!this.isRed(h.right) && !this.isRed(h.right.left)) {
                    h = this.moveRedRight(h);
                }
                if (this.comparator(key, h.key) === 0) {
                    const min = this._min(h.right);
                    h.key = min.key;
                    h.right = this._deleteMin(h.right);
                }
                else {
                    h.right = this._remove(h.right, key);
                }
            }
        }
        return this.fixUp(h);
    }
    moveRedLeft(h) {
        this.flipColors(h);
        if (this.isRed(h.right?.left)) {
            h.right = this.rotateRight(h.right);
            h = this.rotateLeft(h);
            this.flipColors(h);
        }
        return h;
    }
    moveRedRight(h) {
        this.flipColors(h);
        if (this.isRed(h.left?.left)) {
            h = this.rotateRight(h);
            this.flipColors(h);
        }
        return h;
    }
    fixUp(h) {
        if (this.isRed(h.right)) {
            h = this.rotateLeft(h);
        }
        if (this.isRed(h.left) && this.isRed(h.left.left)) {
            h = this.rotateRight(h);
        }
        if (this.isRed(h.left) && this.isRed(h.right)) {
            this.flipColors(h);
        }
        return h;
    }
    _deleteMin(h) {
        if (!h) {
            return null;
        }
        if (!h.left) {
            return null;
        }
        if (!this.isRed(h.left) && !this.isRed(h.left.left)) {
            h = this.moveRedLeft(h);
        }
        h.left = this._deleteMin(h.left);
        return this.fixUp(h);
    }
    _min(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }
}
exports.LLRB = LLRB;
