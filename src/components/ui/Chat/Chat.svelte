<script>
  let messages = [
    { author: "diego", message: "ey banda!" },
    { author: "unyxt", message: "holi!" }
  ];
</script>

<style>
  .container {
    position: fixed;
    bottom: 0;
    right: 0;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
  }
  textarea {
    /* autogrow con scrollHeight  en JS*/
    background-color: rgba(33, 33, 33, 0.7);
    border-radius: 5px;
    width: 200px;
    height: 20px;
    color: white;
    font-size: 16px;
  }

  .message__container {
    color: white;
    text-align: right;
  }

  .message__text {
    display: inline-block;
    background-color: rgba(33, 33, 33, 0.7);
    margin-top: 0;
    margin-bottom: 3px;
    padding: 4px;
    border-radius: 5px;
  }
</style>

<div class="container">
  {#each messages as { author, message }}
    <div class="message__container">
      <p class="message__text">{author}: {message}</p>
    </div>
  {/each}
  <textarea name="" id="" />
</div>
