import Vue from 'vue';
import Component from 'vue-class-component';
import Group from "@/models/Group";

@Component({
    name: 'GroupOverview'
})
export default class GroupOverview extends Vue {
    get groups(): Group[] {
        return this.$store.getters.groups;
    }

    get currentGroup(): Group {
        return this.$store.getters.currentGroup;
    }

    set currentGroup(value: Group) {
        this.$store.dispatch('fetchCurrentGroup', value?.id).then();
    }
}
