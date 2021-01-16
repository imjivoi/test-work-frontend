
<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['chartData'],
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
    isUpdating: false,
  }),
  methods: {
    renderData() {
      this.renderChart(this.chartData, this.options)
    },
  },
  mounted() {
    this.renderData()
  },
  watch: {
    chartData: {
      deep: true,
      handler() {
        if (!this.isUpdating && this.$data && this.$data._chart) {
          // Update the chart
          this.isUpdating = true
          this.$data._chart.update()
          this.$nextTick(() => (this.isUpdating = false))
        }
        // this.renderData()
      },
    },
  },
}
</script>

<style>
</style>