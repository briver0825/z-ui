<template>
  <div class="box-border py-4" style="min-width: 16rem">
    <ul>
      <li>
        <ul>
          <li class="z-menu-item-title">General</li>
          <li class="z-menu-item">Icon <span>图标</span></li>
          <li class="z-menu-item active">Button <span>按钮</span></li>
          <li class="z-menu-item">Icon <span>图标</span></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style>
.z-menu-item {
  @apply text-gray-600 px-14 py-3 mx-4 cursor-pointer hover:text-blue-400;
}
.z-menu-item:hover .z-menu-item * {
  @apply text-blue-400;
}
.z-menu-item span {
  @apply text-xs text-gray-500;
}
.z-menu-item-title {
  @apply text-xs text-gray-400 mx-8 py-4;
}
.active {
  @apply bg-blue-50 text-blue-400 rounded;
}
</style>
