<template>
  <Layout>
    <h1>Well, hi there!</h1>

    <p>
      You've landed on my photography page called "<strong>Moving Pixels</strong
      >". It stands for conveying emotion through photography, but it is also a
      nod to videography, which I'm starting to enjoy as well.
    </p>
    <p>
      Feel free to take a look at some of the pictures in the
      <g-link to="/galleries/">galleries</g-link>, where I've been so kind as to
      organise my collection into consumable chunks. You're welcome!
    </p>
    <p>
      If you want to know a bit more about the fellow on the other end of the
      line? I'll introduce myself on my
      <g-link to="/about">own personal page</g-link>, or check out the
      <g-link to="/blog">articles</g-link> I've written!
    </p>
    <p>
      Can't get enough or want to get in touch? You can reach out to me via the
      <g-link to="/contact">contact form</g-link> or via social media:
      <a href="https://instagram.com/joranquinten">Instagram</a>,
      <a href="https://unsplash.com/@joranquinten">Unsplash</a>,
      <a href="https://500px.com/joranquinten">500px</a>.
    </p>

    <p>Enjoy! ✌️ <span class="signature">Joran</span></p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "A photography blog"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.signature {
  display: block;
  font-size: 2em;
  font-family: "Amatic SC", cursive;
  line-height: 1.4em;
}
</style>
