<script setup lang="ts">
import { useMainStore } from "~/store";
import useAxios from "~/plugins/axios";

const store = useMainStore();
const noTransition = ref<boolean>(true);
const { data, error, loading, fetchData } = useAxios();

watchEffect(() => {
  if (!store.activeMenu) {
    setTimeout(() => {
      noTransition.value = false;
    });
  }
});

onMounted(async () => {
  await fetchData("https://jsonplaceholder.typicode.com/users");
});
</script> 

<style lang="scss" scoped>
.header {
  &__nav {
    margin-bottom: 200px;
    &-logo {
      font-family: var(--inter900);
      font-size: 48px;
      font-weight: 900;
      line-height: 48px;
      letter-spacing: 0em;
      text-align: left;
      color: white;
    }
  }
  &__icon {
    cursor: pointer;
    background: linear-gradient(
        315deg,
        rgba(51, 123, 190, 0.2) 0%,
        rgba(0, 0, 0, 0) 100%,
        rgba(51, 123, 190, 0) 100%
      ),
      linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.08),
        rgba(255, 255, 255, 0.08)
      );
    border-radius: 50%;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    &-block {
      display: inline-block;
      width: 28px;
      height: 2px;
      background-color: white;
      position: relative;
    }
    &-block::before {
      content: "";
      position: absolute;
      top: 6px;
      right: 0;
      width: 14px;
      height: 2px;
      background-color: white;
    }
  }
  &__navbar {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: black;
    z-index: 1000;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    transform: translate(-100vw);
    transition: all 0.7s ease;
    &-menu {
      &-link a {
        color: white;
        font-size: 30px;
        transition: 0.3s;
      }
      &-link a:hover {
        color: rgb(179, 120, 120);
      }
    }
  }
}
.translate-0 {
  transform: translate(0vw);
}
.no-transition {
  transition: none;
}
.icon-cross {
  width: 65px;
  height: 65px;
  position: absolute;
  cursor: pointer;
  background: white;
  right: 15%;
  top: 15%;
  border-radius: 50%;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 28px;
    height: 2px;
    background-color: black;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}
</style> 

<template>
  <header class="header">
    <nav class="navbar">
      <div class="container-fluid">
        <div
          class="header__nav w-100 d-flex justify-content-between align-items-center"
        >
          <a class="navbar-brand header__nav-logo" href="#">Uptify</a>
          <div class="header__icon" @click="store.menuToggle">
            <div class="header__icon-block"></div>
          </div>
        </div>
      </div>
      <div
        :class="[
          'header__navbar',
          { 'translate-0': store.activeMenu },
          { 'no-transition': noTransition },
        ]"
      >
        <div class="icon-cross" @click="store.menuToggle"></div>
        <ul
          class="header__navbar-menu w-100 h-100 d-flex justify-content-center align-items-center flex-column gap-2"
        >
          <li
            class="header__navbar-menu-link"
            v-for="link in data"
            :key="link.id"
          >
            <a href="#!">{{ link.username }}</a>
          </li>
        </ul>
      </div>
    </nav>
    <TitleComponent text="Be the first who Find Out Phone NUmber Change_" size="1728" />
  </header>
</template>