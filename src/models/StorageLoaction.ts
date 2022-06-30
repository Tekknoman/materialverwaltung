export default class StorageLoaction {
    public id: string;
    public name: string;
    public description: string;
    public itemCount: number;
    public x: number;
    public y: number
    constructor(id: string, name: string, description: string, itemCount: number, y: number, x: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.itemCount = itemCount;
        this.x = x;
        this.y = y;
    }
}