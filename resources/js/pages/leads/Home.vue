<template>
    <div>
       <main class="flex-1 p-6">
                <div class="flex justify-between items-center mb-6">
                    <h1 class="text-3xl font-bold">Lead Dashboard</h1>
                    <button class="btn btn-primary">
                        <i class="fas fa-plus mr-2"></i> Add Lead
                    </button>
                </div>

                <!-- Stats Cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div class="stats bg-base-100 shadow">
                        <div class="stat">
                            <div class="stat-title">Total Leads</div>
                            <div class="stat-value text-primary">1,234</div>
                            <div class="stat-desc">↗︎ 12% from last month</div>
                        </div>
                    </div>

                    <div class="stats bg-base-100 shadow">
                        <div class="stat">
                            <div class="stat-title">New Leads</div>
                            <div class="stat-value text-secondary">56</div>
                            <div class="stat-desc">↗︎ 8% from last week</div>
                        </div>
                    </div>

                    <div class="stats bg-base-100 shadow">
                        <div class="stat">
                            <div class="stat-title">Converted</div>
                            <div class="stat-value text-accent">42</div>
                            <div class="stat-desc">↘︎ 3% from last week</div>
                        </div>
                    </div>

                    <div class="stats bg-base-100 shadow">
                        <div class="stat">
                            <div class="stat-title">Pending</div>
                            <div class="stat-value">98</div>
                            <div class="stat-desc">↗︎ 15% from last week</div>
                        </div>
                    </div>
                </div>

                <!-- Leads Table -->
                <div class="card bg-base-100 shadow">
                    <div class="card-body">
                        <div class="flex justify-between items-center mb-4">
                            <h2 class="card-title">Recent Leads</h2>
                            <div class="form-control">
                                <input type="text" placeholder="Search leads..." class="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>

                        <div class="overflow-x-auto">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Company</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="flex items-center space-x-3">
                                                <div class="avatar">
                                                    <div class="mask mask-squircle w-12 h-12">
                                                        <img src="https://daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="font-bold">John Smith</div>
                                                    <div class="text-sm opacity-50">Sales Lead</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Acme Corp</td>
                                        <td>john@example.com</td>
                                        <td>(555) 123-4567</td>
                                        <td>
                                            <span class="badge badge-success badge-sm">Converted</span>
                                        </td>
                                        <td>
                                            <button class="btn btn-ghost btn-xs">Details</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="flex items-center space-x-3">
                                                <div class="avatar">
                                                    <div class="mask mask-squircle w-12 h-12">
                                                        <img src="https://daisyui.com/tailwind-css-component-profile-3@56w.png" alt="Avatar" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="font-bold">Sarah Johnson</div>
                                                    <div class="text-sm opacity-50">Marketing</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Globex</td>
                                        <td>sarah@example.com</td>
                                        <td>(555) 987-6543</td>
                                        <td>
                                            <span class="badge badge-warning badge-sm">Pending</span>
                                        </td>
                                        <td>
                                            <button class="btn btn-ghost btn-xs">Details</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="flex items-center space-x-3">
                                                <div class="avatar">
                                                    <div class="mask mask-squircle w-12 h-12">
                                                        <img src="https://daisyui.com/tailwind-css-component-profile-4@56w.png" alt="Avatar" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="font-bold">Michael Brown</div>
                                                    <div class="text-sm opacity-50">IT Manager</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Initech</td>
                                        <td>michael@example.com</td>
                                        <td>(555) 456-7890</td>
                                        <td>
                                            <span class="badge badge-info badge-sm">Contacted</span>
                                        </td>
                                        <td>
                                            <button class="btn btn-ghost btn-xs">Details</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="flex items-center space-x-3">
                                                <div class="avatar">
                                                    <div class="mask mask-squircle w-12 h-12">
                                                        <img src="https://daisyui.com/tailwind-css-component-profile-5@56w.png" alt="Avatar" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="font-bold">Emily Davis</div>
                                                    <div class="text-sm opacity-50">Director</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Umbrella Corp</td>
                                        <td>emily@example.com</td>
                                        <td>(555) 789-0123</td>
                                        <td>
                                            <span class="badge badge-error badge-sm">Lost</span>
                                        </td>
                                        <td>
                                            <button class="btn btn-ghost btn-xs">Details</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="flex justify-center mt-4">
                            <div class="join">
                                <button class="join-item btn">«</button>
                                <button class="join-item btn btn-active">1</button>
                                <button class="join-item btn">2</button>
                                <button class="join-item btn">3</button>
                                <button class="join-item btn">»</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
</template>

<script setup>
import Layout from '@/layouts/leads/Layout.vue';

defineOptions({layout: Layout});
</script>

<style lang="scss" scoped>

</style>
