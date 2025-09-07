<script setup>
import Auth from "/layouts/auth.vue";
import { ref } from "vue";

useHead({
  title: 'Login',
});

const email = ref("");
const password = ref("");

const handleSubmit = () => {
  console.log("Form submitted", { email: email.value, password: password.value });
};
</script>

<template>
  <Auth>
    <h1>Login Page</h1>
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
      <Button type="submit" class="w-full">Login</Button>
      <div class="text-sm font-medium text-gray-500">
        Not registered? <NuxtLink to="/register" class="text-primary-600 hover:underline">Create account</NuxtLink>
      </div>
    </form>
  </Auth>
</template>