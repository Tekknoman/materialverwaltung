import Vue from 'vue';
import Component from 'vue-class-component';
import StorageLoaction from "@/models/StorageLoaction";
import {Map, View} from "ol";
import TileLayer from "ol/layer/Tile";
import {OSM, XYZ} from "ol/source";
import {setUserProjection} from "ol/proj";

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
                    zoom: 4
                })
            });
            map.setTarget(el[0]);
        });
    }

    storageLoactions: Array<StorageLoaction> = [
        new StorageLoaction('1234', 'Storage Loaction 1', 'This is the first storage loaction', 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png', 6, 32, 110),
        new StorageLoaction('1235', 'Storage Loaction 2', 'This is the second storage loaction', 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png', 8, 55, 66),
        new StorageLoaction('1236', 'Storage Loaction 3', 'This is the third storage loaction', 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png', 16, 34, 34)]
}
