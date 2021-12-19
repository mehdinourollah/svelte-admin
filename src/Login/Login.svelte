<script>
  import { Input, Button } from "spaper";
  import { token } from "../store";
  import { login } from "../utils";

  let username = "mehdi@laroza.dev",
    password = "password123";

  const signin = async () => {
    try {
      console.log({ username, password });
      let res = await login(username, password);
      res = await res.json();
      console.log({ res });
      if (res.hasOwnProperty("access_token")) {
        token.set(res.access_token);
        localStorage.setItem("token", res.access_token);
        // window.location.href = "/";
        // alert("logged in !");
      }
    } catch (e) {
      console.log({ e });
    }
  };
</script>

<div class="container">
  <div class="row bg-black flex gap-1">
    <img
      class="col-md-6 col-sm-12"
      src="https://sp.laroza.dev/static/larosa-787ef11f0527c0362ec5117f16090f7a.png"
      alt="logo"
      loading="lazy"
      style="border:0;width:10em;height:10em;"
    />
    <div class="form-group col-md-6 col-sm-12">
      <Input
        placeholder="username"
        bind:value={username}
        type="email"
        label="username:"
      />
      <Input
        placeholder="password"
        bind:value={password}
        type="password"
        label="password:"
      />
      <Button
        on:click={() => signin(username, password)}
        outline="secondary"
        style="float:left">Login</Button
      >
    </div>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    /* max-width: 400px; */
    margin: 5% auto;
  }
  button {
    float: left;
  }
</style>
