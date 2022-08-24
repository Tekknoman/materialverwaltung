import Attribute from "@/models/Attribute";
import AttributeType from "@/models/AttributeType";

export default class Item {
    public id?: string;
    public title: Attribute;
    public description: Attribute;
    public tags: Attribute;
    public attributes: Attribute[];

    constructor(id: string, title: Attribute, description: Attribute, tags: Attribute, attributes: Attribute[]) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.attributes = attributes;
        this.tags = tags;
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
            },
            {
                value: [],
                edit: false,
                label: 'Tags',
                type: AttributeType.tag
            },
            []
        );
    }

    isModified(): boolean {
        return this.title.edit || this.description.edit || this.attributes.some(a => a.edit);

    }
}