<template>
    <button>
        <slot></slot>
    </button>
</template>
<style scoped>
button {
  margin-right: 3%;
  /*font: inherit;*/
  font-size: 22px;
  font-weight:900;
  border: 1px solid #25da75;
  background-color: #25da75;
  color: #7d52a0;
  cursor: pointer;
  padding:0.5rem 1.75rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #7d52a0;
  background-color: #7d52a0;
  color: #25da75;
  
}
</style>