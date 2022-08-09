import Vue from 'vue';
import Component from 'vue-class-component';
import {Prop} from "vue-property-decorator";

@Component({
    name: 'PasswordDialog'
})
export default class PasswordDialog extends Vue {
    @Prop(Boolean) public dialog: boolean | null | undefined;
    @Prop(Boolean) public loading: boolean | null | undefined;
    @Prop(Function) public callback: ((old: string | undefined) => void) | undefined;
    private old = '';


}
