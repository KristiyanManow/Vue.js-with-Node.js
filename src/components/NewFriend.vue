<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="newName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="newPhone" />
    </div>
    <div>
      <label>E-Mail</label>
      <input type="email" v-model="newEmail" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      newName: "",
      newPhone: "",
      newEmail: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("add-contact", this.newName, this.newPhone, this.newEmail);
    },
  },
};
</script>
