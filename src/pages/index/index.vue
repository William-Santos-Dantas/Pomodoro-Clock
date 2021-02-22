<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <div class="text-center">
              <H1>POMODORO CLOCK</H1>
              <v-progress-circular
                :rotate="360"
                :size="300"
                :width="8"
                :value="currentTimer"
                color="teal"
              >
                {{ displayMinutes }}:{{ displaySeconds }}
              </v-progress-circular>
              <v-row class="mb-6 pt-6">
                <v-col>
                  <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="primary"
                    @click="anyLess"
                  >
                    <v-icon dark> mdi-minus </v-icon>
                  </v-btn>
                </v-col>
                <v-col v-if="!isRunning">
                  <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="primary"
                    @click="start"
                  >
                    <v-icon dark> mdi-play </v-icon>
                  </v-btn>
                </v-col>
                <v-col v-else>
                  <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="red accent-4"
                    @click="stop"
                  >
                    <v-icon dark> mdi-stop </v-icon>
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="primary"
                    @click="reset"
                  >
                    <v-icon dark> mdi-refresh </v-icon>
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="primary"
                    @click="most"
                  >
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
  created() {
    this.totalSeconds = this.minutes * 60;
  },

  data() {
    return {
      isRunning: false,
      timerInstance: null,
      minutes: 1,
      totalSeconds: 0,
      currentTimer: 0,
    };
  },

  computed: {
    displayMinutes() {
      const minutes = Math.floor(this.totalSeconds / 60);
      return this.formatTime(minutes);
    },
    displaySeconds() {
      const seconds = this.totalSeconds % 60;
      return this.formatTime(seconds);
    },
  },

  methods: {
    anyLess() {
      this.stop();
      this.minutes = this.minutes - 1;
      this.totalSeconds = this.minutes * 60;
    },
    most() {
      this.stop();
      this.minutes = this.minutes + 1;
      this.totalSeconds = this.minutes * 60;
    },
    formatTime(time) {
      if (time < 10) {
        return "0" + time;
      }
      return time.toString();
    },
    start() {
      this.stop();
      this.isRunning = true;
      var totalSeconds = this.totalSeconds;
      this.timerInstance = setInterval(() => {
        if (this.totalSeconds <= 0) {
          this.stop();
          return;
        }
        this.currentTimer += 100 / totalSeconds;
        this.totalSeconds -= 1;
      }, 1000);
    },
    stop() {
      this.isRunning = false;
      clearInterval(this.timerInstance);
    },
    reset(minutes) {
      this.stop();
      this.currentTimer = 0;
      this.totalSeconds = this.minutes * 60;
    },
  },
};
</script>