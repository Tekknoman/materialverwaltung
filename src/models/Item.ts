import Attribute from "@/models/Attribute";
import AttributeType from "@/models/AttributeType";

export default class Item {
    public id?: string;
    public title: Attribute;
    public description: Attribute;
    public attributes: Attribute[];

    constructor(id: string, title: Attribute, description: Attribute, attributes: Attribute[]) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.attributes = attributes;
    }

    static empty(): Item {
        return new Item(
            '',
            {
                value: '',
                edit: false,
                label: 'Title',
                type: AttributeType.text
            },
            {
                value: '',
                edit: false,
                label: 'Description',
                type: AttributeType.text
            }, []);
    }
}