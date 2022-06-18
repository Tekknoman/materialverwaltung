import Vue from "vue";
import Component from "vue-class-component";

@Component({
    name: "Home"
})
export default class Home extends Vue {
    object = this.$store.state.objects[0]
    // mounted(){
    //     console.log(this.$store.state.objects)
    // }
}
