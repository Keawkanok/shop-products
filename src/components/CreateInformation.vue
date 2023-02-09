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

    <!-- form -->
    <div class="mx-auto flex items-center justify-center bg-white p-5">
        <div class="border border-gray-300 py-5 rounded-md">
            <div class="mx-auto flex items-center justify-center bg-white p-5">
                <div class="mt-10 sm:mt-0">
                    <div class="md:grid md:grid-cols-3 md:gap-6">
                        <div class="md:col-span-1">
                            <div class="px-4 sm:px-0">
                                <h3 class="text-lg font-medium leading-6 text-gray-900">
                                    Product Information
                                </h3>
                                <p class="mt-1 text-sm text-gray-600">
                                    Used to add product information.
                                </p>
                            </div>
                        </div>

                        <div class="mt-5 md:col-span-2 md:mt-0">
                            <form action="#" method="POST">
                                <div class="overflow-hidden shadow sm:rounded-md">
                                    <div class="bg-white px-4 py-5 sm:p-6">
                                        <div class="grid grid-cols-6 gap-6">
                                            <div class="col-span-6 sm:col-span-3">
                                                <!-- <label for="first-name"
                                                    class="block text-sm font-medium text-gray-700">ชื่อสินค้า (Name
                                                    products)</label>
                                                <input type="text" name="first-name" id="first-name"
                                                    autocomplete="given-name"
                                                    class="mt-1 block pl-2 w-full rounded border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-1" /> -->
                                                <div class="flex justify-center">
                                                    <div class="mb-3 xl:w-96">
                                                        <label for="name"
                                                            class="form-label inline-block mb-2 text-gray-700">ชื่อสินค้า</label>
                                                        <input type="text" :model="from" v-model="from.name" required
                                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                            id="name" placeholder="Name Products" />
                                                    </div>
                                                </div>


                                            </div>


                                            <div class="col-span-6 sm:col-span-3">
                                                <!-- <label for="last-name"
                                                    class="block text-sm font-medium text-gray-700">ราคาสินค้า (Price
                                                    products)</label>
                                                <input type="text" name="last-name" id="last-name"
                                                    autocomplete="family-name"
                                                    class="mt-1 block pl-2 w-full rounded border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-1" /> -->
                                                <div class="flex justify-center">
                                                    <div class="mb-3 xl:w-96">
                                                        <label for="price"
                                                            class="form-label inline-block mb-2 text-gray-700">ราคาสินค้า</label>
                                                        <input type="text" :model="from" v-model.number="from.price"
                                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                            id="price" placeholder="Price Products" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-span-6 sm:col-span">
                                                <!-- Dropdown menu -->
                                                <Menu as="div" class="relative text-left">
                                                    <div>
                                                        <MenuButton
                                                            class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                                                            Options
                                                            <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5"
                                                                aria-hidden="true" />
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
                                                                <!-- <MenuItem v-slot="{ active }">
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
                                                                </form> -->
                                                            </div>
                                                        </MenuItems>
                                                    </transition>
                                                </Menu>
                                            </div>

                                            <!-- <div class="col-span-6 sm:col-span-4">
                                            <label for="email-address"
                                                class="block text-sm font-medium text-gray-700">Email address</label>
                                            <input type="text" name="email-address" id="email-address"
                                                autocomplete="email"
                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                        </div> -->

                                            <!-- <div class="col-span-6 sm:col-span-3">
                                            <label for="country"
                                                class="block text-sm font-medium text-gray-700">Country</label>
                                            <select id="country" name="country" autocomplete="country-name"
                                                class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>Mexico</option>
                                            </select>
                                        </div> -->
                                        </div>
                                        <div class="py-5">
                                            <label class="form-label inline-block mb-2 text-gray-700">Upload
                                                photo</label>
                                            <div
                                                class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                                <div class="space-y-1 text-center">
                                                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor"
                                                        fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                        <path
                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                    </svg>
                                                    <div class="flex text-sm text-gray-600 ">
                                                        <label for="file-upload"
                                                            class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                                            <span>Upload a file</span>
                                                            <input id="file-upload" name="file-upload" type="file"
                                                                class="sr-only" />
                                                        </label>
                                                        <p class="pl-1">or drag and drop</p>
                                                    </div>
                                                    <p class="text-xs text-gray-500">
                                                        PNG, JPG, GIF up to 10MB
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                        <button type="submit" @click.prevent="onSubmit"
                                            class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
export default {
    components: {
        Menu, MenuButton, MenuItem, MenuItems, ChevronDownIcon
    },
    data() {
        return {
            navigation: [
                { name: "Dashboard", href: "/about", current: true },
                { name: "Create information", href: "/create", current: false },
                { name: "Projects", href: "#", current: false },
                { name: "Calendar", href: "#", current: false },
            ],
            from: {
                name: "",
                number: "",
                price: "",
                // productImage: ''
            },
            callouts: [
                {
                    name: 'Desk and Office',
                    description: 'Work from home accessories',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
                    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                    href: '#',
                },
                {
                    name: 'Self-Improvement',
                    description: 'Journals and note-taking',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
                    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
                    href: '#',
                }

            ]
        };
    },
    methods: {
        onSubmit() {
            let apiURL = "http://localhost:3000/products/";
            axios
                .post(apiURL, this.from)
                .then(() => {
                    console.log("submit Post!");
                    // console.log(this.from)
                    this.from = {
                        name: "",
                        // number: "",
                        price: "",
                    };
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        test() { },
    },
    mounted() {
        // this.showApi();
    },
};
</script>
