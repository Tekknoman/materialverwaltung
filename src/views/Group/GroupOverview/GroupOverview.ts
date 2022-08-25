import Vue from 'vue';
import Component from 'vue-class-component';
import Group from "@/models/Group";

@Component({
    name: 'GroupOverview'
})
export default class GroupOverview extends Vue {
    groups: Group[] = [
        new Group('test1', 'Group 1', 'This is group 1', [], [], []),
        new Group('test2', 'Group 2', 'This is group 2', [], [], []),
        new Group('test3', 'Group 3', 'This is group 3', [], [], []),
    ];
    activeGroup: Group = this.groups[0];
}
