<template>
  <section>
    <div class="project">
      <img src="~/assets/project2.jpg" alt="Avatar" class="image">
      <div class="overlay">
        <!-- size="4x" -->
        <a href="#" class="icon" title="User Profile">
          <fa-icon
            :icon="['fas', 'expand-alt']"
            size="2x"
          />
        </a>
      </div>
    </div>
    <ul>
      <li>
        <span id="text" class="text">Herdesign</span>
      </li>
      <li>
        <span id="text">Houtwerk</span>
      </li>
      <li>
        <span id="text">Muur</span>
      </li>
      <li>
        <span class="text">Timmerwerk</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
