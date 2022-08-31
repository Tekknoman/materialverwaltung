import Vue from 'vue';
import Component from 'vue-class-component';
import StorageLocation from "@/models/StorageLocation";

@Component({
    name: 'LocationSelection'
})
export default class LocationSelection extends Vue {

    storageLoactions: Array<StorageLocation> = [
        new StorageLocation('1234', 'Storage Loaction 1', 'This is the first storage loaction'),
    ]
}
