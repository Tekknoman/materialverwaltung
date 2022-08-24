import Vue from 'vue';
import Component from 'vue-class-component';
import {Prop} from "vue-property-decorator";
import Item from "@/models/Item";
import Tag from "@/models/Tag";

@Component({
    name: 'ItemForm'
})

export default class ItemForm extends Vue {
    @Prop(Boolean) public loading: boolean | null | undefined;
    @Prop(Boolean) public prompt: boolean | null | undefined;
    @Prop(Function) public close: ((close?: boolean | undefined) => void) | undefined;
    @Prop(Function) public create: (() => void) | undefined;
    @Prop(Function) public closePrompt: (() => void) | undefined;
    @Prop(Boolean) public dialog: boolean | undefined;
    @Prop(Function) public update: ((item: Item) => void) | undefined;
    @Prop(String) public editing: string | undefined;

    searchInput = '';

    get creating(): boolean {
        return !this.$store.getters.currentItem || this.$store.getters.currentItem.id === undefined || this.$store.getters.currentItem.id === null || this.$store.getters.currentItem.id.length <= 0;
    }

    get item(): Item {
        return this.$store.getters.currentItem;
    }

    set item(value: Item) {
        this.$store.commit('setCurrentItem', value);
    }

    get tags(): { value: string, text: string }[] {
        return this.$store.getters.tags.map((t: Tag) => {
                return {
                    value: t.id,
                    text: t.text
                }
            }
        );
    }

    public addTag(tag: string): void {
        if (tag && tag.length > 0 && !this.tags.find(t => t.text.toLowerCase() === tag)){
            this.$store.dispatch('createTag', {text: tag.toLowerCase()} as Tag).then()
            this.searchInput = '';
        }
    }
}