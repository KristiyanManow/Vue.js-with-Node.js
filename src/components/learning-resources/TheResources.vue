<template>
  <base-card>
    <button @click="setSelectedTab('stored-resource')">Sored Resource</button>
    <button @click="setSelectedTab('add-resource')">Add Resource</button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResource from './StoredResource.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResource,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resource',
      storedResources: [
        {
          id: 'official-guide',
          name: 'Official Guide',
          description: 'This is a official guide',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          name: 'Google',
          description: 'Learn  Google guide',
          link: 'https://google.org',
        },
        {
          id: 'Yahooo',
          name: 'Yahooo',
          description: 'Learn  Yaho guide',
          link: 'https://Yahooo.org',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      AddResource: this.AddResource,
      deleteResource: this.removeResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    AddResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        name: title,
        description: description,
        link: url,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resource';
    },
    removeResource(resId) {
      const removeRes = this.storedResources.findIndex(
        (res) => res.id === resId
      );
      this.storedResources.splice(removeRes, 1);
    },
  },
};
</script>
