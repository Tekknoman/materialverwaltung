export default class StorageLocation {
    public id?: string;
    public name: string;
    public description?: string;
    public x?: number;
    public y?: number

    constructor(name: string, id?: string, description?: string, y?: number, x?: number,) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.x = x;
        this.y = y;
    }

    toFirebase(): { name: string, id?: string, description?: string, x?: number, y?: number } {
        return {
            name: this.name,
            id: this.id,
            description: this.description,
            x: this.x,
            y: this.y
        }
    }
}