<script>
  import "papercss/dist/paper.min.css";
  import {
    Router,
    Route,
    Link,
    createHistory,
    createMemorySource,
  } from "svelte-navigator";
  import Main from "./Main/Main.svelte";
  import Header from "./Layout/Header.svelte";
  import Footer from "./Layout/Footer.svelte";
  import Login from "./Login/Login.svelte";
  import NotFound from "./NotFound.svelte";
  import { token } from "./store";

  const html5History = createHistory(window);
  const memoryHistory = createHistory(createMemorySource());
  console.log("Hey");
</script>

<Router>
  <Route path="/">
    {#if $token}
      <Header />
      <Main />
      <Footer />
    {:else}
      <Login />
    {/if}
  </Route>

  <Route path="*">
    <NotFound />
  </Route>
</Router>

<style>
</style>
