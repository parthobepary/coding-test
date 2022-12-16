
<template>
  <div>
    <div id="home" class="container">
      <h1>hello</h1>
      <!-- this is manual img -->
      <img src="../assets/logo.png" alt="dummy img">

      <!-- import dynamic img -->
      <!-- <img :src="$data.img" alt=""> -->

      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt perferendis quod ad accusamus, culpa
        praesentium. Ab cupiditate repellat aliquid, recusandae, suscipit modi voluptate sapiente reprehenderit vel
        voluptates porro pariatur, quas vitae rerum exercitationem quia nobis eaque veniam debitis error. Libero
        voluptates nihil deleniti vel ipsa nobis voluptas alias consequuntur provident molestiae, eius sit aliquam sequi
        autem reprehenderit nesciunt, voluptatum velit dicta debitis aut tempora. Inventore quam dolores vitae sed
        repudiandae! Aliquid consectetur praesentium, eaque voluptatum id quia sapiente suscipit veritatis. Blanditiis
        enim quasi eius cum modi ab optio ea, nobis architecto. Doloribus, impedit dolores nulla ad sint rem ut
        dignissimos.</p>
      <img src="../assets/logo.png" alt="dummy img">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laboriosam recusandae autem aperiam quasi a
        placeat, velit atque repudiandae dicta error deleniti molestiae quae nesciunt numquam eos consectetur magni eius
        ipsum mollitia aliquam, at enim neque. Minima suscipit excepturi maxime animi voluptatum quaerat sint unde,
        repudiandae nemo, qui corrupti rem, ea aliquam laborum. Itaque, consequatur voluptas expedita saepe labore
        exercitationem minus. Laborum repudiandae, qui soluta fugit, neque recusandae ducimus deleniti repellat
        accusamus quo ut debitis sit error, expedita dolore dolorem! Libero deleniti nemo quas ad, voluptatem vero
        quibusdam itaque consequatur voluptatum magnam odio inventore? Blanditiis sint expedita dolorum ratione nobis
        sed. Vitae, eveniet est quod qui nesciunt minima tempora omnis fugit ab sint minus pariatur beatae. Fugit,
        architecto similique nisi consequuntur possimus debitis praesentium quaerat odio dolor laborum, nemo at beatae
        animi eos earum accusantium. Magni doloribus harum quos quidem, officiis sapiente error temporibus blanditiis
        molestiae cumque nostrum, iure, ipsam tenetur porro saepe fuga earum eveniet tempora id omnis minima. Ipsa
        aperiam dicta culpa obcaecati rerum quod, sint eligendi dolorum doloremque reprehenderit. Error ipsa dolorem
        architecto nam dignissimos obcaecati placeat aliquam consequuntur exercitationem deserunt saepe quos commodi
        explicabo magnam nostrum earum veniam fugiat odit, odio libero inventore ab totam. Possimus.</p>
    </div>
    <div class="d-flex justify-content-end">
      <div>
        <button @click="goHome()" class="outline-0 bg-info text-white px-3 py-2 rounded-circle">got to up</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      /* store your data */
    }
  },
  methods: {
    /* write your fi=unction */
    goHome() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
}
</script>
<style lang="">
  
</style>