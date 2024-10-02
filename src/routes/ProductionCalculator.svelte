<script lang="ts">
    import {
        SvelteFlow,
        Controls,
        Background,
        BackgroundVariant,
        MiniMap
    } from '@xyflow/svelte';
    import { writable } from 'svelte/store';

    import '@xyflow/svelte/dist/style.css';

    const nodes = writable([]);
    const edges = writable([]);

    

</script>

<SvelteFlow
    {nodes}
    {edges}
    fitView
>
    <Controls />
    <Background />

</SvelteFlow>