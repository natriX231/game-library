<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

Чтобы получить “стимовский” вид, нужно сделать два изменения: навбар на всю ширину окна и горизонтальный список игр.

1. Навигация на всю ширину
В App.vue поменяй разметку хедера:

text
<template>
  <div class="app-shell">
    <header class="app-header">
      <div id="app-header-inner">
        <div class="app-header__left">
          <span class="app-logo">Game Library</span>
        </div>

        <nav class="app-nav">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/catalog">Catalog</RouterLink>
          <RouterLink to="/library">Library</RouterLink>
          <RouterLink to="/wishlist">Wishlist</RouterLink>
        </nav>
      </div>
    </header>

    <main class="app-main">
      <RouterView />
    </main>
  </div>
</template>


<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  background-color: rgba(15, 23, 42, 0.95);
  border-bottom: 1px solid var(--border-subtle);
  backdrop-filter: blur(10px);
}

#app-header-inner {
  max-width: 150%;
  margin: 0 auto;
  padding: 0.75rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.app-logo {
  font-weight: 600;
  font-size: 1rem;
  color: #e5e7eb;
}

.app-nav {
  display: flex;
  gap: 1.5rem;
  font-size: 0.95rem;
}

.app-nav a {
  position: relative;
  padding: 0.25rem 0;
  color: #9ca3af;
  transition: color 0.15s ease;
}

.app-nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -0.25rem;
  width: 0;
  height: 2px;
  background-color: var(--accent);
  border-radius: 999px;
  transition: width 0.15s ease;
}

.app-nav a:hover {
  color: #e5e7eb;
}

.app-nav a.router-link-exact-active {
  color: #ffffff;
  font-weight: 500;
}

.app-nav a.router-link-exact-active::after {
  width: 100%;
}

.app-main {
  flex: 1;
  margin-top: 1rem;
}
</style>