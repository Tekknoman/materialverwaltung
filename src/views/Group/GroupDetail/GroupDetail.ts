import Vue from 'vue';
import Component from 'vue-class-component';
import Group from "@/models/Group";

@Component({
    name: 'GroupDetail'
})
export default class GroupDetail extends Vue {
    get editGroup(): Group {
        return this.$store.getters.editGroup;
    }

    set editGroup(group: Group) {
        this.$store.commit('SET_EDIT_GROUP', group);
    }

    mounted() {
        if (this.$route.params.groupId === "new") {
            this.$store.commit('SET_EDIT_GROUP', Group.empty());
        } else if (this.$route.params.groupId) {
            this.$store.dispatch('fetchCurrentGroup', this.$route.params.groupId);
        }
    }

    createGroup(): void {
        this.$store.dispatch('createGroup').then((stat) => {
            console.log('Stat: ', stat);
            stat ? this.$router.push({name: 'GroupOverview'}).then() : null;
        }).catch()
    }
}
