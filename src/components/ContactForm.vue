<template>
  <div class="form">
    <form
      name="contact"
      method="POST"
      v-on:submit.prevent="handleSubmit"
      action="/contact/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      v-if="!hasBeenSent || formHasErrored"
    >
      <input type="hidden" name="form-name" value="Contact form" />
      <p class="hidden">
        <label for="name">
          We don't like robots!:
          <input name="bot-field" />
        </label>
      </p>
      <p>
        <label for="name">
          What's your name:
          <input
            type="text"
            id="name"
            name="name"
            v-model="formData.name"
            required
          />
        </label>
      </p>
      <p>
        <label for="contact">
          How can I reach out to you:
          <input
            type="text"
            id="contact"
            name="contact"
            v-model="formData.contact"
          />
        </label>
      </p>
      <p>
        <label for="message">
          What's your message:
          <textarea
            id="message"
            name="message"
            v-model="formData.message"
            required
          />
        </label>
      </p>

      <p v-if="formHasErrored">
        This is embarrasing! An error has occured! If this keeps on happening,
        shoot me a DM in
        <a href="https://instagram/joranquinten/" title="Message me on Insta"
          >Instagram</a
        >! 🙈
      </p>
      <p>
        <button type="submit">Submit</button>
      </p>

      <transition name="fade">
        <div class="form-errors" v-if="formErrors.length > 0">
          <p :key="index" v-for="(error, index) in formErrors">{{ error }}</p>
        </div>
      </transition>
    </form>
    <div class="feedback" v-if="hasBeenSent && !formHasErrored">
      <p>Your form has been sent! Thanks for reaching out to me 😊</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formErrors: [],
      formData: {},
      hasBeenSent: false,
      formHasErrored: false
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      this.formErrors = [];
      if (this.formData.name.length < 2) {
        this.formErrors.push(
          "🤔 Hmmm, this doesn't look like you inputted a valid name."
        );
      }
      if (this.formData.contact.length < 5) {
        this.formErrors.push(
          "🕵🏻‍♂️ Hmmm, it doesn't look like the contact information is something I can work with. Try an email address or a phone number."
        );
      }

      if (this.formErrors.length > 0) {
        return false;
      }

      fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => {
          this.formHasErrored = false;
          this.hasBeenSent = true;
        })
        .catch(error => {
          this.formHasErrored = true;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_core.scss";
form {
  max-width: 600px;
  margin: 2em auto 0;

  .hidden {
    visibility: none;
    display: none;
  }

  label {
    display: flex;
    flex-direction: column;

    input,
    textarea {
      text-decoration: none;
      display: inline-block;
      border: 1px solid $primary;
      background-color: $light;
      box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.35);
      border-radius: 0.4rem;
      padding: 0.6rem 1rem;
      :active {
        border: 1px solid $tertiary;
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.35);
      }
    }

    textarea {
      min-height: 120px;
    }
  }

  button {
    text-decoration: none;
    font-size: 1em;
    display: inline-block;
    color: $dark;
    border: 1px solid $secondary;
    background-color: $secondary;
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.35);
    border-radius: 0.4rem;
    padding: 0.6rem 1rem;
    &:hover {
      cursor: pointer;
      color: $light;
      background-color: $primary;
      border: 1px solid $primary;
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.35);
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
