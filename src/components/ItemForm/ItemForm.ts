import Vue from 'vue';
import Component from 'vue-class-component';
import {Prop} from "vue-property-decorator";

@Component({
    name: 'ItemForm'
})
export default class ItemForm extends Vue {
    @Prop(Boolean) public dialog: boolean | null | undefined;
    @Prop(Boolean) public loading: boolean | null | undefined;
    @Prop(Function) public callback: ((item: any | undefined) => void) | undefined;
    @Prop(Function) public update: ((item: any | undefined) => void) | undefined;
    @Prop(String) public editing: string | undefined;

    item = {
        title: {
            value: 'Test Item',
            edit: false
        },
        description: {
            value: 'This is a test item',
            edit: false
        },
        attributes: [
            {
                label: 'Height',
                type: 'measurement',
                value: 32,
                unit: 'cm',
                edit: false
            },
            {
                label: 'Color',
                type: 'option',
                value: 1,
                options: ['red', 'blue', 'green'],
                edit: false
            },
            {
                label: 'Price',
                type: 'currency',
                value: 15.55,
                currency: 'USD',
                edit: false
            },
            {
                label: 'Count',
                type: 'number',
                value: 3,
                edit: false
            }]
    };
}
