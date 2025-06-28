"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UndirectedGraph = void 0;
class UndirectedGraph {
    vertices;
    edges;
    constructor() {
        this.vertices = {};
        this.edges = {};
    }
    addVertex(id, data, edges = []) { }
}
exports.UndirectedGraph = UndirectedGraph;
