<template>
<div>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
     
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons" @click="logOut()">
          <a class="button is-light">
            ログアウト
          </a>
        </div>
      </div>
  </div>
</nav>
</div>
</template>

<script>
export default {

    methods: {
    logOut: async function() {
      await auth.signOut().then(this.$store.dispatch('resetStore'));
    },
};

</script>

<style scoped></style>
