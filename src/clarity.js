// clarity.js
function loadClarity(tagId) {
  return new Promise((resolve) => {
    if (window.clarity) return resolve();

    window.clarity = window.clarity || function () {
      (window.clarity.q = window.clarity.q || []).push(arguments);
    };

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.clarity.ms/tag/" + tagId;
    script.onload = () => resolve();

    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  });
}

export default loadClarity;
