<style lang="postcss">
    .toggle-switch {
      position: relative;
      display: inline-block;
      width: var(--width);
      height: var(--height);

      input {
        opacity: 0;
        width: 0;
        height: 0;
      }
  
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        -webkit-transition: 0.4s;
        transition: 0.4s;

        &::before {
          position: absolute;
          content: '';
          height: var(--roundDiameter);
          width: var(--roundDiameter);
          left: var(--left);
          bottom: var(--bottom);
          -webkit-transition: 0.4s;
          transition: 0.4s;
        }
      }
  
      .round {
        border-radius: 34px;
        background-color: var(--backgroundColorOff);

        &::before {
          background-color: var(--circleColorOff);
          border-radius: 50%;
        }
      }

      input:checked + .slider {
        background-color: var(--backgroundColorOn);

        &::before {
          -webkit-transform: var(--transformX);
          -ms-transform: var(--transformX);
          transform: var(--transformX);
        }
      }

      input:checked + .round {
        &::before {
          background-color: var(--circleColorOn);
        }
      }
    }

  </style>
  
  <script lang="ts">
    import type { Size } from "types";
    import type { Styles } from "./index.types";

    export let checked = false;
    export let size: Size = 'medium';

    export let styles: Styles = {
      circleColorOff: '#fff',
      circleColorOn: '#fff',
      backgroundColorOff: '#A9A9A9',
      backgroundColorOn: '#A3DA8D',
    }

    let width = 60;
    let height = 30;
    let left = 6;
    let bottom = 3;
    let roundDiameter = 24;
    let transformX= 24;

    if(size === 'large') {
        width = 90;
        height = 45;
        left = 12;
        bottom = 6;
        roundDiameter = height - (bottom * 2);
        transformX = width - ((Math.round(roundDiameter/2) + left) * 2);
      }

    if(size === 'small') {
        width = 30;
        height = 15;
        left = 3;
        bottom = 2;
        roundDiameter = height - (bottom * 2);
        transformX = width - ((Math.round(roundDiameter/2) + left) * 2);
      }
  </script>
  
  <label class="toggle-switch" style="--width: {width}px; --height: {height}px">
    <input type="checkbox" bind:checked on:click/>
    <span 
      class="slider round"
      style="
      --roundDiameter: {roundDiameter}px;
      --left: {left}px;
      --bottom: {bottom}px;
      --transformX: translateX({transformX}px);
      --circleColorOff: {styles.circleColorOff}; 
      --circleColorOn: {styles.circleColorOn}; 
      --backgroundColorOff: {styles.backgroundColorOff};
      --backgroundColorOn: {styles.backgroundColorOn}" 
    />
  </label>
  