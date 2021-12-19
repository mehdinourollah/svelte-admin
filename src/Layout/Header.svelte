<script>
  import { Breadcrumb, Navbar, Button } from "spaper";
  import { token } from "../store";

  const signout = () => {
    token.set(null);
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const items = [
    {
      text: "/",
      href: "/",
    },
    // {
    //   text: "Spaper ",
    //   href: "#",
    // },
    // {
    //   text: "Documentation",
    //   href: "#/start",
    // },
    // {
    //   text: "Breadcrumb",
    //   href: "#/components/Breadcrumb",
    // },
  ];
</script>

<Navbar>
  <h3 slot="brand">
    <div class="brand">
      <img
        src="https://sp.laroza.dev/static/larosa-787ef11f0527c0362ec5117f16090f7a.png"
        alt="Larosa"
        style="width: 3em;height: 3em;border:0"
      />
      <a href="#" style="text-decoration: none;">Laroza</a>
    </div>
  </h3>
  <ul class="inline">
    <li><a href="users">Users</a></li>
    <li><a href="recipes">Recipes</a></li>
    <li>
      <Button on:click={signout}>Signout</Button>
    </li>
  </ul>
</Navbar>

<Breadcrumb {items} />

<style>
  .brand {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>
