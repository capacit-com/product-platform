<script>
  import { Router, Link, Route } from "svelte-routing";
  import MainPage from "./components/MainPage.svelte";
  import LoginPage from "./components/LoginPage.svelte";

  export let url = "/";
</script>

<Router {url}>
  <Route path="/login" component={LoginPage} />
  <Route path="/" component={MainPage} />
</Router>
