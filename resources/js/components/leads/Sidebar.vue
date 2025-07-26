<template>
     <div class="drawer-side">
            <label for="my-drawer" class="drawer-overlay"></label>
            <div class="menu p-4 w-80 h-full bg-base-100 text-base-content">
                <div class="flex items-center mb-8">
                    <div class="avatar">
                        <div class="w-12 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div class="ml-3">
                        <p class="font-bold">Jane Doe</p>
                        <p class="text-sm">Sales Manager</p>
                    </div>
                </div>

                <ul>
                    <li>
                        <a class="active">
                            <i class="fas fa-tachometer-alt"></i>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a>
                            <i class="fas fa-users"></i>
                            Leads
                        </a>
                    </li>
                    <li>
                        <a>
                            <i class="fas fa-calendar"></i>
                            Activities
                        </a>
                    </li>
                    <li>
                        <a>
                            <i class="fas fa-chart-line"></i>
                            Reports
                        </a>
                    </li>
                    <li>
                        <a>
                            <i class="fas fa-cog"></i>
                            Settings
                        </a>
                    </li>
                </ul>

                <div class="mt-auto">
                    <ul>
                        <li>
                            <!-- <a class="text-error">
                                <i class="fas fa-sign-out-alt"></i>
                                Logout
                            </a> -->
                    <Link class="text-error" method="post" :href="route('logout')" @click="handleLogout" as="button">
                    <i class="fas fa-sign-out-alt"></i>
                     Log out
                    </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
</script>

<style lang="scss" scoped>

</style>
