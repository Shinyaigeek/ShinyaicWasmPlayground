<script>
  export let url;

  import init, * as wam from "./pkg/shinyaic_wasm";

  async function paint() {
    const run = async () => {
      await init("./pkg/shinyaic_wasm_bg.wasm");
      window.wam = wam;
    };

	await run();

    const html = await (async () => {
      if (url && url.length > 0) {
        const res = await fetch(`/api/fetch.ts?target=${url}`);
        const html = await res.text();
        return html;
      } else {
        return `<!doctype html>
    <html>
    <head>
    <style>
    h1 {
        font-size: 24px;
        padding:4px;
    }

    body {
        background: #ffffef;
    }

    #box {
        background: #fff;
        padding: 12px;
        margin: 36px auto;
    }

    </style>
    </head>
    <body>
        <div id="box">
        <h1>Hello, Shinyaic Browser!</h1>
        <p>
            shinyaic is a browser made by @Shinyaigeek
        </p>
        </div>
    </body>
    </html>`;
      }
    })();

    console.log(html);
	console.log(wam)

    wam.browser(html);
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
