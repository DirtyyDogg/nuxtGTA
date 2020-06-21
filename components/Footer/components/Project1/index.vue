<template>
  <section>
    <div class="project">
      <a href="/projecten" class="iconn">
        <img src="~/assets/project1.jpeg" alt="Avatar" class="image">
        <div class="overlay">
          <!-- size="4x" -->
          <a href="/projecten" class="icon" title="User Profile">
            <fa
              :icon="['fas', 'expand-alt']"
              size="2x"
            />
          </a>
        </div>
      </a>
    </div>
    <ul>
      <li>
        <nuxt-link to="/projecten">
          <span id="text" class="text">Keuken</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/projecten">
          <span id="text">Onderhoud</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/projecten">
          <span id="text">Reparatiee</span>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
a, a:hover {
  color: black;
  text-decoration: none;
}
.col-lg-3 {
  max-width: 31%;
}

path {
    fill: #d2d2c8;
    text-shadow: 29px 8px 12px black !important;
}
span#text:after {
    content: ' | ';
}
.project {
  position: relative;
  width: 100%;
  max-width: 400px;
}
.image {
  display: block;
  width: 100%;
  height: auto;
}
.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ff000082;
  opacity: 0;
  transition: .3s ease;
}
.project:hover .overlay {
  opacity: 1;
}
.icon {
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50% -50%);
  text-align: center;
}
ul {
    padding: 0;
    margin: auto;
}
li {
    list-style: none;
}
</style>
