<style lang="postcss">
    .container {
      position: relative;
  
      display: grid;
      justify-items: center;
      align-items: center;
    }
  
    .alt-image {
      width: 300px;
      height: 300px;
      background-color: gray;
  
      display: grid;
      justify-items: center;
      align-items: center;
    }
  
    .image {
      max-height: 300px;
      max-width: 300px;
      object-fit: contain;
    }
  
    .input-file {
      display: none;
    }
  
    .button-icon {
      position: absolute;
      right: 10px;
      top: 10px;
  
      &:hover {
        cursor: pointer;
      }
      width: 15px;
      height: auto;
      padding: 8px;
      background-color: lightgray;
      border-radius: 10px;
    }
  </style>
  
  <script lang="ts">
  
    export let src = '';
    export let files: FileList | null | undefined = null;
    export let isEditing = true;
    export let altImage = '';
    export let editIcon = '';
    export let containerStyle = '';
    export let imageStyle = '';
    export let altImageWrapperStyle = '';
    export let iconStyle = '';
  
    let localImageURL: string;
    let fileInput: HTMLInputElement;
  
    const addImage = () => {
      if (fileInput) {
        fileInput.click();
      }
    };
  
    $: if (files && files[0]) {
      localImageURL = URL.createObjectURL(files[0]);
    }
  </script>
  
  <div class="container" style={containerStyle}>
    {#if localImageURL}
      <img class="image" src={localImageURL} style={imageStyle} alt="" />
    {:else if src}
      <img class="image" src={src} style={imageStyle} alt="" />
    {:else}
      <div class="alt-image" style={altImageWrapperStyle}>
        <img src={altImage} alt="" />
      </div>
    {/if}
    {#if isEditing}
      <img
        class="button-icon"
        src={editIcon}
        style={iconStyle}
        alt=""
        on:click={addImage}
      />
    {/if}
  
    <input
      type="file"
      class="input-file"
      bind:files
      bind:this={fileInput}
      multiple={false}
    />
  </div>
  