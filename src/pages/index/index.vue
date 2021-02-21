<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <div class="text-center">
              <H1>POMODORO - CLOCK</H1>
              <v-progress-circular
                :rotate="360"
                :size="300"
                :width="8"
                :value="value"
                color="teal"
              >
                {{ value }}
              </v-progress-circular>
              <v-row class="mb-6 pt-6">
                <v-col>
                  <v-btn class="mx-2" fab dark small color="primary">
                    <v-icon dark> mdi-minus </v-icon>
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn class="mx-2" fab dark small color="primary">
                    <v-icon dark> mdi-play </v-icon>
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn class="mx-2" fab dark small color="primary">
                    <v-icon dark> mdi-plus </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      interval: {},
      value: 0,
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0);
      }
      this.value += 10;
    }, 1000);
  },
};
</script>