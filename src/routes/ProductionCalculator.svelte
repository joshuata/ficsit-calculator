<script lang="ts">
  import { SvelteFlow, Controls, Background, type Node, type Edge } from '@xyflow/svelte';
  import { writable } from 'svelte/store';

  import '@xyflow/svelte/dist/style.css';
  import CaclulatorControls from './CaclulatorControls.svelte';

  const nodes = writable<Node[]>([]);
  const edges = writable<Edge[]>([]);
</script>

<div class="container">
  <div class="col-9" style:height="500px">
    <SvelteFlow {nodes} {edges} fitView>
      <Background bgColor="#886fff" />
      <Controls />
    </SvelteFlow>
  </div>
  <div class="col-3">
    <CaclulatorControls />
  </div>
</div>
