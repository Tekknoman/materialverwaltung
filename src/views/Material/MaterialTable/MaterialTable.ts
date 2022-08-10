import Vue from 'vue';
import Component from 'vue-class-component';


@Component({
    name: 'MaterialTable'
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
    }
}
