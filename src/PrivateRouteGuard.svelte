<script>
  import { useNavigate, useLocation } from "svelte-navigator";
  import { token } from "./stores";

  const navigate = useNavigate();
  const location = useLocation();

  $: if (!$token) {
    navigate("/login", {
      state: { from: $location.pathname },
      replace: true,
    });
  }
</script>

{#if $user}
  <slot />
{/if}
