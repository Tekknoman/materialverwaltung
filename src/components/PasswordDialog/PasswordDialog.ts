import Vue from 'vue';
import Component from 'vue-class-component';
import {Prop} from "vue-property-decorator";

@Component({
    name: 'PasswordDialog'
})
export default class PasswordDialog extends Vue {
    @Prop() public dialog: boolean | null | undefined;
    @Prop() public loading: boolean | null | undefined;
    @Prop() public callback: {function(old: string): void} | null | undefined;
    private old = '';


}
