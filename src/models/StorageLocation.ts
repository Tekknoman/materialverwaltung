import Item from "@/models/Item";

export default class StorageLocation {
    public id: string;
    public name: string;
    public description: string;
    public items: Item[];
    public x: number;
    public y: number

    constructor(id: string, name: string, description: string, items: Item[], y: number, x: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.items = items;
        this.x = x;
        this.y = y;
    }
}