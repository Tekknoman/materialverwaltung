import Vue from 'vue';
import Component from 'vue-class-component';
import StorageLocation from "@/models/StorageLocation";

@Component({
    name: 'LocationSelection'
})
export default class LocationSelection extends Vue {

    storageLoactions: Array<StorageLocation> = [
        new StorageLocation('1234', 'Storage Loaction 1', 'This is the first storage loaction', 6, 40.730610, -73.935242),
        new StorageLocation('1235', 'Storage Loaction 2', 'This is the second storage loaction', 8, 55, 66),
        new StorageLocation('1236', 'Storage Loaction 3', 'This is the third storage loaction', 16, 34, 34)
    ]
}
