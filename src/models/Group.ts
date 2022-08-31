import Tag from "@/models/Tag";
import StorageLocation from "@/models/StorageLocation";
import Member from "@/models/Member";
import {doc} from "firebase/firestore";
import {db} from "@/main";
import Item from "@/models/Item";

export default class Group {
    id?: string;
    name: string;
    description: string;
    locations: StorageLocation[];
    items: Item[];
    tags: Tag[];
    members: Member[];

    constructor(name: string, description: string, locations: StorageLocation[], items: Item[], tags: Tag[], members: Member[], id?: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.locations = locations;
        this.items = items;
        this.tags = tags;
        this.members = members;
    }

    static empty(): Group {
        return new Group(
            '',
            '',
            [],
            [],
            [],
            []
        );
    }

    toFirebase() {
        return {
            name: this.name,
            description: this.description,
            locations: this.locations.map(l => l.toFirebase()),
            items: this.items.map(i => i.toFirebase()),
            tags: this.tags.map(t => t.text),
            members: this.members.map(m => doc(db, 'users/', m.id))
        }
    }
}