const leaveTabPanel = (e) => {
  if (e.key !== "ArrowUp") return;

  e.preventDefault();
  const closest = e.target.closest(".section");
  const activeTab = closest.querySelector(".section__nav .is--active");

  activeTab.focus();
};

const enterTabPanel = (e) => {
  if (!e.target.classList.contains("is--active")) return;
  if (e.key !== "ArrowDown") return;

  e.preventDefault();
  const closest = e.target.closest(".section");
  const tabPanelAllItems = closest.querySelectorAll(".card__item");
  const tabPanelItems = [...tabPanelAllItems].filter(
    (item) => item.classList.contains(IS_HIDDEN) === false
  );
  const cardLinks = tabPanelItems.map((item) => item.querySelector("a"));

  cardLinks[0].focus();
  cardLinks[0].addEventListener("keydown", leaveTabPanel);
};

const openLineupTabPenel = (e) => {
  if (e.target.tagName !== "BUTTON") return;

  const target = e.target;
  const targetId = target.id;
  const closest = target.closest(".section");
  const tabPanel = closest.querySelector(`[role="tabpanel"]`);
  const tabPanelItems = closest.querySelectorAll(".card__item");
  const tabs = closest.querySelectorAll(".section__nav button");

  const tabPanelData = closest.querySelectorAll(`[data-${targetId}="true"`);

  tabPanel.setAttribute("aria-labelledby", `${targetId}`);

  tabPanelItems.forEach((item) => {
    item.classList.remove(IS_SHOW);
    item.classList.add(IS_HIDDEN);
  });

  tabs.forEach((tab) => {
    if (tab !== target) {
      tab.setAttribute("aria-selected", false);
      tab.classList.remove(IS_ACTIVE);
    } else {
      tab.setAttribute("aria-selected", true);
      tab.classList.add(IS_ACTIVE);
    }
  });

  tabPanelData.forEach((item) => {
    if (item.classList.contains(IS_HIDDEN)) item.classList.remove(IS_HIDDEN);
    item.classList.add(IS_SHOW);
  });

  target.classList.add(IS_ACTIVE);
  target.setAttribute("aria-selected", true);
};
