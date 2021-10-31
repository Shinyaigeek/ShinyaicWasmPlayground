<script>
  export let url;

  async function paint() {
    const wasm = await import(
      "/pkg/shinyaic_wasm.js"
    );

	const mod = await wasm.default();

	mod.greet()
  }
</script>

<main>
  <div>
    <input bind:value={url} />
    <button on:click={paint}>paint</button>
  </div>
  <canvas id="canvas" width="900" height="700" />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
  #canvas {
    border: 1px solid black;
    border-radius: 6px;
  }
</style>
