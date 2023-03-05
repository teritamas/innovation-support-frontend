<template>
    <div class="checkbox-container flex">
    <input :id=checkTarget type="checkbox" class="check" disabled />
        <div class="checkbox">
            <svg viewBox="0 0 28 28" width="28px" hegiht="28px">
            <use href="#check-stroke-background"></use>
            </svg>
            <svg viewBox="0 0 28 28" width="28px" hegiht="28px">
            <use href="#check-stroke"></use>
            </svg>
        </div>
        <div class="ml-2">{{ label }}</div>
    </div>

    <svg class="template">
    <symbol id="check-stroke">
        <polyline stroke-width="3" stroke-linejoin="round" stroke-linecap="round" points="5 10.5 10.5 16 23.5 4"></polyline>
    </symbol>
    <symbol id="check-stroke-background">
        <polyline stroke-width="8" stroke-linejoin="round" stroke-linecap="round" points="5 11 10.5 15 23.5 4"></polyline>
    </symbol>
    </svg>
</template>

<script>

export default {
  name: 'loading-check',
  components: {
  },
  props: {
    label: String,
    checkTarget: String,
  },
}
</script>


<style lang="scss">
.checkbox-container {
  position: relative;
  margin: 1rem;
}

.checkbox {
  margin-right: .5rem;
  position: relative;
  display: inline-flex;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 2px solid #cccfdb;
  transition: all 0.3s ease;
  cursor: pointer;

  svg {
    fill: none;
    stroke: rgb(251 191 36);
    stroke-dasharray: 28;
    stroke-dashoffset: 28;
    transition: all 0.3s ease;
    transform: scale(1.1);
    position: absolute;
    top: 0;
    left: 3px;

    &:first-child {
      stroke: #fff;
    }
  }
}

.check {
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    position: absolute;
  top: 0;
  left: 0;

  &:after {
    position: absolute;
    width: 24px;
    height: 24px;
    content: '';
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
  }

  &:checked {
    & + .checkbox {
      color: rgb(251 191 36);
      border-color: rgb(251 191 36);

      svg {
        stroke-dashoffset: 0;
      }
    }
  }
}

.template {
  display: none;
}
</style>