"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Digraph = void 0;
class Digraph {
    vertices;
    edges;
    constructor() {
        this.vertices = {};
        this.edges = {};
    }
    addVertex(id, data, edges = []) {
        this.vertices[id] = data;
        this.edges[id] = edges;
    }
    addEdge(id1, id2) {
        if (!this.edges[id1].includes(id2))
            this.edges[id1].push(id2);
    }
    removeVertex(id) {
        delete this.vertices[id];
        delete this.edges[id];
        const edgeIDs = Object.keys(this.edges);
        for (let i = 0; i < edgeIDs.length; i++)
            this.edges[edgeIDs[i]].filter((x) => x != id);
    }
    removeEdge(id1, id2) {
        if (!Object.keys(this.edges).includes(id1))
            return;
        this.edges[id1].filter((s) => id2 != s);
    }
    vertexList() {
        const vertices = {};
        const vertexIDs = Object.keys(this.vertices);
        for (let i = 0; i < vertexIDs.length; i++) {
            vertices[vertexIDs[i]] = this.vertices[vertexIDs[i]];
        }
        return vertices;
    }
    edgeList() {
        const edges = {};
        const edgeIDs = Object.keys(this.edges);
        for (let i = 0; i < edgeIDs.length; i++) {
            edges[edgeIDs[i]] = this.edges[edgeIDs[i]];
        }
        return edges;
    }
    get(id) {
        return this.vertices[id] ?? null;
    }
    getEdges(id) {
        return this.edges[id] ?? [];
    }
    edgeCount() {
        let count = 0;
        const keys = Object.keys(this.edges);
        for (let i = 0; i < keys.length; i++) {
            count += this.edges[keys[i]].length;
        }
        return count;
    }
}
exports.Digraph = Digraph;
