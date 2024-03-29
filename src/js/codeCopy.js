const copyButtonLabel = '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M215.387-108.31q-23.529 0-40.61-17.081-17.082-17.082-17.082-40.611v-516.457q0-9.663 6.567-16.178 6.566-6.514 16.307-6.514t16.125 6.514q6.385 6.515 6.385 16.178v516.457q0 4.616 3.846 8.462 3.846 3.847 8.462 3.847h389.765q9.664 0 16.178 6.566 6.514 6.567 6.514 16.308 0 9.74-6.514 16.125-6.514 6.384-16.178 6.384H215.387Zm110.769-110.768q-23.529 0-40.611-17.082-17.081-17.082-17.081-40.61v-513.843q0-23.529 17.081-40.611 17.082-17.081 40.611-17.081h393.843q23.528 0 40.61 17.081 17.082 17.082 17.082 40.611v513.843q0 23.528-17.082 40.61t-40.61 17.082H326.156Zm0-45.384h393.843q4.615 0 8.462-3.846 3.846-3.847 3.846-8.462v-513.843q0-4.616-3.846-8.462-3.847-3.847-8.462-3.847H326.156q-4.616 0-8.462 3.847-3.847 3.846-3.847 8.462v513.843q0 4.615 3.847 8.462 3.846 3.846 8.462 3.846Zm-12.309 0V-802.922-264.462Z"/></svg>';

let blocks = document.querySelectorAll('pre');

blocks.forEach((block) => {
  // only add button if browser supports Clipboard API
  if (navigator.clipboard) {

    let button = document.createElement('button');

    button.innerHTML = copyButtonLabel;
    button.ariaLabel = 'Copy Code';
    block.appendChild(button);

    button.addEventListener('click', async () => {
      await copyCode(block, button);
    });
  }
});

async function copyCode(block, button) {
  let code = block.querySelector('code');
  let text = code.innerText;

  await navigator.clipboard.writeText(text);

  // visual feedback that task is completed
  button.innerHTML = 'Copied';

  setTimeout(() => {
    button.innerHTML = copyButtonLabel;
  }, 800);
}
