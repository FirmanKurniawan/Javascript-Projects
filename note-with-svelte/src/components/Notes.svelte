<script>
  import { db } from "../configs/firestore";
  import Note from "./Note.svelte";
  import { onMount } from "svelte";

  let notes = [];
  let done = false

  onMount(async () => {
    await db.collection("notes")
      .orderBy("title")
      .onSnapshot(data => {
        notes = data.docs;
        done = true
      });
  });
</script>

{#if notes.length === 0 && done == false}
  <p style="font-style=italic;">loading...</p>
{:else}
  {#each notes as note}
    <Note id={note.id} note={note.data()} />
  {/each}
{/if}
