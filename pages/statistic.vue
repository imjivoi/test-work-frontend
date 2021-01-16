<template>
  <section class="statistic">
    <h1>Статистика</h1>
    <div class="statistic__block">
      <Chart :chartData="chartData" style="width: 100%" />
      <div class="statistic__btns">
        <Button text="Случайные данные" small @click.native="generateData" />
        <Button text="Добавить данные" small @click.native="setData" />
        <Button text="Удалить данные" small @click.native="deleteData" />
        <Button text="Увеличить кол-во данных" small @click.native="setXAxis" />
        <Button
          text="Уменьшить кол-во данных"
          small
          @click.native="deleteXAxis"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Button from '@/components/Button'
import Chart from '@/components/Chart'
export default {
  components: { Chart, Button },
  data: () => ({
    chartData: { labels: [], datasets: [] },
  }),
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    },
    getRandomColor() {
      return `#${((Math.random() * 0xffffff) << 0).toString(16)}`
    },
    setData() {
      //   this.chartData.labels.push(this.getRandomInt())
      this.chartData.datasets.push({
        label: 'Data One',
        backgroundColor: this.getRandomColor(),
        data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
      })
    },
    deleteData() {
      this.chartData.datasets.pop()
    },
    setXAxis() {
      this.chartData.labels.push(this.chartData.labels.length + 1)
    },
    deleteXAxis() {
      this.chartData.labels.pop()
    },
    generateData() {
      this.chartData = {
        labels: [1, 2, 3],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: this.getRandomColor(),
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
            ],
          },
          {
            label: 'Data One',
            backgroundColor: this.getRandomColor(),
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
            ],
          },
        ],
      }
    },
  },
  mounted() {
    this.generateData()
  },
}
</script>

<style scoped lang='scss'>
.statistic {
  &__block {
    @include block;

    overflow-y: auto;
  }

  &__btns {
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 500px) {
      display: block;
      button {
        width: 100%;
      }
    }
    button {
      margin: 0 10px 5px 0;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>