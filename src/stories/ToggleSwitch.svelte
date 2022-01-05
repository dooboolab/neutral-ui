<style lang="postcss" bind:styles={styles}>
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 30px;

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
          height: 23px;
          width: 23px;
          left: 6px;
          bottom: 3px;
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
          -webkit-transform: translateX(26px);
          -ms-transform: translateX(26px);
          transform: translateX(26px);
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
    type Size = 'large' | 'medium' | 'small';

    export let checked = false;
    export let circleColorOff = '#fff';
    export let circleColorOn = '#fff';
    export let backgroundColorOff = '#A9A9A9';
    export let backgroundColorOn = '#A3DA8D';
    export let size: Size = 'medium';


  </script>
  
  <label class="switch">
    <input type="checkbox" bind:checked />
    <span 
      class="slider round" 
      style="--circleColorOff: {circleColorOff}; --circleColorOn: {circleColorOn}; --backgroundColorOff: {backgroundColorOff}; --backgroundColorOn: {backgroundColorOn}" 
    />
  </label>
  