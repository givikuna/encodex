type Nullable<T> = T | null;

export class Digraph<T> {
    private vertices: { [id: string]: T };
    private edges: { [id: string]: string[] };

    public constructor() {
        this.vertices = {};
        this.edges = {};
    }

    public addVertex(id: string, data: T, edges: string[] = []): void {
        this.vertices[id] = data;
        this.edges[id] = edges;
    }

    public addEdge(id1: string, id2: string): void {
        if (!this.edges[id1].includes(id2)) this.edges[id1].push(id2);
    }

    public removeVertex(id: string): void {
        delete this.vertices[id];
        delete this.edges[id];

        const edgeIDs: string[] = Object.keys(this.edges);
        for (let i: number = 0; i < edgeIDs.length; i++)
            this.edges[edgeIDs[i]].filter((x: string): boolean => x != id);
    }

    public removeEdge(id1: string, id2: string): void {
        if (!Object.keys(this.edges).includes(id1)) return;
        this.edges[id1].filter((s: string): boolean => id2 != s);
    }

    public vertexList(): { [id: string]: T } {
        const vertices: { [id: string]: T } = {};
        const vertexIDs: string[] = Object.keys(this.vertices);

        for (let i: number = 0; i < vertexIDs.length; i++) {
            vertices[vertexIDs[i]] = this.vertices[vertexIDs[i]];
        }

        return vertices;
    }

    public edgeList(): { [id: string]: string[] } {
        const edges: { [id: string]: string[] } = {};
        const edgeIDs: string[] = Object.keys(this.edges);

        for (let i: number = 0; i < edgeIDs.length; i++) {
            edges[edgeIDs[i]] = this.edges[edgeIDs[i]];
        }

        return edges;
    }

    public get(id: string): Nullable<T> {
        return this.vertices[id] ?? null;
    }

    public getEdges(id: string): string[] {
        return this.edges[id] ?? [];
    }

    public edgeCount(): number {
        let count: number = 0;
        const keys: ReadonlyArray<string> = Object.keys(this.edges);
        for (let i: number = 0; i < keys.length; i++) {
            count += this.edges[keys[i]].length;
        }
        return count;
    }
}
