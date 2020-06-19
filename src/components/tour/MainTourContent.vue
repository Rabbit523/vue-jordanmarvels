<template>
  <section class="text-left">
    <heading heading="Main Information about Tour" type="content"></heading>
    <div class="content-description">
      <p>
        Petra is a famous archaeological site in Jardan's southwestern desert.
        Dating to around 300 B.C., it was the capital of the Nabatean Kingdom.
        Accessed via a narrow canyon called AI Siq, it contains tombs and
        temples carbed into sandstone cliffs, earning it's nickname, the 'Rose
        City'. Perhaps its most famous structure is 45m-high AI Khazneh, a
        temple with an arnate, Greek-style facade, and known as The Treasury.
      </p>
      <p>
        In ancient times, Petra might have been approached from the south on a
        track leading across the pain of Petra, around Jabal Haroun ('Aaron's
        Mountain'), the location of the Tomb of Aaron, said to be the burial
        place of Aaron, brother of Moses. Another approach was possibly from the
        high plateau to the north. Today, most modern visitors approach the site
        from the east. The impressive eastern entrance leads sleeply down
        through a dark, narrow gorge, in places only 3-4m (10-13 ft) wide,
        called the Siq("shaft"), a natural geological feature formed from a deep
        split in the sandstone rocks and serving as a waterway flowing into Wadi
        Musa.
      </p>
      <label class="title-3">Included</label>
      <p>
        <span>
          Snacks along the way:<br />Falafel, Syrian sweets, Tea & water
        </span>
      </p>
      <div class="gallery">
        <label class="title-3">Photo Gallery</label>
        <div class="gallery-row">
          <div
            v-for="gallery in gallery1"
            :key="gallery.id"
            :style="{ backgroundImage: `url(${gallery.img})` }"
            class="photo"
          ></div>
        </div>
        <div class="gallery-row mt-3">
          <div
            v-for="gallery in gallery2"
            :key="gallery.id"
            :style="{ backgroundImage: `url(${gallery.img})` }"
            class="photo"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import heading from "./Heading";

export default {
  name: "MainTourContent",
  components: { heading },
  data() {
    return {
      gallery1: [
        {
          id: 1,
          img: require("@/assets/gallery1.jpg")
        },
        {
          id: 2,
          img: require("@/assets/gallery2.jpg")
        },
        {
          id: 3,
          img: require("@/assets/gallery3.jpg")
        },
        {
          id: 4,
          img: require("@/assets/gallery4.jpg")
        }
      ],
      gallery2: [
        {
          id: 5,
          img: require("@/assets/gallery5.jpg")
        },
        {
          id: 6,
          img: require("@/assets/gallery6.jpg")
        },
        {
          id: 7,
          img: require("@/assets/gallery7.jpg")
        },
        {
          id: 8,
          img: require("@/assets/gallery8.jpg")
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.content-description {
  margin: 10px 105px 50px 105px;
  p {
    padding-bottom: 20px;
  }
  .gallery {
    .gallery-row {
      display: flex;
      justify-content: space-between;
      .photo {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        margin-right: 15px;
        width: 100%;
        height: 150px;
        &:last-child {
          margin: 0;
        }
      }
    }
  }
}
</style>
