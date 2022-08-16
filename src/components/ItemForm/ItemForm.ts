import Vue from 'vue';
import Component from 'vue-class-component';
import {Prop} from "vue-property-decorator";
import Item from "@/models/Item";
import AttributeType from "@/models/AttributeType";

@Component({
    name: 'ItemForm'
})
export default class ItemForm extends Vue {
    @Prop(Boolean) public dialog: boolean | null | undefined;
    @Prop(Boolean) public loading: boolean | null | undefined;
    @Prop(Function) public callback: ((item: Item | undefined) => void) | undefined;
    @Prop(Function) public update: ((item: Item | undefined) => void) | undefined;
    @Prop(String) public editing: string | undefined;

    item: Item = {
        id: 'test1',
        title: {
            value: 'Test Item',
            edit: false,
            label: 'Title',
            type: AttributeType.text
        },
        description: {
            value: 'This is a test item',
            edit: false,
            label: 'Description',
            type: AttributeType.text
        },
        attributes: [
            {
                label: 'Height',
                type: AttributeType.measurement,
                value: {
                    unit: 'cm',
                    value: 180
                },
                edit: false
            },
            {
                label: 'Color',
                type: AttributeType.option,
                value: {
                    value: 1,
                    options: [{label: 'red', value: 0}, {label: 'blue', value: 1}, {label: 'green', value: 2}]
                },
                edit: false
            },
            {
                label: 'Price',
                type: AttributeType.currency,
                value: {
                    currency: 'USD',
                    value: 100,
                },
                edit: false
            },
            {
                label: 'Count',
                type: AttributeType.number,
                value: 3,
                edit: false
            }]
    };
}
