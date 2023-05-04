<script>
  export let viewBox = "0 0 24 24";
  export let pathData = "";
</script>

<template>
  <svg fill="currentColor" {viewBox}>
    <path d={pathData} fill-rule="evenodd" clip-rule="evenodd" />
  </svg>
</template>
