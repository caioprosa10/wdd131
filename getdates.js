// scripts/getdates.js
// Purpose: dynamically populate the current year and last modified date in the footer.
(function(){
  const yearSpan = document.getElementById('currentyear');
  const lastModP = document.getElementById('lastModified');
  try{
    const now = new Date();
    if (yearSpan) yearSpan.textContent = now.getFullYear();
    if (lastModP) lastModP.textContent = `Last Modification: ${document.lastModified}`;
  }catch(err){
    // In the unlikely event of an error, log for DevTools without breaking layout.
    console.error('Dates script error:', err);
  }
})();
