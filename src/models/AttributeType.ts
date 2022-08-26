import Tag from "@/models/Tag";
import StorageLocation from "@/models/StorageLocation";

interface Measurement extends AttributeTypeClass {
    unit: string;
    value: number;
    // toFirebase(): { unit: string, value: number };
}

interface Option extends AttributeTypeClass {
    value: number;
    options: {
        label: string;
        value: number;
    }[]
    // toFirebase(): { value: number, options: { label: string, value: number }[] };
}

interface Currency extends AttributeTypeClass {
    value: number;
    currency: string;
    // toFirebase(): { value: number, currency: string };
}

interface DateTime extends AttributeTypeClass {
    value: Date;
    // toFirebase(): string;
}

interface Time extends AttributeTypeClass {
    value: Date;
    // toFirebase(): string;
}

interface Tags extends AttributeTypeClass{
    value: Tag[];
    // toFirebase(): [];
}

enum AttributeType {
    template,
    text,
    measurement,
    option,
    currency,
    number,
    checkbox,
    date,
    time,
    datetime,
    tag,
    tags,
    location
}

type value = number | string | undefined | null | boolean | Measurement | Currency | Option | Tag | Tag[] | StorageLocation | Time | DateTime | Date;

class AttributeTypeClass {
    public toFirebase(): any {
        return this.valueOf();
    }
    constructor(public value: value) { }
}


export default AttributeType;
export {Measurement, Option, Currency, DateTime, Time, Tags};