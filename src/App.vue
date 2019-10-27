<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/"><strong>Images Hunk</strong></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item"><a class="nav-link" href="#">Collections</a></li>
          <li>
            <form class="my-2 m-auto my-lg-0">
              <input class="form-control m-auto mr-sm-2 search" type="search" placeholder="Search" aria-label="Search">
            </form>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item"><router-link class="nav-link" to="#">Login</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="#">Singup</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="#">Cart</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="#">My Account</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
  /*  */
</style>
