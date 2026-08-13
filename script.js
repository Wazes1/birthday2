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
    2: `Bugün senin gücünden bahsetmek istiyorum bitanem.

Ama dışardan görünen gücünden değil, onu herkes görüyo zaten. Burnumu ne hale soktugunu gördük :(. İstediğinde sert olabildiğini herkes biliyo zaten. Ben daha çok, belki senin bile kendinde bazen fark etmediğin taraflarını seviyorum.

Yorulduğunda devam edebilmeni. Bir şey istediğin gibi gitmediğinde üzülüp yine de tekrar deneyebilmeni. Bazen çok fazla şey üstüste gelirken bile bir şekilde kendini toparlamanı. Her zaman güçlü görünmek zorunda olmadığın halde, yaşadığın şeylere rağmen devam edebilmeni.

Bence bir insanın güçlü olması hiç üzülmemesi ya da hiç kırılmaması değil zaten. Tam tersine, bir şeyin kendisini gerçekten üzdüğü halde ertesi gün tekrar kalkabilmesidir güçlü olmak. Korktuğu halde bir şeyin üzerine gidebilmektir. Yorulduğunda biraz durup sonra yeniden devam edebilmektir. Sende sevdiğim güç de tam olarak böyle.

Bazen kendine karşı çok acımasız oluyorsun bitanem. Nelerin üstesinden geldin. O kadar çok şey yapıp başarmana rağmen özellikle bolu olayında kendini olduğundan daha yetersiz gördüğünü hissediyorum. Belki o anlarda, belki de bu tercih haftasinda, sen dışardan göremiyorsun ama ben dışardan baktığımda gayet iyi görüyorum.

Yaşadığımız şeylerde de bunu çok gördüm. İnsanların karşı çıkması, onaylanmamak, aile baskıları, araya giren şeyler, belirsizlikler. Bunların hiçbiri kolay şeyler değil. Senin de yorulduğun, korktuğun ya da artık uğraşmak istemediğin zamanlar oldu belkide. Ama yine de burdasın. Ve bence bunun değerini bazen yeterince bilmiyorsun.

Sende asıl sevdiğim güç bücürüm, vurabilmekten çok yorulduğunda devam edebilmen. Herşeyi tek başına çözebilmen değil. Bazen korkarken, üzülürken, kafan karışmışken bile yeniden deneyebilmen.

Bilmiyorum belki sen kendine baktığında bunların hiçbirini düşünmüyorsundur. Ama ben sana baktığımda sadece güçlü bir kadın görmüyorum. Düştüğünde tekrar kalkabilen, sevdiği şeyler için mücadele eden ve bütün bunların arasında hala içinde çok güzel, çok hassas bir taraf taşıyan birini görüyorum.

Ve o tarafını gördüğüm için kendimi çok şanslı hissediyorum. Seni çok seviyorum.`,
    3: `Bugün sende ilk fark ettiğim şeyden bahsetmek istiyorum bitanem.

Aslında “ilk gördüğümde şunu düşündüm” diye tek bir an seçmek biraz zor. Çünkü insan birini tanıdıkça ilk zamanlarda dikkat ettiği şeylerin anlamı da değişiyor. O zaman normal gelen bazı şeyler, şimdi düşününce çok daha farklı geliyor bana.

Ama sende ilk dikkatimi çeken şey hayata karşı olan çabandı. Bunu çok söyledim. Biliyosun. Ama daha önce söylemediğim bişey söylicem burda. Gülerken dengen şaşıyo ve bazen sendeliyosun.

Bunu konuşmaya başlamadan birkaç hafta önce fark etmiştim. Ve çok tatlı gelmişti. Bilmiyorum belki farkinda değilsin ne yaptığının. Ama benim aklımda kalan cok özel bişey. Aslinda çok da büyük bişey değil. Sanırım tam da bu yüzden seviyorum bunu. Seni tanımadan önce bile sana ait küçücük bir şey dikkatimi çekmiş.

O zaman seni şu anki kadar tanımıyordum tabii.Neleri sevdiğini, neye üzüldüğünü, sinirlendiğinde nasıl olduğunu, heyecanlandığında nasıl konuştuğunu, kafana bir şey taktığında ne kadar fazla düşündüğünü bilmiyordum. Sadexe karşımdaki 156 kızı görüyodum. Ama şimdi daha fazla şey görüyorum. Arkasında cok daha fazlasını görüyorum. Dilan böyle dedi şu yüzden böyle baktı şu sebeple vesaire. Artık göz teması kurmadiginda alınmıyorum. Artık sahte gülüşlerine neden böyle yaptı demiyorum. Ya da neden telefona bakıyo sürekli 🙄. Bu senin ayıbın gerçi eşek.

Mesela gülerken dengeni kaybetmen o zaman sadece dikkatimi çeken küçük bir şeydi. Şimdi ise seni hatırlatan, sana ait olduğunu bildiğim bir şey.

Seni sevmeye ve zamanla  aşık olmaya başlayınca başta dikkatimi çeken küçük şeyler, zamanında kusur sandığım şeyler, sende sevdiğim en güzel ayrıntılara dönüştü.

Şimdi seni düşündüğümde aklıma sadece yüzün veya sesin gelmiyor. Yaptığın küçücük hareketler geliyor. Bazı kelimeleri söyleyişin, bir şeye gülerken verdiğin tepki, sinirlendiğinde yaptığın şeyler, utanınca veya heyecanlanınca değişen halin çok tatlı. Özellikle utanman. Özellikle. Utaninca çok tatlı oluyosun. Normalde gıcık bişeysin.

Zamanla seni sen yapan bu küçük şeyleri ezberlemiş gibi hissediyorum. Bazen anlamakta zorluk çektiğim de oluyor tabiki.

Bu durumun güzel yanı da başlangıçta sadece sende dikkatimi çeken küçük bişey vardı. Şimdi ise sende bakip da sevmediğim bi ayrıntı bulmak zor geliyor.`,
    4: `Bugün biraz ritmimizden bahsetmek istiyorum. Evet biz. 😛

Koşarken her zaman aynı tempoda gitmiyorsun. Bazen hızlanıyorsun, bazen yavaşlıyorsun. Bazen çok rahat hissettiğin kilometreler oluyor, bazen normalde kolay gelen bir tempo bile zorlayabiliyor. Gerçi çok da hızlı koşamıyorsun ama neysseeee 😛. Ama bunların hiçbiri koşunun kötü geçtiği anlamına gelmiyor. Sen ağlasan bile öyle. Hepsi o yolun bir parçası.Sanırım ilişkimiz de biraz böyle bitanem.

Bizim de her zaman aynı ritimde olduğumuz söylenemez. Bazen aşk dolu oluyoruz, bazen birileri birilerinin varlığına gıcık oluyor 🙄. Bazen birbirimize çok yakın olduğumuz, her şeyin çok kolay ve güzel hissettirdiği zamanlarımız oldu. Günde 8 saat konuştuk. Bazen durumlar yüzünden yavaşlamak zorunda kaldık. Bazen görüşemedik, bazen konuşmak istediğimiz kadar konuşamadık, bazen dışarıdaki şeyler ikimizi de yordu. Bazen ayrı kaldık diye mentalimiz kötü etkilendi. Bazen de hayat vuru bizi. Bu hafta olduğu gibi.Ama hiçbirinde durduğumuzu düşünmedim.Sadece ritmimiz değişti. Hayata ve koşullara ayak uydurduk.

Bizim de her günümüz mükemmel olmak zorunda değil. Her zaman aynı heyecanla, aynı enerjiyle, aynı yakınlıkta olamayabiliriz. Bazen varlığımıza gıcık da olabiliriz 🙄. Hayat bazen araya girecek. Yorulacağız, işlerimiz olacak, belki yine mesafeler girecek aramıza. Ama benim için önemli olan hızımız değil. Aynı yöne gitmeye devam etmemiz.

Çünkü seninle ilgili istediğim şey mümkün olduğunca hızlı bir şekilde bir yerlere varmak değil. Yolun kendisini seninle yaşamak istiyorum. Bazen koşarak, bazen yürüyerek, bazen durup biraz soluklanarak. Bazen de birbirimizin kafasına tekme atarak.

Ne kadar hızlı ilerlediğimizin, ne kadar sık görüşebildiğimizin ya da bazı dönemlerde ne kadar zorlandığımızın çok bir önemi yok. Her an her hafta bişeyleri aşmak bişeyleri başarmak zorunda değiliz. Her önümüze çıkan sorunu o hafta hemen halledemeyebiliriz. Bazen yavaşlarız, sendeleriz, uzun sürer bazı şeyler, ama bu geriye gitmek değil. Yeter ki sonunda yine birbirimize doğru gidiyor olalım. Yeter ki istiyor ve çabalıyor olalım.

Belki bizim ritmimiz bazen garip olacak. Bazen çok hızlanacağız, bazen hayat bizi yavaşlatacak. Ama ben seninle aynı ritmi bulmaya çalışmaktan hiç sıkılmak istemiyorum. Çünkü benim için mesele ne kadar hızlı gittiğimiz değil. Yanımda kimin olduğu.

Ve ben, yol ne kadar uzun olursa olsun, yanımda seni istiyorum. Bir ömür.`,
    5: `Bugün senin biraz daha farklı bir tarafından bahsetmek istiyorum. Kemanından.

Seni henüz gerçekten oturup keman çalarken dinleyemedim. kısa kısa duydum, anlattıklarından biliyorum ama karşına oturup hiçbir şey yapmadan sadece seni dinlediğim bir anımız olmadı. Ve garip bir şekilde bunu çok merak ediyorum. Kolunun kısa kalmasından dolayı kemanı düzgün çalamayaşını görmek istiyorum. Bana anlamadığım bir ton detay ve bilgi vermeni istiyorum. Bana keman ailesini anlamama rağmen tekrar tekrar anlatmanı istiyorum. 

Çünkü insanları sadece konuşurken tanımıyoruz. Bazen yaptıkları şeylerin içinde de onları görüyoruz. Bir şeyi nasıl sevdiklerinde, ne kadar sabır gösterdiklerinde de görüyoruz. Keman da senin için böyle bişey.

Seni çalarken nasıl biri olduğunu merak ediyorum. Çok ciddi mi oluyorsun, etrafındaki her şeyi unutuyor musun, yanlış bir notaya basınca ya da ortam cok sessiz olunca kendini tutamayıp gülüyor musun(muhtemelen), sevdiğin bir yere gelince yüzündeki ifade değişiyor mu bilmiyorum. Bunları görmek istiyorum. Seni bir müziğin içinde de tanımak istiyorum.

Belki bir gün hiçbir şey söylemeden karşında otururum. Hatta belki değil. Sözün vardı. Yeni hatırladım😛.Sen çalarsın, ben sadece seni izlerim. Hatta muhtemelen parçadan çok sana odaklanırım 😛. Sana aldığım reçineyi de kullanırsın belkii.

Ama o anın nasıl hissettireceğini gerçekten merak ediyorum. Sevdiğim insanın sevdiği bir şeyi yaparken nasıl göründüğünü görmek bana çok özel geliyor. Bir gün senden benim için bir parça çalmanı istiyorum. Belki ben de eşlik ederim. Sözle değil 🙄 merak etme. Bi çalgıyla belki.

Mükemmel çalmanı da istemiyorum. Yanlış yaparsan baştan al, ortasında gülmeye başlarsan gül, unutursan tekrar dene. Benim için önemli olan parçanın kusursuz olması değil zaten. Onu senin çalıyor olman. Çalıcağın şeyleri yüksek ihtimalle bilemicem bile.

Belki o gün sana hangi parçayı istediğimi de söylerim. Belki beraber seçeriz. Belki önden sipariş veririm öğrenmen için. Ama bildiğim tek bir şey var:

Bazı insanları konuşurken, bazılarını susarken tanıyoruz. Ben seni bir de müziğinin içinde tanımak istiyorum .`,
    6: `Bugün biraz yazdıklarından, daha doğrusu şiirlerinden bahsetmek istiyorum.

Şiir yazıyor olman beni çok etkilemişti. Sanki çok cringe gelicek ama ruh eşimi bulmuş gibi hissetmiştim. O an içimde, zamanında anlam veremediğim bir his, heyecan benzeri ama daha farklı bir his oluşmuştu. Ne demek şiir yazıyosunn. Şiir yazan ve üstüne bu kadar güzel olan birisini bulmak çok şanslı hissettirmişti. Şiirlerini gördükten sonra da dünyanın en şanslı insanı olduğum kanaatine varmistim.

Şiirlerini okurken sadece yazdığın kelimeleri okumuyordum gibi geliyor bana. Biraz seni okuyorumdum sanki. Aşırı duyarlı birisi olduğunu katliam için yazdığın şiirden anlamıştım. Aşırı çekici gelmişti.

Çünkü normalde insan her düşündüğünü, her hissettiğini olduğu gibi anlatamıyor. Bazen söylemek istediğimiz şeyler kafamızda kalıyor, bazen doğru kelimeyi bulamıyoruz, bazen de anlatmak istemiyoruz. Ama senle ilk tanıştığımızda şiirlerinin bir kısmını okuduğumda çok şey görmüştüm. Kelime seçimlerinde, bir şeyi anlatış biçiminde, bazen bir cümlenin altında bıraktığın anlamda senden bir şeyler gördüm.

Belki sen yazarken bunları düşünmüyorsun bile. Belki sadece o an aklına gelen şeyi yazıyorsun. Ama ben okurken ister istemez “Bunu yazarken ne düşünüyordu?”, “Bunu neden böyle anlattı?” diye düşündüm. Ve hoşuma gitti. Çünkü seni sadece benimle konuşurken tanımak değil, kendi kendine kaldığında aklından geçen şeylerin bıraktığı izlerden de tanımak istiyorum.

 Daha fazla düşünen, bazı şeylerin üzerinde daha fazla duran, hissettiğini doğrudan söylemek yerine başka bir şeyin arkasına saklayan bir tarafını görmüş gibi oldum. Ve bu benim çok hoşuma gitti. Sana ait bir şeyi okuyorum ve seni biraz daha anlamaya çalışıyorum.

Bir de senin kelimelerle bir şey yaratabiliyor olmanı seviyorum. Kafanda olan, kimsenin göremediği bir şeyi birkaç satırla başka bir insanın hissedebileceği hale getiriyorsun. Benim kadar olmasa da 😏. Bence bu çok güzel bir şey.

Umarım şiir yazma hobini uğraşını hiçbir zaman bırakmazsın. Umarım devam edersin. Umarım şiirini fark ederler. Şiirlerini dergilere göndermekten bahsetmiştin. Bu konuda seni sonuna kadar desteklemek için elimden geleni yapmak istiyorum. Sana ve şiirine inanıyorum.

Belki bir gün yazdığın bütün şiirleri önüme koyup tek tek okumak isterim. Hangisini ne zaman yazdığını, ne düşünerek yazdığını, bazı kelimeleri neden özellikle seçtiğini sorarım. Muhtemelen seni soru yağmuruna tutarım. Özellikle belli bir tip şiirlerinde 🙄🙄. Ama gerçekten merak ederim.

Çünkü şiirlerini okurken yalnızca yazdığın şeyi değil, o satırların arkasındaki seni de tanımaya çalışıyorum. Ve seni tanıdıkça, hakkında öğrenecek daha ne kadar çok şeyim olduğunu fark etmek hoşuma gidiyor.

Seni konuşurken tanıyorum. Seni yanımdayken tanıyorum. Ama seni bir de yazdıklarının arasında tanımayı seviyorum.`,
    7: `Bugün seni biraz garip bir şekilde anlatmak istiyorum. Bir kitap olsaydın nasıl bir kitap olurdun diye düşündüm. Korku kitabı 😛.

Bence ilk sayfalarından tamamen anlaşılabilen bir kitap olmazdın. Seni ilk tanıdığımda da böyleydi zaten. İlk bakışta gördüğüm bir sen vardı, sonra tanıdıkça onun altında başka taraflarını görmeye başladım. Farklı yönlerini gördüm.

Başlangıcın merak uyandırırdı. İnsana devamını okuma isteği veren ama ileride neyle karşılaşacağını pek belli etmeyen bir başlangıç olurdu. Çünkü seninle ilgili de ilk zamanlarda böyle hissettim. Seni merak ettim. Ne düşündüğünü, bazı şeylere neden öyle tepki verdiğini, nasıl biri olduğunu daha fazla öğrenmek istedim.

Sonra bazı sayfaların çok kolay okunurdu.
Güldüğün, mutlu olduğun, heyecanlandığın zamanlar gibi. Özellikle yanımda saatlerce susmayıp konuştuğun benim de izledigim sayfalar.

Bazı sayfalarınsa biraz daha dikkat isterdi.
Belki sustuğun zamanlar. Bir şey olduğunda hemen anlatmadığın, kendi içinde düşündüğün zamanlar. İlk seferde anlayamadığım ama seni tanıdıkça anlamını daha iyi gördüğüm yerler. Sanırım seni tanırken en çok bunu öğrendim.Her şeyini ilk anda anlayamayacağımı. Çünkü insanları direkt anlayabildiğime, neler söylediklerini, niye söylediklerini bilebildiğime inanırım. Sende bu iş pek öyle olmadı. Bazen seni gerçekten anlamak için sadece söylediğin şeyi değil, söylemediğin şeyi de dinlemem gerektiğini anladım. Ve bu kötü bir şey değil. Tam tersine seni tanımayı güzel yapan şeylerden biri. Bazen seni anlamakta zorlansam da o anlarda daha da fazla anlamaya çalışıyorum. Bu aslında derin bi insan olduğunu gösteriyor. Ve seni tanımak, hergün seninle ilgili bilgiler öğrenmek, çok güzel bişey.


Bazı kitapları bir kere okursun ve biter. Hikayesini öğrenirsin, kapağını kapatırsın ve bir daha dönmezsin. Sen öyle olmazdın. Bazı sayfalarını tekrar okumak isterdim. Bazı sayfalarına postit yapıştırmak isterdim. Bir yerde daha önce fark etmediğim küçücük bir ayrıntıyı ikinci okuyuşumda görüp Bunu nasıl fark etmemişim derdim. Bazı sayfaların gıcık ederdi. Bazen duygulandirir. Bazen güldürürdü. Bazı yerlerde Niye böyle yaptın şimdi diye söylenirdim. Ama kitabı kapatmazdım. Çünkü devamını merak ederdim. Belki en sevdiğim tarafı da bu olurdu. Sonunun henüz yazılmamış olması.

Çünkü sen hala değişiyorsun, öğreniyorsun, büyüyorsun. Ben de seni tanımaya devam ediyorum. Şu an bildiğim senle birkaç yıl sonraki sen tamamen aynı olmayacak. Birlikte büyüyüp, öğrenip, deneyimliyoruz. Ve buna sahip olduğumuz için çok şanslı hissediyorum.`,
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