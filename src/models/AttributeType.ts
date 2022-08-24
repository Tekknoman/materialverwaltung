interface Measurement {
    unit: string;
    value: number;
}

interface Option {
    value: number;
    options: {
        label: string;
        value: number;
    }[]
}

interface Currency {
    value: number;
    currency: string;
}

interface Checkbox {
    value: boolean;
}

enum AttributeType {
    text,
    measurement,
    option,
    currency,
    number,
    checkbox,
    date,
    time,
    datetime,
    tag
}


export default AttributeType;
export {Measurement, Checkbox, Option, Currency};