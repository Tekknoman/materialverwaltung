import Vue from 'vue';
import Component from 'vue-class-component';
import ItemForm from "@/components/ItemForm/ItemForm.vue";


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

    openItem(itemId
                 :
                 string
    ):
        void {
        this.currentItem = itemId;
        this.dialog = true;
    }

    //todo: edit/create callback


    update(item: any): void {
        console.log(item);
    }

    callback(item: any): void {
        this.dialog = false;
        console.log(item);
    }

}
