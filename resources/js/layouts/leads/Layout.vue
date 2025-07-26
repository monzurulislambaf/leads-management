<template>
    <div class="drawer lg:drawer-open">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />

        <!-- Page content -->
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
          <Navbar />

            <!-- Main content -->
            <slot />
        </div>

        <!-- Sidebar -->
        <Sidebar />
    </div>
</template>

<script setup>
import Navbar from '@/components/leads/Navbar.vue';
import Sidebar from '@/components/leads/Sidebar.vue';

</script>

<style lang="scss" scoped>

</style>
