<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/"><strong>Images Hunk</strong></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-picture-o" aria-hidden="true"></i> Collections</a></li>
          <li>
            <input class="form-control m-auto mr-sm-2 search" type="search" placeholder="Search" aria-label="Search">
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item"><router-link class="nav-link" to="#"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="#"><i class="fa fa-user-plus" aria-hidden="true"></i> Singup</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="#"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="#"><i class="fa fa-user" aria-hidden="true"></i> My Account</router-link></li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
    // name: navbar
}
</script>