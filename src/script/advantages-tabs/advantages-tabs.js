const advantagesTabsFirstLoad = () => {
  const advantagesTabs = document.querySelector('.our-advantages__tabs');
  const advantagesTabsContentFirstLoad = document.querySelector('.advantages-tabs__content_first-load');
  const advantagesTabsContent = document.querySelectorAll('.advantages-tabs__content');

  let visibleCount = 0;
  for (let i = 0; i < advantagesTabsContent.length; i += 1) {
    const child = advantagesTabsContent[i];
    const rect = child.getBoundingClientRect();
    if (rect.width === 0) {
      visibleCount += 1;
    }
  }

  if (visibleCount > 1) {
    advantagesTabsContentFirstLoad.classList.remove('advantages-tabs__content_first-load');
  }

  advantagesTabs.addEventListener('click', (e) => {
    const element = e.target;
    if (element.closest('.advantages-tabs__link') && advantagesTabsContentFirstLoad) {
      advantagesTabsContentFirstLoad.classList.remove('advantages-tabs__content_first-load');
    }
  });
};

export default advantagesTabsFirstLoad;
