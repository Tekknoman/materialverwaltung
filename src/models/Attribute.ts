import {Measurement, Currency, Option, Time, DateTime, Tags} from './AttributeType';
import AttributeType from "@/models/AttributeType";
import StorageLocation from "@/models/StorageLocation";
import Tag from "@/models/Tag";

type value = number | string | undefined | null | boolean | Measurement | Currency | Option | Tags | Tag | StorageLocation | Time | DateTime;

export default class Attribute {
    public id?: string | undefined;
    public type: AttributeType;
    public value: value;
    public edit: boolean;
    public label: string;

    constructor(type: AttributeType, value: value, edit: boolean, label: string, id?: string) {
        this.id = id;
        this.type = type;
        this.value = value;
        this.edit = edit;
        this.label = label;
    }

    public toFirebase(): { type: number, value: value, edit: boolean, label: string, id?: string } {
        return {
            id: this.id,
            type: this.type.valueOf(),
            value: typeof this.value === 'object' && this.value ? this.value.toFirebase() : this.value,
            edit: this.edit,
            label: this.label
        }
    }
}