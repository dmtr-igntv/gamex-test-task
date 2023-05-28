<template>
  <div class="spinner"></div> 
</template>

<script>
export default defineComponent({
    name: 'fetch-loader',
});
</script>

<style scoped>

.spinner{
    width: 64px;
    height: 64px;
    border: 4px solid #8bc34a;
    border-top:2px solid rgb(208, 243, 216);
    border-left:2px solid #7cb342; 
    border-radius: 100%;
    box-shadow: inset rgba(0, 0, 0, 0.2) 2px 2px 8px; 
    box-shadow: rgba(0, 0, 0, 0.1) 2px 2px 8px;
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right: 0;
    margin: auto;
    animation: spin 500ms infinite linear;
}

@keyframes spin {
    from{
        transform: rotate(0deg);
    }to{
        transform: rotate(360deg);
    }
}

</style>
