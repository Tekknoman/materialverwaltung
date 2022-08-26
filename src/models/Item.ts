import Attribute from "@/models/Attribute";
import AttributeType, {Tags} from "@/models/AttributeType";
import {doc} from "firebase/firestore";
import {db} from "@/main";
import Tag from "@/models/Tag";
import StorageLocation from "@/models/StorageLocation";

export default class Item {
    public id?: string;
    public title: Attribute;
    public description: Attribute;
    public location: Attribute;
    public tags: Attribute;
    public attributes: Attribute[];

    constructor(id: string, title: Attribute, description: Attribute, location: Attribute, tags: Attribute, attributes: Attribute[]) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.location = location;
        this.attributes = attributes;
        this.tags = tags;
    }

    static empty(): Item {
        return new Item(
            '',
            new Attribute(AttributeType.text, '', false, 'Title'),
            new Attribute(AttributeType.text, '', false, 'Description'),
            new Attribute(AttributeType.location, new StorageLocation(''), false, 'Location'),
            new Attribute(AttributeType.tags, {value: [{} as Tag]} as Tags, false, 'Tags'),
            []
        );
    }

    isModified(): boolean {
        return this.title.edit || this.description.edit || this.attributes.some(a => a.edit);

    }

    toFirebase(): any {
        return {
            title: this.title.value,
            description: this.description.value,
            location: this.location.toFirebase(),
            tags: this.tags.toFirebase(),
            attributes: this.attributes.map(a => a.toFirebase())
        }
    }
}