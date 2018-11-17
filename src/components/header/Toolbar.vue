<template lang="html">
  <v-toolbar
    fixed
    dark
    dense
    app
    clipped-right
    clipped-left
    class="primary pointers-please"
    >

    <div id="toolbar-toggle">
      <v-toolbar-side-icon @click="toggleToolsDrawer()"/>
    </div>

    <router-link to="/">
      <v-toolbar-title class="white--text">
         {{ (images[0] && images[0].name) ? images[0].name : '' }}
      </v-toolbar-title>
    </router-link>

    <v-spacer/>

    <app-export/>

    <app-save/>

    <div>
      <v-toolbar-side-icon @click="toggleStudioDrawer()"/>
    </div>

  </v-toolbar>
</template>

<script>

import { mapActions, mapState, mapGetters } from 'vuex'
import Save from './save/Save.vue'
import Export from './export/Export.vue'

export default {

  computed: {
    ...mapState({
      images: state => state.image.images
    }),
    ...mapGetters({
      getChannels: 'image/getChannels'
    })

  },

  components: {
    'app-save': Save,
    'app-export': Export
  },

  methods: {
    ...mapActions({
      toggleToolsDrawer: 'editor/toggleToolsDrawer',
      toggleStudioDrawer: 'editor/toggleStudioDrawer'
    })
  }
}
</script>

<style lang='css' scoped>
#toolbar-side-icon-spacer {
  height: 36px;
  width: 36px;
}

#toolbar-toggle {
  margin-left: 5px;
  margin-right: 40px;
}
</style>
