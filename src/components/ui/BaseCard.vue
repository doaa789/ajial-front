<template>
    <div>
        <slot></slot>
    </div>
</template>
<style scoped>
div {
  direction: rtl;
  border-radius: 12px;
  box-shadow: 0 1px 6px rgba(37, 218, 118, 0.7);
  padding: 1rem;
  margin: 1rem auto;
  width:95%;
}
/*.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(37, 218, 117, 0.9);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 20rem;
}
.card:hover{
  border:8px solid rgba(37, 218,117, 0.6);
} */
</style>