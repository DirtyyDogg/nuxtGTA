<template>
  <div class="button">
    <span>
      MEER UITLEG!
    </span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
// button
.button {
    background-color: #7c1617;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 15px;
    padding: 5px;
    height: 3rem;
    width: 11.5rem;
    transition: all 0.5s;
    cursor: pointer;
    margin: auto;
}
.button span{
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
  padding: 0px 0px 0px;
  font-weight: 800;
  margin-top: -13px !important;
  text-shadow: 1px 1px 10px black;
}

.button span:after {
  content: ' \02C3';
  font-size: 34px;
  position: relative;
  opacity: 0;
  top: 8px;
  right: 0px;
  transition: 0.5s;
  vertical-align: 1px;
  text-shadow: 0px 2px 2px black;
}
.button:hover span {padding-right: 28px; padding-top: 00px;}
.button:hover span:after {opacity: 1; right: 0;}
</style>
