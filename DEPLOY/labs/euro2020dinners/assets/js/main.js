function copyToClipboard(mealId) {
  const cb = navigator.clipboard;
  cb.writeText(location.href.replace(location.hash,"") + "#match-"+ mealId).then(() => alert('Link to meal copied ✨'));
}