import Vue from 'vue';
import Component from 'vue-class-component';
import ItemForm from "@/components/ItemForm/ItemForm.vue";
import Item from "@/models/Item";


@Component({
    name: 'MaterialTable',
    components: {
        ItemForm
    }
})
export default class MaterialTable extends Vue {
    filterState: boolean | undefined;
    page = 1;
    dialog = false;
    loading = false;
    prompt = false;

    created(): void {
        this.$store.dispatch('fetchItems').then(() => {
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

    async openItem(itemId: string): Promise<void> {
        if (!itemId || itemId.length <= 0) {
            await this.$store.dispatch('clearCurrentItem');
        } else {
            await this.$store.dispatch('fetchItem', itemId);
        }
        this.dialog = true;
    }


    update(): void {
        this.$store.dispatch('updateItem').then();
    }

    callback(): void {
        this.loading = true;

        // this.$store.dispatch('createItem').then();
        // this.dialog = false;
        this.loading = false;
    }

    cancel(discard?: boolean): void {
        const currentItem: Item = this.$store.getters.currentItem;
        if (!currentItem?.isModified() || discard) {
            this.$store.dispatch('clearCurrentItem').then();
            this.dialog = false;
            this.prompt = false;
        } else {
            this.prompt = true;
        }
    }
}
