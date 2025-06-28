export class UndirectedGraph<T> {
    private vertices: { [id: string]: T };
    private edges: { [id: string]: string };

    public constructor() {
        this.vertices = {};
        this.edges = {};
    }

    public addVertex(id: string, data: T, edges: string[] = []): void {}
}
