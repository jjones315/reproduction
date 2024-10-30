<script lang="ts">
    import "./styles.css";

    let { children } = $props();
</script>

<div class="h-screen w-screen bg-background">
    {@render children()}
</div>
