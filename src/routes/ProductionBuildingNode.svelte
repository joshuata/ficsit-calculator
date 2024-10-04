<script lang="ts">
  import { Handle, Position, type NodeProps } from '@xyflow/svelte';
  import type { Writable } from 'svelte/store';
  import BuildingData from '$lib/data/buildings.json';

  type $$Props = NodeProps;

  export let data: {
	buildingId: Writable<string>,
  };

  const { buildingId } = data;
  const buildingData = BuildingData[buildingId];
  const name = buildingData.name;
  const icon = '/icons/buildings/Blender_256.png';

  $$restProps;
</script>

<div class="production-building">
  <Handle type="target" position={Position.Left} />
  <div>
    {name}
	<img src="{icon}" alt="{name}" height="64">
  </div>
  <Handle type="source" position={Position.Right} />
</div>

<style>
	:global(.svelte-flow__node-selectorNode) {
	  font-size: 12px;
	  background: #eee;
	  border: 1px solid #555;
	  border-radius: 5px;
	  text-align: center;
	}
  </style>