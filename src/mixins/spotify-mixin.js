const client_id = "76719a6dfe5c4d528b696a0b8ddf359a";
const client_secret = "6106a53cb40b4d9a800d5f81e75d2c88";

export default {
  data() {
    return {
      client_id,
      client_secret,
      loadingPage: false,
    };
  },
  created() {
    this.getAccessToken();
  },
  methods: {
    async getAccessToken() {
      this.loadingPage = true;
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
      };
      try {
        const result = await fetch(
          "https://accounts.spotify.com/api/token",
          config
        );
        const response = await result.json();
        localStorage.setItem("access_token", response?.access_token);
      } catch (err) {
        return err;
      } finally {
        this.loadingPage = false;
      }
    },
  },
};
