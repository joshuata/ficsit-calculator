<script lang="ts">
  import { SvelteFlow, Controls, Background, type Node, type Edge } from '@xyflow/svelte';
  import { writable } from 'svelte/store';
  import ProductionBuildingNode from './ProductionBuildingNode.svelte'

  import '@xyflow/svelte/dist/style.css';


  import CaclulatorControls from './CaclulatorControls.svelte';

  const nodeTypes = {
    "production-building": ProductionBuildingNode
  };

  const nodes = writable<Node[]>([
    {
        id: "assembler-1",
        type: 'production-building',
        position: { x: 0, y: 0 },
        data: { buildingId: "Build_AssemblerMk1_C" },
    }
  ]);
  const edges = writable<Edge[]>([]);
</script>

<div class="container">
  <div class="col-9" style:height="66vh">
    <SvelteFlow {nodes} {edges} {nodeTypes} fitView>
      <Background />
      <Controls />
    </SvelteFlow>
  </div>
  <div class="col-3">
    <CaclulatorControls />
  </div>
</div>
