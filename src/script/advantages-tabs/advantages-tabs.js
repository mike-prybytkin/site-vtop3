const advantagesTabsFirstLoad = () => {
  const advantagesTabs = document.querySelector('.our-advantages__tabs');
  const advantagesTabsContentFirstLoad = document.querySelector('.advantages-tabs__content_first-load');
  const advantagesTabsContent = document.querySelectorAll('.advantages-tabs__content');

  const removeFirsLoadClass = () => {
    advantagesTabsContentFirstLoad.classList.remove('advantages-tabs__content_first-load');
  };

  let visibleCount = 0;
  for (let i = 0; i < advantagesTabsContent.length; i += 1) {
    const child = advantagesTabsContent[i];
    const rect = child.getBoundingClientRect();
    if (rect.width !== 0) {
      visibleCount += 1;
    }
  }

  if (visibleCount > 1) {
    removeFirsLoadClass();
  }

  advantagesTabs.addEventListener('click', (e) => {
    const element = e.target;
    if (element.closest('.advantages-tabs__link') && advantagesTabsContentFirstLoad) {
      removeFirsLoadClass();
    }
  });
};

export default advantagesTabsFirstLoad;
