import Vue from 'vue';
import Component from 'vue-class-component';
import ItemForm from "@/components/ItemForm/ItemForm.vue";
import Item from "@/models/Item";
import {collection} from "firebase/firestore";
import {db} from "@/main";


@Component({
    name: 'MaterialTable',
    components: {
        ItemForm
    }
})
export default class MaterialTable extends Vue {
    filterState: boolean | undefined;
    page = 1;
    currentItem = '';
    dialog = false;

    created(): void {
        this.$store.dispatch('fetchItems').then(r => {
            console.log("current items in store: ", this.$store.state.items);
        })
    }

    get items(): Item[] {
        return this.$store.getters.items;
    }

    get filerIcon()
        :
        string {
        switch (this.filterState) {
            case null:
                return 'mdi-filter-plus-outline'
            case undefined:
                return 'mdi-filter-plus-outline'
            case true:
                return 'mdi-filter-cog-outline'
            default:
                return 'mdi-filter'
        }
    }

    openItem(itemId: string): void {
        this.currentItem = itemId;
        this.dialog = true;
    }

    //todo: edit/create callback


    update(item: Item): void {
        console.log(item);
        this.$store.state.items.push(item);
    }

    callback(item: Item): void {
        this.dialog = false;
        console.log(item);
    }

}
