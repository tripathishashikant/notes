<template>
  <div class="auth">
    <div class="tabs is-centered">
      <ul>
        <li
          :class="{ 'is-active': !register }"
        >
          <a
            @click.prevent="register = false"
          >
            Login
          </a>
        </li>
        <li
          :class="{ 'is-active': register }"
        >
          <a
            @click.prevent="register = true"
          >
            Register
          </a>
        </li>
      </ul>
    </div>
    <div class="auth__card card">
      <div class="has-text-centered title mb-0">
        {{ formTitle }}
      </div>

      <form @submit.prevent="submitForm">
        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input
              v-model="credential.email"
              class="input"
              type="email"
              placeholder="Enter a email"
              value=""
            >
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control has-icons-left has-icons-right">
            <input
              v-model="credential.password"
              class="input"
              type="password"
              placeholder="Enter a password"
              value=""
            >
          </div>
        </div>

        <div class="field is-grouped is-grouped-right">
          <div class="control">
            <button class="button is-success">{{ formTitle }}</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useAuthStore } from '@/stores/auth.store'

const authStore = useAuthStore();

const register = ref(false)
const credential = reactive({
  email: '',
  password: '',
})

const formTitle = computed(() => {
  return register.value ? 'Register' : 'Login'
})

function submitForm() {
  if (!credential.email || !credential.password) {
    alert('Please enter correct email and password!');
  } else {
    if (register.value) {
      authStore.registerUser(credential);
    } else {
      authStore.loginUser(credential);
    }
  }
}
</script>

<style scoped>
.auth__card {
  width: 32rem;
  margin: 0 auto;
  padding: 1rem;
}
</style>
