<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(FAVORITE)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? " Hide " : " Show " }}Details
    </button>
    <button @click="toggleFavorite">Change Favorite</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAdress }}</li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>
<script>
export default {
  //props: ["name", "phoneNumber", "emailAdress", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAdress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      defalt: false,
      //   validator: function (value) {
      //     return value === "1" || value === "0";
      //   },
    },
  },
  emits: ["toggleFavorite", "delete"],
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Marinez",
        phone: "123 456 7890",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
