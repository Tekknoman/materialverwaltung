import Vue from 'vue';
import Component from 'vue-class-component';
import StorageLoaction from "@/models/StorageLoaction";
import {Map, View} from "ol";
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";

@Component({
    name: 'Material'
})
export default class Material extends Vue {

    mounted(): void {
        this.storageLoactions.forEach(storageLoaction => {
            const el = this.$refs[storageLoaction.id] as Array<HTMLElement>;
            const map = new Map({
                layers: [
                    new TileLayer({source: new OSM()})
                ],
                view: new View({
                    center: [storageLoaction.x, storageLoaction.y],
                    zoom: 17,
                    projection: 'EPSG:4326'
                }),
            });
            map.setTarget(el[0]);
        });
    }

    storageLoactions: Array<StorageLoaction> = [
        new StorageLoaction('1234', 'Storage Loaction 1', 'This is the first storage loaction', 6,40.730610, -73.935242),
        new StorageLoaction('1235', 'Storage Loaction 2', 'This is the second storage loaction', 8,55, 66),
        new StorageLoaction('1236', 'Storage Loaction 3', 'This is the third storage loaction', 16,34, 34)]
}
