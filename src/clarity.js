function loadClarity(tagId) {
  // Check if Clarity is already loaded
  if (window.clarity) return;

  window.clarity =
    window.clarity ||
    function () {
      (window.clarity.q = window.clarity.q || []).push(arguments);
    };

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.clarity.ms/tag/" + tagId;

  const firstScript = document.getElementsByTagName("script")[0];
  firstScript.parentNode.insertBefore(script, firstScript);
}

export default loadClarity;
