<template>
  <div>
    <nav class="navbar navbar-expand-lg positionFixed">
      <div class="container">
        <p class="title text-success">
          Names <span class="text-warning">Info.</span>
        </p>
        <button class="navbar-toggler text-white bg-white" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/skill">My Skill</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/dream">My Dream</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/blogs">Blogs</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped>
div {
  background-color: rgb(24, 3, 3);
}

.title {
  font-weight: bolder;
  font-size: 30px;
  letter-spacing: 0.3ex;
}

p {
  color: rgb(255, 255, 255);
}

a {
  color: rgb(255, 255, 255) !important;
  margin: 0 10px;
  padding: 10px 20px;
}

li a:hover {
  background-color: rgb(67, 70, 48);
  transition: 0.5s;
  border-radius: 4px;
  padding: 10px 20px;
}
</style>
