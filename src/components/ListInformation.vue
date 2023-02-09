<template>
    <!-- <div>
        <el-form :label-position="labelPosition" label-width="120px" style="max-width: 800px" status-icon
            :rules="rules">
            <el-form-item :model="from" label="ชื่อสินค้า">
                <el-input v-model="from.name" required placeholder="Please input" />
            </el-form-item>
            <el-form-item :model="from" label="จำนวนสินค้า">
                <el-input v-model.number="from.number" required placeholder="Please input" />
            </el-form-item>
            <el-form-item :model="from" label="ราคาสินค้า">
                <el-input v-model.number="from.price" required placeholder="Please input" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Create</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
    </div> -->

    <!-- Options -->
    <div class="p-6">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-6">
            <div class="flex items-center justify-between pb-4">
                <div>
                    <!-- Dropdown menu -->
                    <Menu as="div" class="relative inline-block text-left">
                        <div>
                            <MenuButton
                                class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                                Options
                                <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                            </MenuButton>
                        </div>

                        <transition enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95">
                            <MenuItems
                                class="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div class="py-1 ">
                                    <MenuItem v-slot="{ active }">
                                    <a href="#"
                                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Account
                                        settings</a>
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                    <a href="#"
                                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Support</a>
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                    <a href="#"
                                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">License</a>
                                    </MenuItem>
                                    <form method="POST" action="#">
                                        <MenuItem v-slot="{ active }">
                                        <button type="submit"
                                            :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block w-full px-4 py-2 text-left text-sm']">Sign
                                            out</button>
                                        </MenuItem>
                                    </form>
                                </div>
                            </MenuItems>
                        </transition>
                    </Menu>
                </div>

                <!-- Search -->
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input type="text" id="table-search"
                        class="block p-2 pl-10  border  rounded-lg w-80 border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                        placeholder="Search for items">
                </div>
            </div>

            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-md sm:rounded-lg ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td class="px-6 py-4">
                            Sliver
                        </td>
                        <td class="px-6 py-4">
                            Laptop
                        </td>
                        <td class="px-6 py-4">
                            $2999
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Microsoft Surface Pro
                        </th>
                        <td class="px-6 py-4">
                            White
                        </td>
                        <td class="px-6 py-4">
                            Laptop PC
                        </td>
                        <td class="px-6 py-4">
                            $1999
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Magic Mouse 2
                        </th>
                        <td class="px-6 py-4">
                            Black
                        </td>
                        <td class="px-6 py-4">
                            Accessories
                        </td>
                        <td class="px-6 py-4">
                            $99
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>

    <table class="table">
        <thead>
            <tr>
                <th>Date</th>
                <th>New Cases</th>
                <th>Deaths</th>
                <th>Recovered</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for=" (item, index) in labels" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <!-- <td><img :src="item.request.imageUrl" style=" width: 38%;" /></td> -->
                <!-- <td>{{ item.request.imageUrl }}</td> -->

                <!-- <td>{{ newcases[index] }}</td> -->
            </tr>
        </tbody>
    </table>
</template>

<script>
// import '../assets/tailwind.css'
import axios from "axios";
// import Api from '../services/index'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
export default {
    components: {
        Menu, MenuButton, MenuItem, MenuItems, ChevronDownIcon
    },
    data() {
        return {
            labels: [],
            navigation: [
                { name: 'Dashboard', href: '/about', current: true },
                { name: 'Team', href: '#', current: false },
                { name: 'Projects', href: '#', current: false },
                { name: 'Calendar', href: '#', current: false }
            ],

        }
    },
    methods: {
        information() {
            let apiURL = "http://localhost:3000/products/";
            axios
                .get(apiURL)
                .then((res) => {
                    console.log(res.data, "datares");
                    this.labels = res.data.products;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    mounted() {
        this.information();
    }
}
</script>