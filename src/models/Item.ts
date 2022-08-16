import Attribute from "@/models/Attribute";

export default class Item {
    public id: string;
    public title: Attribute;
    public description: Attribute;
    public attributes: Attribute[];

    constructor(id: string, title: Attribute, description: Attribute, attributes: Attribute[]) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.attributes = attributes;
    }
}