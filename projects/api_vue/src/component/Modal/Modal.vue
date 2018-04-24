<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Preferences</md-dialog-title>

      <md-tabs md-dynamic-height>
        <md-tab md-label="General">
          <div v-for="elem in elems">
          <p>{{elem.id.largeImageURL}}</p>
          </div>
        </md-tab>

        <md-tab md-label="Activity">
          <p>q</p>
         </md-tab>

        <md-tab md-label="Account">
       <p>q</p>
        </md-tab>
      </md-tabs>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        <md-button class="md-primary" @click="showDialog = false">Save</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button class="md-primary md-raised" @click="showDialog = true">Show Dialog</md-button>
  </div>
</template>

<script src="./Modal.js">

</script>

<style lang="scss" src="./Modal.scss">
</style>
