import Vue from 'vue';
import Component from 'vue-class-component';
import {Prop} from "vue-property-decorator";

@Component({
    name: 'ItemForm'
})
export default class ItemForm extends Vue {
    @Prop(Boolean) public dialog: boolean | null | undefined;
    @Prop(Boolean) public loading: boolean | null | undefined;
    @Prop(Function) public callback: ((old: string | undefined) => void) | undefined;
    item = {
        title: 'Test Item',
        description: 'This is a test item',
        attributes: [
            {
                label: 'Height',
                type: 'measurement',
                value: 32,
                unit: 'cm'
            },
            {
                label: 'Color',
                type: 'option',
                value: 1,
                options: ['red', 'blue', 'green']
            },
            {
                label: 'Price',
                type: 'currency',
                value: 15.55,
                currency: 'USD'
            },
            {
                label: 'Count',
                type: 'number',
                value: 3
            }]
    };
}
