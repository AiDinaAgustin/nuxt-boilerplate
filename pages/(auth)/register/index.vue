<script setup>
import Auth from "/layouts/auth.vue";
import {ref} from "vue";

useHead({
  title: 'Register',
})

const email = ref("");
const username = ref("");
const password = ref("");

const handleSubmit = () => {
  console.log("Form submitted", { email: email.value, username: username.value, password: password.value });
};
</script>

<template>
  <Auth>
    <h1>Register Page</h1>
    <form class="space-y-6" @submit.prevent="handleSubmit">
      <div>
        <Label for="email">Your email</Label>
        <Input
            v-model="email"
            type="email"
            name="email"
            id="email"
            placeholder="email"
            required
        />
      </div>
      <div>
        <Label for="username">Your username</Label>
        <Input
            v-model="username"
            type="text"
            name="username"
            id="username"
            placeholder="username"
            required
        />
      </div>
      <div>
        <Label for="password">Your password</Label>
        <Input
            v-model="password"
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            required
        />
      </div>
      <Button type="submit" class="w-full">Register</Button>
      <div class="text-sm font-medium text-gray-500">
        Already registered? <NuxtLink to="/login" class="text-primary-600 hover:underline">Login</NuxtLink>
      </div>
    </form>
  </Auth>
</template>