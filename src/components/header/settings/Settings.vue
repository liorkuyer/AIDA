<template lang="html">
  <div>
    <!-- <v-btn
      icon
      @click.native.stop="toggleSettings">
      <v-icon >
        settings
      </v-icon>
    </v-btn> -->

    <v-dialog
      v-model="dialog"
      class="pointers-please"
      max-width="900">

      <v-btn
        slot="activator"
        icon >
        <v-icon >
          settings
        </v-icon>
      </v-btn>

      <v-card>
        <v-container id="container">
          <v-layout>
            <v-navigation-drawer
              permanent
            >

              <v-toolbar
                flat
                class="transparent">
                <v-list class="pa-0">
                  <v-list-tile avatar>
                    <v-list-tile-avatar>
                      <v-icon> settings </v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>Settings</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-toolbar>

              <v-list>
                <v-divider/>

                <v-list-tile
                  :class="[(settings === 'project') ? 'faIconsActive' : 'faIcons']"
                  @click="settings = 'project'">

                  <v-list-tile-action>
                    <v-icon/>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title> Project </v-list-tile-title>
                  </v-list-tile-content>

                </v-list-tile>

                <v-list-tile
                  :class="[(settings === 'annotation') ? 'faIconsActive' : 'faIcons']"
                  @click="settings = 'annotation'">

                  <v-list-tile-action>
                    <v-icon/>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title> Upload Annotation </v-list-tile-title>
                  </v-list-tile-content>

                </v-list-tile>

                <v-list-tile
                  :class="[(settings === 'image') ? 'faIconsActive' : 'faIcons']"
                  @click="settings = 'image'">

                  <v-list-tile-action>
                    <v-icon/>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title> Add an Image </v-list-tile-title>
                  </v-list-tile-content>

                </v-list-tile>

                <v-list-tile
                  :class="[(settings === 'steps') ? 'faIconsActive' : 'faIcons']"
                  @click="settings = 'steps'">

                  <v-list-tile-action>
                    <v-icon/>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title> Steps </v-list-tile-title>
                  </v-list-tile-content>

                </v-list-tile>

                <v-list-tile
                  :class="[(settings === 'tools') ? 'faIconsActive' : 'faIcons']"
                  @click="settings = 'tools'">

                  <v-list-tile-action>
                    <v-icon/>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title> Tools </v-list-tile-title>
                  </v-list-tile-content>

                </v-list-tile>

              </v-list>
            </v-navigation-drawer>

            <div id="content">
              <!-- Project Settings -->
              <app-project-settings v-if="settings === 'project'"/>

              <!-- Annotation settings -->
              <app-annotation-settings v-if="settings === 'annotation'"/>

              <!-- Image Settings -->
              <app-image-settings v-if="settings === 'image'"/>

              <!-- Step Settings -->
              <app-step-settings v-if="settings === 'steps'"/>

              <!-- Tool Settings -->
              <app-tool-settings v-if="settings === 'tools'"/>
            </div>

          </v-layout>

          <v-divider/>

          <v-layout justify-end>
            <v-btn
              color="blue darken-1"
              flat
              @click.native="dialog = false">
              Close
            </v-btn>
          </v-layout>

        </v-container>
      </v-card>
    </v-dialog>

  </div>

</template>

<script>
// import { mapState, mapActions } from 'vuex'

// Import child components
import ProjectSettings from './ProjectSettings.vue'
import AnnotationSettings from './AnnotationSettings'
import ImageSettings from './ImageSettings.vue'
import ToolSettings from './ToolSettings.vue'
import StepSettings from './StepSettings.vue'

export default {
  components: {
    'app-project-settings': ProjectSettings,
    'app-annotation-settings': AnnotationSettings,
    'app-image-settings': ImageSettings,
    'app-step-settings': StepSettings,
    'app-tool-settings': ToolSettings
  },

  data () {
    return {
      dialog: false,
      settings: 'project'
    }
  }

  // computed: {
  //   ...mapState({
  //     dialog: state => state.editor.settingsFlag
  //   })
  // },

  // methods: {
  //   ...mapActions(['toggleSettings'])
  // }
}
</script>

<style lang='css' scoped>
#container {
  margin: 0px;
  padding: 0px;
}

#content {
  margin: 10px;
  width: 100%;
}
</style>
