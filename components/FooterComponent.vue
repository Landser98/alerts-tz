<style scoped lang="scss">
.title {
  display: none;
}
.create__block {
  display: flex;
  justify-content: center;
  margin-top: 56px;

  &-link {
    width: 224px;
    height: 224px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0a72d4;
  }
  &-link a {
    color: white;
    font-family: var(--inter900);
    font-size: 32px;
    font-weight: 900;
    line-height: 32px;
    letter-spacing: -0.01em;
    text-align: center;
    text-transform: uppercase;
  }
}
</style>

<template>
  <div>
    <div class="container">
      <TitleComponent text="Start Free today" size="682" />
      <FormComponent />
      <div class="create__block">
        <li class="create__block-link">
          <a href="#!">Create account</a>
        </li>
      </div>
    </div>
  </div>
</template>