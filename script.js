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

  // Her gün için not metni
  const dayNotes = {
    1: `Bugün sana yazacağım ilk notu açıyorsun. Tekrardan doğum günün kutlu olsun bebeğim. Bugün yanında olmak isterdim. Seninle olmak isterdim. Keşke bu notu yürürken okusaydım, birlikte bir bankta otururken anlatsaydım ya da sadece sen okurken yüzündeki ifadeyi izleyebilseydim. Belki de bu yüzden, birlikte geçiremeyeceğimiz bu günlerde benden, kalbimden bir parçayı yanında hisset diye bu notları hazırladım.

Belki bugün çok farklı hissetmeyeceksin. Normal bir gün olacak senin için. Ama eğer bir an aklına gelirsem, bil ki aynı anda sen de benim aklımdasın. Aklımda ve kalbimde kocaman bir yerin var. İnsan sevdiğini düşünmek için özel bir sebep aramıyor. İnanılmaz rastgele şeyler seni hatırlatıyor, deliriyorum glb :(

Normalde istanbulda olduğumda da çok rahat ya da sık görüşemiyoruz, evet. Ama seninle aynı havayı soluyor olmak, antrenmanlarda seni görüyor olmak bile az da olsa yetiyor. Bu süreçte bunların eksikliğini yaşayacağım.
Eskiden köye giderken internet eksikliği, eve kapanmış olmak, rutinden çıkmak, tek kalamamak gibi dertlerim vardı. Şu an ise tek derdim ve aklımda olan şey sensin. Çok bağlandım. 2 hafta bile çok uzun geliyor. Erasmus düşünürken eskiden ne yaparım, nasıl yaparım, bilmediğim yer vs. diye düşünüyordum. Şimdi ise tek düşüncem var: Senden bu kadar nasıl ayrı kalacağım? Çok değerlisin benim için.

Bu olay şehir dışına gitme isteğini bana hatırlattı. Evet, ayrı olabiliriz mesafe olarak, ama kalbimde hep sen olacaksın. Sana olan sevgimi, özlemimi ya da seni hayatımda istememi hiçbir mesafe değiştiremiyor. Gözden uzak olan gönülden de uzak olur derler. Baya boş yapmış lavuklar. Seninle çok şey yaşadık bu kısa sürede. Seninle insanların karşı çıkmalarına, engel olmaya çalışmalarına, aile baskılarına, tercih dönemindeki bütün olaylara dayandık. Hepsini atlattık. Atlatmaya, her şeye rağmen birbirimize inanmaya çabalamaya devam ediyoruz. Bu, ilişkimizi olgunlaştırmaya devam ediyor ve her olaydan, her zorluktan sonra daha da yakınlaşıyoruz. Benim parçamsın ve seni hiçbir mesafe benden ayıramaz.

O yüzden ilk notumda sana şunu söylemek istedim:

Ben buradayım. Ve her zaman da olacağım. Yeter ki iste.`,
    2: `Gün 2 için not buraya gelecek.`,
    3: `Gün 3 için not buraya gelecek.`,
    4: `Gün 4 için not buraya gelecek.`,
    5: `Gün 5 için not buraya gelecek.`,
    6: `Gün 6 için not buraya gelecek.`,
    7: `Gün 7 için not buraya gelecek.`,
    8: `Gün 8 için not buraya gelecek.`,
    9: `Gün 9 için not buraya gelecek.`,
    10: `Gün 10 için not buraya gelecek.`,
    11: `Gün 11 için not buraya gelecek.`,
    12: `Gün 12 için not buraya gelecek.`,
    13: `Gün 13 için not buraya gelecek.`,
    14: `Gün 14 için not buraya gelecek.`,
  };

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
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
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