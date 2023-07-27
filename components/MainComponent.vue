<script setup>
onMounted(() => {
  $(".paginationSlider__content").slick({
    arrows: false,
    dots: true,
  });
  $(".slider1").slick({
    dots: false,
    arrows: false,
    infinity: true,
    variableWidth: true,
  });
  $(".slider2").slick({
    dots: false,
    arrows: false,
    infinity: true,
    variableWidth: true,
  });
  $(".slider3").slick({
    dots: false,
    arrows: false,
    infinity: true,
    variableWidth: true,
  });
});
</script>

<style lang="scss" scoped>
.paginationSlider {
  margin-bottom: 267px;
  margin-top: 333px;
  &__content {
    &-blocks {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
      min-width: 0;
    }
    &-items {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 314px;
      padding-top: 40px;
      padding-bottom: 48px;
      height: 256px;
      border-radius: 16px;
      background: linear-gradient(
          304.29deg,
          rgba(51, 123, 190, 0.2) 0%,
          rgba(51, 123, 190, 0) 100%
        ),
        linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.08),
          rgba(255, 255, 255, 0.08)
        );
    }
  }
}
.slider {
  margin-top: 269px;
  margin-bottom: 271px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  &__blocks {
    &-items {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 314px !important;
      padding-top: 40px;
      padding-bottom: 48px;
      height: 256px;
      border-radius: 16px;
      background: linear-gradient(
          304.29deg,
          rgba(51, 123, 190, 0.2) 0%,
          rgba(51, 123, 190, 0) 100%
        ),
        linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.08),
          rgba(255, 255, 255, 0.08)
        );
    }
  }
}
</style>


<template>
  <main class="main">
    <section class="paginationSlider">
      <div class="container">
        <div class="paginationSlider__content">
          <div class="paginationSlider__content-blocks">
            <div class="paginationSlider__content-items">
              <img src="../assets/images/Group 28.png" alt="" />
            </div>
            <div class="paginationSlider__content-items">
              <img src="../assets/images/KOB logo.png" alt="" />
            </div>
            <div class="paginationSlider__content-items">
              <img src="../assets/images/Main logo.png" alt="" />
            </div>
            <div class="paginationSlider__content-items">
              <img src="../assets/images/KennyRoss.png" alt="" />
            </div>
            <div class="paginationSlider__content-items">
              <img src="../assets/images/01 - Logo (Traced).png" alt="" />
            </div>
            <div class="paginationSlider__content-items">
              <img src="../assets/images/Group 28.png" alt="" />
            </div>
          </div>
          <div class="paginationSlider__content-blocks">
            <div class="paginationSlider__content-items">
              <img src="../assets/images/Group 28.png" alt="" />
            </div>
            <div class="paginationSlider__content-items">
              <img src="../assets/images/KOB logo.png" alt="" />
            </div>
            <div class="paginationSlider__content-items">
              <img src="../assets/images/Main logo.png" alt="" />
            </div>
            <div class="paginationSlider__content-items">
              <img src="../assets/images/KennyRoss.png" alt="" />
            </div>
            <div class="paginationSlider__content-items">
              <img src="../assets/images/01 - Logo (Traced).png" alt="" />
            </div>
            <div class="paginationSlider__content-items">
              <img src="../assets/images/Group 28.png" alt="" />
            </div>
          </div>
          <div class="paginationSlider__content-blocks">
            <div class="paginationSlider__content-items">
              <img src="../assets/images/Group 28.png" alt="" />
            </div>
            <div class="paginationSlider__content-items">
              <img src="../assets/images/KOB logo.png" alt="" />
            </div>
            <div class="paginationSlider__content-items">
              <img src="../assets/images/Main logo.png" alt="" />
            </div>
            <div class="paginationSlider__content-items">
              <img src="../assets/images/KennyRoss.png" alt="" />
            </div>
            <div class="paginationSlider__content-items">
              <img src="../assets/images/01 - Logo (Traced).png" alt="" />
            </div>
            <div class="paginationSlider__content-items">
              <img src="../assets/images/Group 28.png" alt="" />
            </div>
          </div>
          <div class="paginationSlider__content-blocks">
            <div class="paginationSlider__content-items">
              <img src="../assets/images/Group 28.png" alt="" />
            </div>
            <div class="paginationSlider__content-items">
              <img src="../assets/images/KOB logo.png" alt="" />
            </div>
            <div class="paginationSlider__content-items">
              <img src="../assets/images/Main logo.png" alt="" />
            </div>
            <div class="paginationSlider__content-items">
              <img src="../assets/images/KennyRoss.png" alt="" />
            </div>
            <div class="paginationSlider__content-items">
              <img src="../assets/images/01 - Logo (Traced).png" alt="" />
            </div>
            <div class="paginationSlider__content-items">
              <img src="../assets/images/Group 28.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <TitleComponent
      text="Powerful monitor of your  dealer infestruction"
      size="1728"
    />
    <section class="slider">
      <div class="slider1">
        <div class="slider__blocks-items">
          <img src="../assets/images/image 11.png" alt="" />
        </div>
        <div class="slider__blocks-items">
          <img src="../assets/images/image 1.png" alt="" />
        </div>
        <div class="slider__blocks-items">
          <img src="../assets/images/image 14.png" alt="" />
        </div>
        <div class="slider__blocks-items">
          <img src="../assets/images/image 15.png" alt="" />
        </div>
        <div class="slider__blocks-items">
          <img src="../assets/images/image 4.png" alt="" />
        </div>
      </div>
      <div class="slider2">
        <div class="slider__blocks-items">
          <img src="../assets/images/image 1.png" alt="" />
        </div>
        <div class="slider__blocks-items">
          <img src="../assets/images/image 5.png" alt="" />
        </div>
        <div class="slider__blocks-items">
          <img src="../assets/images/image 4.png" alt="" />
        </div>
        <div class="slider__blocks-items">
          <img src="../assets/images/image 12.png" alt="" />
        </div>
        <div class="slider__blocks-items">
          <img src="../assets/images/image 13.png" alt="" />
        </div>
        <div class="slider__blocks-items">
          <img src="../assets/images/image 14.png" alt="" />
        </div>
        <div class="slider__blocks-items">
          <img src="../assets/images/image 15.png" alt="" />
        </div>
        <div class="slider__blocks-items">
          <img src="../assets/images/image 17.png" alt="" />
        </div>
      </div>
      <div class="slider3">
        <div class="slider__blocks-items">
          <img src="../assets/images/image 13.png" alt="" />
        </div>
        <div class="slider__blocks-items">
          <img src="../assets/images/image 14.png" alt="" />
        </div>
        <div class="slider__blocks-items">
          <img src="../assets/images/image 17.png" alt="" />
        </div>
        <div class="slider__blocks-items">
          <img src="../assets/images/image 15.png" alt="" />
        </div>
        <div class="slider__blocks-items">
          <img src="../assets/images/image 1.png" alt="" />
        </div>
        <div class="slider__blocks-items">
          <img src="../assets/images/image 5.png" alt="" />
        </div>
        <div class="slider__blocks-items">
          <img src="../assets/images/image 4.png" alt="" />
        </div>
        <div class="slider__blocks-items">
          <img src="../assets/images/image 12.png" alt="" />
        </div>
      </div>
    </section>
  </main>
</template>

