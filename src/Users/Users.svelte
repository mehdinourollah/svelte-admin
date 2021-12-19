<script>
  import { Table } from "spaper";
  import { onMount } from "svelte";
  import { get_users } from "../utils";

  const get_users_data = async () => {
    const res = await get_users();
    return (await res.json()).data[0];
  };

  let promise = get_users_data();

  const data = [
    { rank: 1, name: "Novak Djokovic", country: "Serbia" },
    { rank: 2, name: "Daniil Medvedev", country: "Russia" },
    { rank: 3, name: "Stefanos Tsitsipas", country: "Greece" },
    { rank: 4, name: "Alexander Zverev", country: "Germany" },
  ];

</script>

{#await promise}
  <p>...loading</p>
{:then data}
  <Table {data} striped hoverable/>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
