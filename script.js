document.addEventListener("DOMContentLoaded", () => {
  const cardList = document.getElementById("cardList");

  const modalOverlay = document.getElementById("modalOverlay");
  const modalDay = document.getElementById("modalDay");
  const modalText = document.getElementById("modalText");
  const modalClose = document.getElementById("modalClose");

  // Her günün sabit açılma tarihi (yıl, ay-1, gün)
  const unlockDates = {
    1:  new Date(2026, 7, 8),
    2:  new Date(2026, 7, 9),
    3:  new Date(2026, 7, 10),
    4:  new Date(2026, 7, 11),
    5:  new Date(2026, 7, 12),
    6:  new Date(2026, 7, 13),
    7:  new Date(2026, 7, 14),
    8:  new Date(2026, 7, 15),
    9:  new Date(2026, 7, 16),
    10: new Date(2026, 7, 17),
    11: new Date(2026, 7, 18),
    12: new Date(2026, 7, 19),
    13: new Date(2026, 7, 20),
    14: new Date(2026, 7, 21),
  };

  const totalDays = Object.keys(unlockDates).length;
  const lockedMessage = "Henüz zamanı gelmedi 🌿";

  // Her gün için not metni (şimdilik placeholder, sonra değiştirebiliriz)
  const dayNotes = {};
  for (let day = 1; day <= totalDays; day++) {
    dayNotes[day] = `Gün ${day} için not buraya gelecek.`;
  }

  function isUnlocked(day) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const unlockDate = new Date(unlockDates[day]);
    unlockDate.setHours(0, 0, 0, 0);

    return today.getTime() >= unlockDate.getTime();
  }

  function formatDate(date) {
    const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }

  function openModal(day) {
    const unlocked = isUnlocked(day);

    modalDay.textContent = `Gün ${day}`;
    modalText.textContent = unlocked ? dayNotes[day] : lockedMessage;
    modalOverlay.classList.add("active");
  }

  function closeModal() {
    modalOverlay.classList.remove("active");
  }

  for (let day = 1; day <= totalDays; day++) {
    const unlocked = isUnlocked(day);

    const card = document.createElement("div");
    card.classList.add("day-card");
    card.dataset.day = day;

    if (!unlocked) {
      card.classList.add("locked");
    }

    const cardTitle = document.createElement("p");
    cardTitle.classList.add("day-card-title");
    cardTitle.textContent = `Gün ${day}`;
    card.appendChild(cardTitle);

    if (!unlocked) {
      const dateInfo = document.createElement("p");
      dateInfo.classList.add("day-card-date");
      dateInfo.textContent = formatDate(unlockDates[day]);
      card.appendChild(dateInfo);

      const lockIcon = document.createElement("p");
      lockIcon.classList.add("day-card-lock-icon");
      lockIcon.textContent = "🔒";
      card.appendChild(lockIcon);
    }

    // Kilitli olsun ya da olmasın kart tıklanabilir
    card.addEventListener("click", () => {
      openModal(day);
    });

    cardList.appendChild(card);
  }

  modalClose.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
});