export default class StorageLoaction {
    public id: string;
    public name: string;
    public description: string;
    public imgUrl: string;
    public itemCount: number;
    public x: number;
    public y: number
    constructor(id: string, name: string, description: string, imgUrl: string, itemCount: number, x: number, y: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imgUrl = imgUrl;
        this.itemCount = itemCount;
        this.x = x;
        this.y = y;
    }
}