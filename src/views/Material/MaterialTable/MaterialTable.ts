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
    page = 1

    get filerIcon(): string{
        switch (this.filterState){
            case null: return 'mdi-filter-plus-outline'
            case undefined: return 'mdi-filter-plus-outline'
            case true: return 'mdi-filter-cog-outline'
            default: return 'mdi-filter'
        }
    }

    openItem(): void{
        console.log("Open Item")
        this.dialog = true;
    }
    dialog = false;
    callback(){
        console.log("Callback")
    }

}
