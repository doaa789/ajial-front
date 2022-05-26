<template>
    <dialog>
        <form>
            <slot name="form"></slot>
        </form>
        <slot></slot>
    </dialog>
</template>

<style scoped>
dialog{
  border: none;
  background: none;
  width: 80%;
  top: 7%;
}

form {
  direction: rtl;
  margin: 4% auto;
  min-width: 50%;
  min-height: 50%;
  border-radius: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1.5%;
  background: #fff;
}
</style>