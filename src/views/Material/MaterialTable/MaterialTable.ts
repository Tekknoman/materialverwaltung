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

    isModified(currentItem: any): boolean {
        console.log("-------Layer 1-------");
        for (const key in currentItem) {
            if (currentItem[key]?.edit) return true;
            console.log(key);
            console.log("-------Layer 2-------");
            for (const key2 in currentItem[key]) {
                if (currentItem[key][key2]?.edit) return true;
                for (const attribute in currentItem[key][key2]) {
                    if (currentItem[key][key2][attribute]?.edit) return true;
                    console.log(attribute);
                    console.log("-------Layer 3-------");
                    for (const attribute2 in currentItem[key][key2][attribute]) {
                        if (currentItem[key][key2][attribute][attribute2]?.edit) return true;
                        console.log(attribute2);
                        console.log("-------Layer 4-------");
                        for (const attribute3 in currentItem[key][key2][attribute][attribute2]) {
                            if (currentItem[key][key2][attribute][attribute2][attribute3]?.edit) return true;
                            console.log(attribute3);
                            console.log("-------Layer 5-------");
                            for (const attribute4 in currentItem[key][key2][attribute][attribute2][attribute3]) {
                                if (currentItem[key][key2][attribute][attribute2][attribute3][attribute4]?.edit) return true;
                                console.log(attribute4);
                                console.log("-------Layer 6-------");
                                for (const attribute5 in currentItem[key][key2][attribute][attribute2][attribute3][attribute4]) {
                                    if (currentItem[key][key2][attribute][attribute2][attribute3][attribute4][attribute5]?.edit) return true;
                                    console.log(attribute5);
                                    console.log("-------Layer 7-------");
                                    for (const attribute6 in currentItem[key][key2][attribute][attribute2][attribute3][attribute4][attribute5]) {
                                        if (currentItem[key][key2][attribute][attribute2][attribute3][attribute4][attribute5][attribute6]?.edit) return true;
                                        console.log(attribute6);
                                        console.log("-------Layer 8-------");
                                        for (const attribute7 in currentItem[key][key2][attribute][attribute2][attribute3][attribute4][attribute5][attribute6]) {
                                            if (currentItem[key][key2][attribute][attribute2][attribute3][attribute4][attribute5][attribute6][attribute7]?.edit) return true;
                                            console.log(attribute7);
                                            console.log("-------Layer 9-------");
                                            for (const attribute8 in currentItem[key][key2][attribute][attribute2][attribute3][attribute4][attribute5][attribute6][attribute7]) {
                                                if (currentItem[key][key2][attribute][attribute2][attribute3][attribute4][attribute5][attribute6][attribute7][attribute8]?.edit) return true;
                                                console.log(attribute8);
                                                console.log("-------Layer 10-------");
                                                for (const attribute9 in currentItem[key][key2][attribute][attribute2][attribute3][attribute4][attribute5][attribute6][attribute7][attribute8]) {
                                                    if (currentItem[key][key2][attribute][attribute2][attribute3][attribute4][attribute5][attribute6][attribute7][attribute8][attribute9]?.edit) return true;
                                                    console.log(attribute9);
                                                    console.log("-------Layer 11-------");
                                                    for (const attribute10 in currentItem[key][key2][attribute][attribute2][attribute3][attribute4][attribute5][attribute6][attribute7][attribute8][attribute9]) {
                                                        if (currentItem[key][key2][attribute][attribute2][attribute3][attribute4][attribute5][attribute6][attribute7][attribute8][attribute9][attribute10]?.edit) return true;
                                                        console.log(attribute10);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return false;
    }

    cancel(): void {
        const currentItem: any = this.$store.getters.currentItem;
        if (!this.isModified(currentItem)) {
            this.$store.dispatch('clearCurrentItem').then();
            this.dialog = false;
        } else {
            this.prompt = true;
        }
    }
}
