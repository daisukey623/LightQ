<script>
import { Bar } from 'vue-chartjs';
import { mapGetters } from 'vuex';
import { db, auth } from '/src/main.js';

export default {
  extends: Bar,
  data() {
    return {
      chartdata: {
        labels: ['採用計画', '母集団形成', '選考', '内定者フォロー'],
        datasets: [
          {
            label: '前回',
            backgroundColor: '#2D74D2',
            data: [],
          },
          {
            label: '最新',
            backgroundColor: '#1A7DF0',
            data: [],
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
  async mounted() {
    await db
      .collection('scores')
      .where('user_id', '==', auth.currentUser.uid)
      .onSnapshot((querySnapshot) => {
        const Doc = [];
        querySnapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            user_id: doc.data().user_id,
            createdAt: doc.data().createdAt,
            follow_score: doc.data().follow_score,
            plan_score: doc.data().plan_score,
            population_score: doc.data().population_score,
            selection_score: doc.data().selection_score,
          };    
          Doc.push(data);
        }, Doc);

         const DocSort = Doc.sort((a,b) => b.createdAt - a.createdAt);

        const obj = {
          labels: ['採用計画', '母集団形成', '選考', '内定者フォロー'],
          datasets: [
            {
              label: '前回',
              backgroundColor: '#7B7B7B',
              data: [DocSort[0].plan_score, DocSort[0].population_score,DocSort[0].selection_score, DocSort[0].follow_score],
            },
            {
              label: '最新',
              backgroundColor: '#1D6ECF',
              data: [DocSort[1].plan_score, DocSort[1].population_score,DocSort[1].selection_score, DocSort[1].follow_score],
            },
          ],
        };

        this.renderChart(obj, this.options);
      });
  },

  computed: {
    ...mapGetters(['LoginUser']),
  },

};
</script>
<style scoped></style>
