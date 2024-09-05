function opentab(tabId) {
  // Get all tab links and tab contents
  const tabLinks = document.querySelectorAll('.tab-links');
  const tabContents = document.querySelectorAll('.tab-contents');

  // Remove 'active' class from all tab links
  tabLinks.forEach((link) => {
      link.classList.remove('active');
  });

  // Hide all tab contents
  tabContents.forEach((content) => {
      content.style.display = 'none';
      content.classList.remove('active-tab');
  });

  // Add 'active' class to the clicked tab link
  const clickedTabLink = document.querySelector(`.tab-links[onclick="opentab('${tabId}')"]`);
  clickedTabLink.classList.add('active');

  // Show the corresponding tab content
  const clickedTabContent = document.getElementById(tabId);
  clickedTabContent.style.display = 'block';
  clickedTabContent.classList.add('active-tab');
}