<style lang="scss" scoped>
.form {
  max-width: 512px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  &-group {
    margin-bottom: 20px;
  }
  &-label {
    margin-bottom: 14px;
    font-family: var(--inter400);
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
  }
  &-input {
    width: 100%;
    height: 64px;
    padding: 10px;
    padding-left: 24px;
    border-radius: 16px;
    border: 0;
    color: white;

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
  &-input::placeholder {
    font-family: var(--inter400);
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
  }
}


.password-placeholder {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  pointer-events: none;
  color: #aaa;
}

input[type="password"] {
  padding-right: 35px; /* To accommodate the placeholder dots */
}
</style>
<template>
  <form class="form">
    <div class="form-group">
      <label for="username" class="form-label">Username:</label>
      <input
        class="form-input"
        type="text"
        id="username"
        name="username"
        placeholder="Type your username"
        required
      />
    </div>
    <div class="form-group">
      <label for="password" class="form-label">Password:</label>
      <div class="password-input-container">
        <input
          class="form-input"
          type="password"
          id="password"
          name="password"
          placeholder="● ● ● ● ● ●"
          required
        />
      </div>
    </div>
  </form>
</template>