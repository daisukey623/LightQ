<script>
import { Bar } from 'vue-chartjs';
import { mapGetters,mapActions } from 'vuex';

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
            data: [10, 40, 30, 80],
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
  created() {
   this.getScores()
    // this.renderChart(this.chartdata, this.options);
  },

  computed: {
    ...mapGetters(['scores']),
  },
  methods: {
    ...mapActions(['getScores']),
  },
};
</script>
<style scoped></style>
