<script>
import { Bar } from 'vue-chartjs';
import { mapGetters } from 'vuex';

export default {
  extends: Bar,
  props: ['message'],
  data() {
    return {
      chartdata: {
        labels: ['採用計画', '母集団形成', '選考', '内定者フォロー'],
        datasets: [
          {
            label: '前回',
            backgroundColor: '#CFD8DC',
            data: [this.scores[1].population_score, 40, 30, 80],
          },
          {
            label: '最新',
            backgroundColor: '#f87979',
            data: [10, 40, 30, 80],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100,
                stepSize: 10,
              },
            },
          ],
        },
      },
    };
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
    console.log(this.scores[1].population_score)
  },

  computed: {
    ...mapGetters(['scores']),
  },
  methods: {},
};
</script>
<style scoped></style>
