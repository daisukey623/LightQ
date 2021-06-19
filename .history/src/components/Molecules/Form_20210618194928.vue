<template>
<div class="field">

  <label class="label">相談したい採用領域</label>
  <div class="control">
  <label class="radio">
    <input type="radio" name="answer">
    採用計画
  </label>
  <label class="radio">
    <input type="radio" name="answer">
    母集団形成
  </label>
  <label class="radio">
    <input type="radio" name="answer">
    選考
  </label>
  <label class="radio">
    <input type="radio" name="answer">
    内定者フォロー
  </label>
</div>

  <label class="label">タイトル</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input" v-model="title">
  </div>


  <label class="label">相談内容</label>
  <div class="control">
<textarea class="textarea" placeholder="10 lines of textarea" rows="10"></textarea>

  <button class="button">送信</button>
  </div>

  <p>{{}}</p>

  
  

</div>
  
</template>


<script>
export default {
  data(){
    return{
      title:''
    }
  },
  
}
</script>

<style scoped>

</style>