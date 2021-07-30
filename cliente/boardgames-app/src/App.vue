<template>
  <div id="app">
    <div id="nav" class="text-center">
      <router-link to="/">Inico</router-link> |
      <router-link to="/agregar">Agregar</router-link> |
      <router-link to="/detalle/1">Detalle</router-link> | 
      <router-link to="/editar/1">editar</router-link>

    </div>
    <router-view/>
    <notifications position="bottom right" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
