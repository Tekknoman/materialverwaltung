import Tag from "@/models/Tag";
import StorageLocation from "@/models/StorageLocation";
import Member from "@/models/Member";

export default class Group {
    id: string;
    name: string;
    description: string;
    locations: StorageLocation[];
    tags: Tag[];
    members: Member[];

    constructor(id: string, name: string, description: string, locations: StorageLocation[], tags: Tag[], members: Member[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.locations = locations;
        this.tags = tags;
        this.members = members;
    }
}