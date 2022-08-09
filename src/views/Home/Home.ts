import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    name: 'Home'
})
export default class Home extends Vue {
    gradients = [
        ['#222'],
        ['#42b3f4'],
        ['red', 'orange', 'yellow'],
        ['purple', 'violet'],
        ['#00c6ff', '#F0F', '#FF0'],
        ['#f72047', '#ffd200', '#1feaea'],
    ]

    width = 2
    radius = 10
    padding = 8
    lineCap = 'round'
    gradient = this.gradients[5]
    value = [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]
    gradientDirection = 'top'
    fill = false
    type = 'trend'
    autoLineWidth = false

}
