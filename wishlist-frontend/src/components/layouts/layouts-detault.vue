<template>
  <div class="layout">
    <the-header />
  
    <div class="main">
      <router-view />
    </div>    
    
    <the-footer/>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.main {
  background-color: rgb(79 70 229);
  flex-grow: 1;
}
</style>
