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
    8: `Bugün biraz aşktan bahsetmek istiyorum.

Bu kelimeyi seninle konuştuğumuz zamanları düşündüm. Bana seni sevdiğini söylüyorsun ama bazen “aşk” dediğimiz şeyin bundan daha farklı, daha özel, daha kolay ayırt edilebilir bir his olması gerektiğini düşündüğünü de söylüyorsun. Sanki insan aşık olduğunda içinde yeni bir organ çıkacakmış gibi. Kalbin başka türlü atacak, dünya bir anda pembe olacak, fonda kemanlar çalmaya başlayacak falan. Belki gerçekten bazı insanlar böyle yaşıyordur, bilmiyorum. Ama ben aşkın tek bir hissi olduğuna pek inanmıyorum. Hatta zaman geçtikçe aşkın bir histen çok, bir insanın hayatının içine nasıl yerleştiğiyle ilgili olduğunu düşünmeye başladım. Çünkü sana karşı her gün aynı şeyi hissetmiyorum.

Bazen seni gördüğümde içimde saçma bir heyecan oluyor. Bazen sadece yanında oturmak istiyorum. Bazen sana sarılmak istiyorum. Bazen seni sinir etmek istiyorum. Bunda baya başarılı olduğumu düşünüyorum 😛. Bazen bir şey olduğunda anlatmak istediğim ilk kişi sen oluyorsun. Bazen hiçbir şey olmuyor ve yine de seni düşünüyorum. Bazen seni çok özlüyorum. Bazen sen yanımdayken özlediğimi bile fark etmediğim bir şeyi bulmuşum gibi hissediyorum. Bazen de sana kızıyorum, anlamıyorum seni, hatta muhtemelen içimden bu kız niye böyle ya diyorum. Ama bütün bu farklı hallerin sonunda zihnim garip bir şekilde yine aynı yere dönüyor.

Sana.

Belki benim aşk tanımım tam olarak bu. Sürekli aynı yoğun duyguyu hissetmek değil. Değişen bütün duyguların içerisinde aynı insana yeniden yönelmek. Çünkü bir insanı sevdiğinde her saniye heyecandan ölmüyorsun. Hayat devam ediyor. Ders düşünüyorsun, antrenmana gidiyorsun, yoruluyorsun, sinirleniyorsun, saçma şeylere takılıyorsun, ailevi sorunlarla boğuşuyorsun, bazen hiçbir şey hissetmeden tavana bakıyorsun. Sonra günün herhangi bir yerinde küçücük bir şey oluyor.

Yolda bir kedi görüyorum ve ilk aklıma gelen şey sen oluyorsun. Tatlı(?) ve şapşal.

Hiçbir mantıklı bağlantısı bile olmuyor bazen. Gerçekten beynimin seni her şeye bağlamasıyla ilgili sorunlarım olabilir. Ama sanırım benim için mesele de biraz burada başlıyor. Çünkü sen artık sadece sevdiğim bir insan değilsin. Hayatımı algılama biçimimin içine karışmaya başladın. Bir yere giderken “buraya onunla gelmek güzel olurdu” diye düşünüyorum.
Bir şey görünce sana göstermek istiyorum.
Komik bir şey olduğunda nasıl güleceğini düşünüyorum. Bir konuda kafam karıştığında sen ne düşünürdün diye merak ediyorum. Gelecekle ilgili bir şey hayal ettiğimde bazen farkında bile olmadan seni de o hayalin içine koyuyorum.

Kendi evime çıkmayı çok fazla istediğimi söylemiştim. Bunu her düşündüğümde artık sen aklıma gelmeye başladın. Birlikte ev hayatı yaşasak nasıl olurdu acaba. Onu düşünürken buluyorum kendimi bi anda. Erasmusa gitmek çok istiyorum. Eskiden de düşündüğüm yabancılık çekme, ortama ayak uyduramama maddi sıkıntıların yanına bi şey daha eklendi. Sen. 4 ay nasıl ayrı kalıcam yani oha. Bunu düşünürken buluyorum kendimi bi anda. Gelecek için çok şey istiyorum ve çok çalışmam gerekicek. Bunları düşünürken ya sana zaman ayıramazsam ve aramız açılırsa diye bi anda saçma şekilde kendimi anksiyete atağının içinde buluyorum. Dünyada gezip görmek istediğim yerleri (özellikle italya), seninle gitmek için düşünüyorum bi anda o tatilin en büyük parçası italya değil sen oldun artık kafamda haberin olsun.

Ve bence beni en çok etkileyen şeylerden biri şu: Bunu bilinçli yapmıyorum. Seni şimdi düşüneyim demiyorum. Sen zaten oradasın. Belki aşkın özel tarafı da budur. Yeni ve daha önce hiç hissedilmemiş büyülü bir duygu olması gerekmiyordur. Belki aşk, zaten bildiğimiz duyguların tek bir insanda başka bir anlam kazanmasıdır.

Özlemek mesela. Hayatımda başka insanları da özledim. Ama seni özlemek aynı değil.

Merak etmek. Bir sürü insanı merak ettim.
Ama gününün nasıl geçtiğini, moralinin neden düştüğünü, bugün ne düşündüğünü senin kadar merak ettiğim çok az insan oldu.

Korkmak. Bir sürü şeyden korktum. Ama seni kaybetme düşüncesinin içimde bıraktığı şey çok başka.

Mutlu olmak. Bir sürü güzel gün geçirdim. Ama brandium çıkışı otobüs beklerkenki şapsal hallerimiz gibi küçücük anların bile hafızamda bu kadar yer kaplamasını başka türlü açıklayamıyorum.

Belki sen hala aşk denen şey nasıl bir şey diye düşünüyorsun. Belki bir gün cevabını bulacaksın. Belki de bulmayacaksın. Ve açıkçası senden bana bir gün dönüp evet sonunda buldum hissettim gibi bişey söylemeni beklemiyorum. Duymak güzel olurdu ama Benim için bana hangi kelimeyi söylediğinden daha değerli şeyler var. Bana nasıl baktığın. Yanımda nasıl olduğun. Zorlandığımızda yine de kalmayı seçmen.

İnsanların onaylamamasına rağmen yine de benim için bizim için çabalaman. Benden fazla mobinge uğradın bu süreçte. Bu çok değerli ve mahcubiyet hissediyorum.

Ailelerin, mesafenin, şartların, zamanın bazen bizi zorlamasına rağmen hala birbirimize dönmenin bir yolunu aramamız. Bunları düşününce aşk benim için çok daha anlaşılır oluyor. Çünkü aşkı sana baktığımda hissettiğim tek bir duygu olarak tarif edemem. Senin yanında hissettiğim güven de onun içinde. 

Sana duyduğum özlem de.

Senden etkilendiğim anlar da.

Sana kızdığım zamanlar bile.

Seni koruma isteğim.

Sen mutlu olduğunda içimin rahatlaması.

Canın yandığında hiçbir şey yapamasam bile yanında olmayı istemem.

Hayatında güzel şeyler olduğunda senden bile fazla sevinebilme ihtimalim.

Ve belki en önemlisi:

Seni hayatımda istemem.

Sadece bugün değil. Sadece ilişkimizin güzel olduğu günlerde değil. Sadece bana sevgi gösterdiğinde değil.

Seni seni anlamakta zorlandığım günlerde de istiyorum.

Seninle anlaşamadığım günlerde de. Bazen ikimizin de yorulduğu zamanlarda da. Çünkü benim için aşk, birini yalnızca güzel hissettirdiği için istemek değil. O insanı gerçeğiyle hayatında istemek. Aşırı duyarlı olman her konuda ilk başta zorlandığım bir şeydi. Bazen kendimce zorlanıyordum. Anlamıyordum. Sorunlar yaşadık. Bazen bu yüzden diken üstünde olduğum zamanlar oldu yanlış bişey mi söylerim acaba diye. Ama zamanla seni anladım, kabullendim, ve zamanla bu senin çok güzel ve tatlı özelliklerinden biri haline geldi benim için.

Seninle beraberken sürekli kelebekler uçuşmuyor içimde.İyi ki de uçuşmuyor zaten. Düzenli anksiyeteden erken ölmek istemem.
Ama senden ayrıldığımda seni özlüyorum.
Bir süre göremeyeceğimi öğrendiğimde içim daralıyor. Daha zaman olmasına rağmen köye gidicek olmak görece sadece 2 hafta olsa bile düşündükçe üzülüyorum. Yanında olduğumda bazen hiçbir şey yapmadan oturmak bile yetiyor. Ve geleceği düşündüğümde seni kaybetmek istemediğimi biliyorum. Bazen acabalar yüzünden kaybetme korkuları yaşadığım oluyor.

Benim için bunların toplamının adı aşk. Belki seninki başka türlüdür. Belki senin aşkının nasıl bir şey olduğunu sen bile henüz bilmiyorsundur.
Belki bir gün bir anda anlarsın. Belki de hiçbir zaman işte tam olarak bu diyemezsin. Ama bunu bilmeni istiyorum:

Ben senden bir duygunun ismini kanıtlamanı beklemiyorum. 

Bana aşk kelimesini söylemen için seni zorlamak da istemiyorum. Ben senin bana karşı olan şeyinin adından çok, gerçeğiyle ilgileniyorum. Ve bir gün aşkın ne olduğunu gerçekten merak edersen benim cevabım çok basit olacak: Ben aşkı senden önce de tarif edebilirdim belki. Bir sürü güzel cümle kurardım. Ama sen hayatıma girdikten sonra tanımı biraz değişti. Şimdi aşk deyince aklıma büyük laflardan önce küçük şeyler geliyor.

Bana yaptığın cookielerden kurabiyelerden vermen.

Seni öperken gözlerimi kapamayıp karşılıklı gülmemiz.

Utandığın zaman etrafı izleyip sessizleşmen ama sonrasında bunu yaptığını fark edip hemen sırıtıp bana bakman ve ortam uygunsa öpmen.

Karşında seni arka arkaya çok fazla kırdıktan sonra pick melik yapıp karşında gözlerimin dolması.

Ve bütün bunların arasında sen geliyorsun. O yüzden belki aşkın tanımını hala bilmiyorum. Ama kime baktığımda onu anlatmak istediğimi biliyorum.

Sana.`,
    9: `Bugün sana, senin haberin olmadan hayatımda ne kadar fazla yer kapladığından bahsetmek istiyorum.

Bunu sürekli seni düşünüyorum demek için söylemiyorum. Zaten bazen gerçekten düşünmüyorum. Ya da en azından düşünmediğimi sanıyorum. Sonra gün içinde tamamen alakasız bir şey oluyor ve beynim bir şekilde yine sana bağlanıyor. Bir şarkı duyuyorum. Barış manço, opera, ajda pekkan vesaire. Direkt sen geliyorsun aklıma. Bir yerde bana en sevdiğim cipsler diye saydığın cipslerden görüyorum(patos rolls, doritos ketçaplı, nacho, mevsim yeşillikli vs.), bunu görse ağzı sulanırdı diye düşünüyorum.

Bir çift görüyorum ve istemsizce bizi düşünüyorum. Bir yerden geçiyorum, buraya beraber gelsek güzel olurdu diyorum. Mangala gittigimiz yerde dilanla burda gece yıldızları izlerken piknik yapmak güzel olurdu diyorum. Film izlemeye gittiğimizde keşke dilanla buraya gelseydim diyorum.

Bazen birisi senin kullandığın bir kelimeyi kullanıyor ve sadece o kelimeden seni hatırlıyorum. Bazen saçma bir video görüyorum ve daha videoyu bitirmeden sana atmak istiyorum.bHatta bazen bir şey komik olduğu için değil, senin ona vereceğin tepkiyi komik bulduğum için sana atmak istiyorum. Bazen bir reels görüyorum ve dilanla bunun üzerine konuşmak güzel tatlı ve komik olurdu diyorum. Bazen bu konuda tartışsak dilanı çok güzel sinir ederim diyorum. 

Ve sen bunların hiçbirinden haberdar değilsin. Ben bir yerde yürürken aklıma geliyorsun. Antrenmanda bir şey oluyor, sana anlatsam ne diyeceğini düşünüyorum. Bir şey başarıyorum, sana söylemek istiyorum. Moralim bozuluyor, seninle konuşmak istiyorum. Güzel bir manzara görüyorum ve birkaç saniyeliğine yanında olsaydın nasıl olurdu diye düşünüyorum. Beykozdaki arkadaşımın yanına gidince sahil kenarı gördüm ve dilanla sahile gitmeliyiz kesinlikle diye düşündüm.

Bence en garip tarafı şu:

Bunların hiçbirini özellikle yapmıyorum. Kendime bugün onu düşüneyim demiyorum. Sen zaten kendiliğinden geliyorsun. Hayatımın içine küçük küçük dağılmışsın. Bir şarkının arasında varsın. Bir esprinin içinde varsın. Bir sokakta varsın. Bir kokuda, bir yemekte, bazen tek bir kelimede varsın. Ve bazen sana bunları söylemiyorum bile. O an geçiyor, ben başka bir şeye devam ediyorum. Sen de o sırada kendi hayatında bambaşka bir şey yapıyorsun. Ama bilmediğin bir yerde, bilmediğin bir anda birkaç saniyeliğine benim hayatımın içinden geçiyorsun.

Bunu düşünmek bana çok garip geliyor. Çünkü bir zamanlar hayatımda hiç yoktun. Günlerimi geçiriyordum, aynı yerlere gidiyordum, aynı şarkıları dinliyordum, aynı şeyleri görüyordum. Ve bunların hiçbiri bana seni hatırlatmıyordu. Şimdi ise bazı şeyleri senden bağımsız düşünemiyorum.

Mesela keloğlan görünce duyunca aklıma birlikte izlememiz geliyor. Cikolata yerken aklima sen geliyorsun cikolata benim için senle baya özdeşleşmiş. Her zenci emoji kullandigimda seni dusunuyorum. Bacak arama bazen yastık alıyorum aklima mlsf sen geliyosun 🙄. Keşke çiğköfte de yiyebilsek senle güzel olanından. sürekli aklıma geliyor.

Sanırım bir insanın hayatına girmesi biraz böyle oluyor. Bir anda bütün hayatını değiştirmiyor. Sessizce bazı yerlere yerleşiyor. Önce bir şarkıya. Sonra bir sokağa. Sonra bir kelimeye. Sonra gününün küçücük anlarına. Ve bir süre sonra o insan yanında olmasa bile hayatının içinde onun bıraktığı küçük izlerle yaşamaya başlıyorsun.

Seninle bunu çok yaşıyorum. Özellikle uzaktayken daha da fark edicem glb. Çünkü seni göremediğim halde günümün içinde sana rastlamaya devam ediceğime eminim.

Ve sanırım insan birini gerçekten sevince hayatı tek başına yaşamayı biraz bırakıyor. Çünkü güzel bir şey olduğunda artık sadece bu çok güzel demiyorsun.bKeşke o da görseydi. diyorsun. Komik bir şey olduğunda yalnızca gülmüyorsun. Buna kesin şöyle tepki verirdi. diyorsun. Gelecekle ilgili bir şey düşündüğünde bazen cümlenin içine fark etmeden onu da koyuyorsun.

Ben seni hayatımın içine bilinçli bir şekilde her yere yerleştirmedim. Sen kendin yerleştin. Ve işin güzel tarafı bunun zamanla yaşanmasını huzurlu bir şekilde izledim. Bunu istiyomuşum hayatımda. Senin gibi birisinin hayatımda olmasını. Her anımda.

Senin haberin olmayan bütün o küçücük anlarda bile seni hatırlamak bana şunu gösteriyor:

Sen artık yalnızca yanımdayken hayatımda olan biri değilsin. Yanımda olmadığında da hayatımın içindesin.`,
    10: `Bugün sana uzun uzun bir şey anlatmak yerine, sende sevdiğim şeyleri saymak istedim.

Başta 10 tane yazayım dedim.

Sonra düşündüm ki seni 10 maddeye sığdırmaya çalışmak bayağı haksızlık olur.

O yüzden 100.

Bazıları önemli şeyler olacak, bazıları aşırı küçük ve saçma.

1. Hayata karşı çabanı.

2. Bir şeyi gerçekten istediğinde onun için uğraşmanı.

3. Yorulsan da tekrar deneyebilmeni.

4. Yumruk atarken yumruğunla kafanın aynı anda gitmesini.

5. Cesaretini.

6. Güçlü görünmeye çalışmadığın zamanlardaki halini.

7. Bana karşı gösterebildiğin hassas tarafını.

8. Bir şey seni gerçekten heyecanlandırdığında konuşma şeklini.

9. Heyecanlandığın bişeyi anlatırken çocuk gibi olmanı.

10. Gülüşünü.

11. Gerçekten güldüğünde yüzünün aldığı hali.

12. Gülerken ela gözlerinin kısılmasını.

13. Sesini.

14. Bazı kelimeleri söyleme şeklini.

15. Hayatım diyişini.

16. Artık benle özleştirdiğin garip lakapları.

17. Bana sinirlendiğinde kullandığın o tonu.

18. Ciddi bir anda gülmeni tutamayışını.

19. Utandığın zamanlarını.

20. Utandığında gözlerini kaçırmanı.

21. Gözlerini.

22. Bakışlarını.

23. Bana baktığın bazı anları.

24. Gülerken göz göze gelmemizi.

25. Saçlarını.

26. Saçlarının dokusunu.

27. Ellerini.

28. Sarılmanı.

29. Sana sarıldığımda hissettiğim huzuru.

30. Yanımda olduğunda bazen hiçbir şey yapmamızın bile yetmesini.

31. Keman çalmanı.

32. Müzikle olan bağını.

33. Bir şey öğrenirken gösterdiğin sabrı.

34. Kemanla birlikte senin de hareket etmeni.

35. Yazdığın şiirleri.

36. Kelimelerle düşündüklerini anlatabilmeni.

37. Yazdıklarının bazen bende uzun süre kalmasını.

38. Dünyaya benim görmediğim yerlerden bakabilmeni.

39. Bir konu hakkında gerçekten düşündüğünde ortaya çıkan seni.

40. Zekanı.

41. Merakını.

42. Bir şeyi öğrenmek istediğinde soru sormanı.

43. Kendi fikirlerinin olmasını.

44. Her konuda benimle aynı fikirde olmamanı.

45. Bana karşı çıkabildiğin zamanları.

46. Haklı olduğunu düşündüğünde geri adım atmamanı.

47. Bazen inanılmaz inatçı olmanı.

48. O inadına bazen aşırı sinir olmamı.

49. Ve biraz sakinleşince o tarafını da sevdiğimi fark etmemi.

50. Kendin olmanı.

51. Bana değer verdiğini hissettirdiğin küçük şeyleri.

52. Bana dubai çikolatası almanı.

53. Benim anlattığım küçücük şeyleri hatırlamanı.

54. Postitim olmayışını cümle arasında söylememe rağmen unutmamanı.

55. Beni merak etmeni.

56. Günümü sormanı.

57. Bir şeyim olduğunda anlamaya çalışmanı.

58. Bazen sadece yanımda olmanı.

59. Benimle saçmalayabilmeni.

60. Birlikte yaptığımız aptalca şakaları.

61. Bücür ve kangal lakaplarımızı.

62. Sürekli gıcıklık yapıp öpim mi demeni.

63. Bana attığın rastgele şeyleri.

64. Seninle konuşurken konunun beş dakikada tamamen başka bir yere gidebilmesini.

65. Çok ciddi bir konuşmanın ortasında bile saçmalayabilmemizi.

66. Birbirimizi sinir etme biçimimizi.

67. Sonra tekrar normale dönebilmemizi.

68. Tartışsak bile birbirimizi anlamaya çalışmamızı.

69. Zor zamanlarda tamamen kaçıp gitmemeni.

70. Bizim için çabalamanı.

71. Birlikte atlattığımız şeylerden sonra hala burada olmanı.

72. İnsanların söylediklerine rağmen kendi hislerine değer vermeni.

73. Birlikte tercih dönemini sen bunu okuduğunda eminim ki güzel bi şekilde atlatmamızı.

74. Korktuğunda bile bazen devam edebilmeni.

75. Güvensiz hissettiğin yanlarını benimle paylaşabilmeni.

76. Kusursuz olmamanı.

77. Kusursuz olmaya çalışırken bazen kendine fazla yüklenmeni.

78. Ve o zamanlarda sana kendini benim gözümden göstermek istememi.

79. Kendinde sevmediğin bazı şeyleri benim sevebilmemi.

80. Bazen kendini gördüğünden çok daha güzel bir insan olmanı.

81. Seni özlediğimde aklıma gelen küçücük detayları.

82. Vanilyalı çiçekli cennet kokunu.

83. Üç kalp şarkısının seni hatırlatmasını🙄.

84. Odamda her yerde seni görmemi.

85. Filtre kahvenin seni hatırlatmasını.

86. Bir şey gördüğümde “bunu ona göstermeliyim” diye düşünmemi.

87. Güzel bir yere gittiğimde seni de orada istememi.

88. Gelecekle ilgili bir şey düşünürken bazen fark etmeden seni de içine koymamı.

89. Seninle bu hayattaki herşeyi yapıp denemek istememi.

90. Seninle daha yaşayamadığım şeyleri bile şimdiden merak etmemi.

91. Seni ilk tanıdığım zamanki halini.

92. Şimdi tanıdığım halini.

93. Aradaki sürede bana gösterdiğin bütün farklı taraflarını.

94. Hala bilmediğim bir sürü tarafının olmasını.

95. Seni tanımaya devam edecek olmamı.

96. Bazen beni deli etmeni.

97. Ardından beş dakika sonra seni aşırı sevesimin gelmesini.

98. Hayatıma girmiş olmanı.

99. Hayatımda kalmanı istememi.

100. Ve sanırım en çok da bütün bunların tek bir insanda toplanmış olmasını seviyorum.

Seni.

Bu listeyi yarın tekrar yazsam muhtemelen bazı maddeler değişirdi. Bir ay sonra yazsam yeni şeyler eklerdim. Bir yıl sonra yazsam belki 100 yetmezdi.

Çünkü seni sevmemde güzel olan şeylerden biri de bu sanırım:

Sende sevecek yeni bir şey bulmayı hala bitirmedim.`,
    11: `Eğer bugün kendini iyi hissediyorsan, bu mektubu kapat. Cidden.

Bunu kendini yetersiz, kötü, başarısız, çirkin, güçsüz ya da bir şekilde yetmiyormuş gibi hissettiğin bir gün için yazıyorum. Belki bugün tam olarak neye canının sıkıldığını bile bilmiyorsun.

Belki bir şeyi istediğin gibi yapamadın. Belki kendini başkalarıyla kıyasladın. Belki aynaya baktın ve sevmedin. Belki bir şeyde başarısız olduğunu düşündün. Belki sadece yoruldun ve beynin sana yine acımasız davranmaya başladı.
O yüzden bunu sana o an hatırlatmak istiyorum:

Sen kendine baktığında gördüğün insanla, benim sana baktığımda gördüğüm insan her zaman aynı değil. Ve bazen keşke seni birkaç dakikalığına benim gözümden görebilseydin diyorum. Çünkü ben sana baktığımda sadece sevgilimi görmüyorum. Emek veren birini görüyorum.

Bir şeyi istediğinde onun peşinden gitmeye çalışan birini.

Korktuğu zamanlarda bile tamamen vazgeçmeyen birini.

Kickboks için verdiğin çabayı.

Bazen düştüğünde tekrar kalkabilen birini.

Bazen kalkmak istemese bile yine de deneyen birini. Ve bunlar bana çok büyük geliyor. Sen belki yaptığın şeyleri normal görüyorsun. Ne var bundadiyorsun belki. Ama ben öyle görmüyorum.

Mesela boluya gidip maça çıkman. Bunun sonucundan bağımsız olarak, bunu yapmaya çalışan kişiyi seviyorum ben. Seninle ilgili en çok saygı duyduğum şeylerden biri bu zaten.bSonucun kötü olduğunda bile seni sadece sonucunla değerlendiremiyorum.bÇünkü sen bir sınav sonucu değilsin. 

Bir maç sonucu değilsin.

Aynadaki görüntün değilsin.

Bir günlük performansın değilsin.

Birinin senin hakkında söylediği bir cümle de değilsin.

Sen bunlardan çok daha fazlasısın. Ve biliyorum, bunu sana söylemek bazen hiçbir şeyi anında düzeltmeyecek. Bazen biri sana çok iyisin dediğinde insan direkt iyi hissetmiyor. Keşke o kadar kolay olsa. Ben de sana boş boş sen mükemmelsin, düşünme bunları demek istemiyorum.

Çünkü mükemmel değilsin.

Ben de değilim.

Kimse değil.

Zaten seni sevmemin sebebi kusursuz olman da değil. Hata yaptığın zamanlarını da gördüm. Sinirlendiğini gördüm. Kendine gereksiz yere yüklendiğin zamanları gördüm. Bazen inat ettiğini, bazen saçmaladığını, bazen beni deli ettiğini de gördüm . Ve bunların hiçbiri sana duyduğum saygıyı yok etmedi.

Çünkü ben seni sadece bana iyi davrandığın zamanlardan ibaret görmüyorum. Senin kendi hayatında verdiğin mücadeleyi de görüyorum. Ailenin seni kötü etkilemelerine dayandın.

 Kötü bir gün geçirmen bunu değiştirmiyor. Bir şeyde başarısız olman bunu senden almıyor. Kendini beğenmediğin bir gün bunu değiştirmiyor.nVe birilerinin seni anlamaması da bunu değiştirmiyor.

Bir de sana kendimle ilgili bir şey söyleyeyim.bBen seninle sadece güzel olduğun için beraber değilim. sadece bana sevgi verdiğin için de değilim.

Sende, senden tamamen bağımsız olarak saygı duyduğum şeyler var.

Hayata karşı gösterdiğin çabaya saygı duyuyorum.

Sürekli hayatının her alanında çabalıyor olman. Gördüğüm en güçlü, zeki, çalışkan kadınlardan birisin. Ve belki bunu sana yeterince söylemiyorum. Seni seviyorum, evet. Ama senden aynı zamanda etkileniyorum.nSana saygı duyuyorum.bSeninle gurur duyduğum zamanlar oluyor.

Ve bazen sen kendinden şüphe ederken ben sana bakıp Bu kız kendinde gördüklerinin ne kadar azının farkında diye düşünüyorum.

Bugün beynin sana senden şüphe etmen için yüz tane sebep veriyorsa, benim de karşısına birkaç tane sebep koymamı istiyorum.

Bugün kötü olabilirsin.

Bugün yorulabilirsin.

Bugün yapamayabilirsin.

Bugün kendini sevmekte bile zorlanabilirsin. Ama bugün hissettiğin şey, senin tamamın değil.

Bunu unutma. Ve olur da bir gün gerçekten kendine inanamadığın bir noktaya gelirsen, benim sana inandığımı hatırla. Kendini benim gözümden görmek zorunda değilsin.

Ama en azından bir ihtimal olarak aklında tut:

Belki kendine karşı biraz haksızsın.

Belki sandığından daha güçlüsün.

Belki sandığından daha yeteneklisin.

Belki sandığından daha güzelsin. Ve belki bugün kendinde bulamadığın bazı şeyleri, seni seven insanlar hala çok net görebiliyor. Ben görüyorum. O yüzden bu mektubu kapatmadan önce senden tek bir şey istiyorum.

Kendine bugün hemen inanmak zorunda değilsin. Sadece kendinden tamamen vazgeçme.

Gerisini yarın tekrar düşünürsün.

Ben buradayım.`,
    12: `Bugün sana gelecekle ilgili bir şey yazmak istiyorum. 

Ama büyük bir gelecekten değil. Evlerden, evlilikten, yıllardan, çok büyük planlardan bahsetmeyeceğim. Aklımdaki şey çok daha küçük. Seninle geçireceğim sıradan bir gün. Mesela bir gün buluşmuşuz. Özel bir gün değil. Doğum günü değil, yıldönümü değil, kutlanacak hiçbir şey yok. Sadece ikimizin de boş olduğu normal bir gün.

Önce beraber bir kitapçıya girmişiz. Muhtemelen sen bir yerlere dalmışsın, ben de bir süre kendi baktığım şeylere bakıp sonra seni bulmaya gelmişim.

Sen bana bir kitap gösteriyorsun.

Bir roman.

Ben büyük ihtimalle kitabın kendisinden çok senin onu anlatırkenki halini izliyorum. Sonra sana tamam artık al şunu falan diyorum. Belki bir kafeye geçiyoruz.bSen yanında getirdiğin kitabı açıyorsun. Ben de kendi işimle uğraşıyorum. Konuşmak zorunda bile değiliz. Aynı masadayız sadece. Arada sen okuduğun bir yerden kafanı kaldırıp bana bir şey söylüyorsun. Ben sana bir şey gösteriyorum. Sonra tekrar kendi dünyalarımıza dönüyoruz. Ama birbirimizin yanındayız.

Garip şekilde gelecekle ilgili düşündüğüm şeylerin içinde en çok böyle anlar hoşuma gidiyor. 

Çünkü seninle sadece heyecanlı şeyler yaşamak istemiyorum. Sadece özel buluşmalarımız olsun istemiyorum.

Sadece birbirimizi özledikten sonra kavuştuğumuz günler olsun istemiyorum. Seni hayatımın normal tarafında da istiyorum. Birlikte hiçbir şey yapmadığımız günlerde. Canımızın sıkıldığı günlerde. İkimizin de yorgun olduğu günlerde. Birimizin konuştuğu, diğerinin sadece dinlediği günlerde. Hatta bazen yan yana olup saatlerce doğru düzgün konuşmadığımız günlerde bile.

Sonra belki sen kemanını çıkarıyorsun. Ben senden bir şey çalmanı istiyorum.

Dönülmez akşamın ufkundayız mesela.

Muhtemelen şunu çalsana diye seni darlıyorum. Sen de ya çalıyorsun ya da bana söyleniyorsun. Ben bir yerde oturup seni dinliyorum.

Belki çok iyi çalıyorsun. Belki bir yerde hata yapıyorsun ve baştan başlıyorsun. Hiç fark etmez. Ben zaten konser dinlemiyorum. Seni dinliyorum. Odağım sensin 😛.

Sonra dışarı çıkıyoruz. Bir süre yürüyoruz. Belki hava hafif soğuk. Belki hava güzel. Belki hiçbir özelliği olmayan, yüz kere geçtiğimiz bir sokaktayız.

Belki bir sahil kenarı. Bir şeyler konuşuyoruz. Sonra konu tamamen saçma bir yere geliyor.

Muhtemelen sen bana bir şey anlatıyorsun, ben seni sinir etmek için bilerek başka bir şey söylüyorum. Sen bana kızıyorsun. Ben gülüyorum.bSonra sen de gülüyorsun. Ve gün böyle bitiyor.

Büyük hiçbir şey olmadı. Hayatımızı değiştirecek hiçbir şey yaşamadık. Fotoğrafını yıllarca saklayacağımız inanılmaz bir an bile olmayabilir. Sadece normal bir gün. 

Ama ben galiba tam olarak bunu istiyorum. Çünkü şu an seninle geçirdiğim zamanların çoğu şartlara bağlı.

Ne zaman görüşebiliriz? Ne kadar kalabiliriz?Kim görür? Nereye gidebiliriz? Ne zaman tekrar görüşeceğiz? Bazen seni görmek bile plan yapılması gereken bir şey haline geliyor.

O yüzden geleceği düşündüğümde beni en çok heyecanlandıran şeylerden biri, bir gün seni görmenin bu kadar zor olmak zorunda olmaması.

Seni hiç planlanmamış bir anda, belki uzun belki kısa süresi fark etmeksizin, sırf özledim diye yanına gelip, görebilmek istiyorum. Buluşabilmek istiyorum. Bi parka oturup çekirdek kola yapmak, ara sokaklarda bos bos dolasmak. Dışarı çıkıp bir yönümüz ya da amacımız olmamasına rağmen olayların spontane gelişmesi. Hayalim.

Bir gün Bugün ne yapıyoruz? diye sorabilmek. Ve cevabımızın bazen gerçekten “hiçbir şey” olması.bSonra o hiçbir şeyi beraber yapmak. Bence bir insanla sadece büyük anları istemek kolay. Tatile gitmek, güzel yerlere gitmek, özel günleri kutlamak, unutulmaz şeyler yaşamak. Bunları seninle tabii ki istiyorum.

Ama seni gerçekten hayatımda istediğimi düşündüğüm yer bunlar değil. Ben seninle markete gitmeyi de istiyorum. Bir şey almaya çıkıp iki saat dışarıda kalmayı da. Sen kitap okurken yanında kendi işimi yapmayı da. Antrenmandan çıkıp yorgun argın bir şeyler yemeyi de.

Antrenman çıkışı birlikte çiğköfte yemek istiyorum.

Birbirimize anlatacak önemli hiçbir şeyimiz olmadığı günleri bile istiyorum. Çünkü hayatın çok büyük bir kısmı zaten böyle. Büyük anlardan değil, sıradan günlerden oluşuyor.bVe eğer bir gün hayatımın sıradanlığını biriyle paylaşacaksam.

O kişinin sen olmasını isterim.

Belki yıllar sonra bugün yazdığım bu mektubu okuyup hayal ettiğim günün ne kadar basit olduğuna güleriz. Belki de gerçekten bir gün kitapçıdan çıkarız, sen yanında yeni aldığın kitabı taşırsın, bir yerlerde otururuz, yürürüz ve eve dönerken günün ne kadar normal geçtiğini bile düşünmeyiz. Ama ben o gün geldiğinde muhtemelen içimden şunu geçiririm:

Bir zamanlar seninle böyle sıradan bir gün yaşayabilmeyi bile hayal ediyordum. Şimdi içindeyim.

Seninle sadece unutamayacağım günleri değil, unutabileceğimiz kadar sıradan günleri de istiyorum.`,
    13: `Bunu açtığında beni muhtemelen beni özledin. Umarım yani. Özledin dimi 🥺. Özlediğin zamanlar bidaha okursun özlemediysen de. Bunu da özlediğin zamanlarda açarsın.

Ama gerçekten beni özlediğin bir anda okuyorsan, önce şunu bilmeni istiyorum. Muhtemelen sen bunları hissederken:

Ben de seni özlüyorum.

Hem de sadece seni görmek anlamında değil. Yanında olmayı özlüyorum.

Sana dokunabilmeyi, sarılabilmeyi, yüzüne yakından bakabilmeyi, yan yana yürümeyi, sesini telefondan değil hemen yanımdan duymayı özlüyorum.

Bazen insan birini özlediğinde neyi özlediğini tam olarak anlatamıyor. Çünkü tek bir şey değil. Senin sadece yüzünü özlemiyorum mesela.

Kaşının üstündeki yaraya bakmayı özlüyorum.

Sana sarıldığımda nasıl hissettiğimi özlüyorum. Yan yana yürürken aramızda geçen saçma konuşmaları özlüyorum. Bir şey söylediğimde yüzünde oluşan ifadeyi özlüyorum. Bana sinirlendiğinde bile seni özlüyorum. Gerçi bunu fazla romantikleştirmeyeyim, bazı sinirlendiğin anlarda uzakta olmak belki fiziksel güvenliğim açısından avantajlı olabilir.

Ama şu an yanında olsaydım ne yapardım biliyor musun?

Muhtemelen ilk birkaç saniye hiçbir şey söylemezdim. Sadece sana sarılırdım.bÖyle hızlıca sarılıp bırakmak da değil. Bir süre bırakmazdım.bÇünkü bazen söylemek istediğim şeylerin hepsini tek bir sarılma daha iyi anlatıyor gibi geliyor. Sonra muhtemelen yüzüne bakardım.bBelki saçınla oynardım. Sonra alnından kocaman öperdim. Ve sana çok özledim seni derdim.

Muhtemelen bunu zaten yüz kere söylemiş olurdum ama bir kere daha söylerdim. Sonra hiçbir büyük plan yapmak istemezdim.bBir banka otursak yeterdi.bBiraz yürüsek yeterdi. Bir şeyler alsak, bir yerde otursak, hiçbir şey yapmasak bile yeterdi. Başka şeyler de olsa güzel olurdu 🤭.

Çünkü seni özlediğimde fark ettiğim şeylerden biri şu:

Ben senden sürekli bir şey yapmak istemiyorum. Bazen sadece varlığını istiyorum. Yanımda olduğunu bilmek yetiyor. Konuşmak zorunda bile değiliz.bSen kendi şeyinle uğraş.bBen kendi şeyimle uğraşayım. Arada sana bakayım.bSen ne bakıyosun de.

Ben de büyük ihtimalle hiç diyeyim. Halbuki gayet bir şey bakıyorum. Sana bakıyorum. Ve bunu şu an yapamamak düşündüğümden daha fazla koyuyor bana. Çünkü insan birine alışınca sadece yaptığı şeylere değil, varlığına da alışıyormuş.

Ben sana alıştım. Hayatımın belli yerlerinde seni görmeye alıştım. Sesine alıştım. Mesajlarına alıştım. Sana bir şey anlatmaya alıştım. Bir şey olduğunda aklıma gelmene alıştım. Ve şimdi arada mesafe olunca bunların hepsinin yerini daha fazla hissediyorum. Belki sen de şu an bu mektubu tam olarak o yüzden okuyorsun. Belki bugün biraz fazla özledin. Umarım. Belki bir şey seni bana götürdü. Belki de hiçbir şey olmadı. Sadece bir anda yanımda olsa keşke dedin. Umarım demişsindir. İnş yani. Boşa yazmış olmim🥺 .

Eğer öyleyse keşke olabilseydim. Gerçekten. Şu an bu kağıdın yerine ben olsam keşke. Mektubu kenara koyup sana sarılabilsem.

Keşke sana yanındayım diyebilseydim.

Ama olamıyorsam, bari bunu bırakmış olayım. Çünkü sen bu satırları okurken ben o an nerede olacağımı bilmiyorum. Ne yapıyor olacağımı bilmiyorum. Belki uyuyorum. Belki az önce senle yazışıyordum. Belki seni düşünüyorum.

Ama şundan emin olabilirsin:

Senin beni özlediğin o anda yanında olabilseydim, başka bir yerde olmayı tercih etmezdim.bVe sana bir şey daha söylemek istiyorum. Beni özlediğinde üzülmeni istemiyorum demeyeceğim.

Çünkü bence özlemek biraz üzüyor zaten. Başka türlüsü mümkün değil. Birini yanında istediğin halde yanında değilse insanın içine oturuyor. Ben de yaşıyorum bunu.

Ama özlediğinde şunu hatırla:

Bu mesafe bizim aramızdaki şey değil. Sadece şu an aramızdaki kilometre.bİkisi aynı şey değil. Sen hala benim hayatımdasın. Ben hala senin hayatındayım. Birbirimizi göremediğimiz günler, birlikte yaşadığımız şeyleri silmiyor. Sarılmadığımız günler, sana sarılmak istememi azaltmıyor. Konuşamadığımız saatler, sana anlatacaklarımı yok etmiyor. Ve seni özlemem seni benden uzaklaştırmıyor. Tam tersine, bazen hayatımdaki yerini daha fazla fark ettiriyor.

Kokunu özlüyorum uzak kalınca.

Şunu da bil:

Kavuştuğumuzda senden çok komplike bir şey istemiyorum. İlk istediğim şey muhtemelen sana uzun uzun sarılmak olacak. Sonra yüzüne bakacağım. Sonra muhtemelen yine sarılacağım. Sonra bir daha. Evet, bir süre kişisel alan kavramını kaybedebilirsin. Şimdiden özür dilerim. Ama bütün bunların altında söylemek istediğim çok basit bir şey var. Beni özlediğinde bunu tek başına yaşadığını düşünme.

Bir yerlerde ben de seni özlüyorum.bBelki aynı saniyede değil.bBelki aynı şekilde değil.bAma aynı insana doğru.

Sana.

Ve bu mektubu gerçekten beni çok özlediğin bir anda açtıysan son bir şey yap:

Gözlerini birkaç saniye kapat.nBeni karşında düşün.bYanına geldiğimi düşün.nHiçbir şey söylemeden sana sarıldığımı düşün.

Ve sana şunu söylediğimi düşün:

Az kaldı bebeğim sana gelicem. Çünkü bu sefer seni özlemek bir son değil. Kavuşana kadar geçen zaman sadece.`,
    14: `Ve geldik son nota.

Bunu yazarken bile garip geliyor çünkü bu kutuyu hazırlarken 14 gün bana inanılmaz uzun geliyor. Sen bunu okurken ise o günlerin çoğunu geride bırakmış olacağız.

İlk notta sana mesafeden bahsetmiştim. Senden uzaklaşan şeyin sadece bulunduğum yer olacağını, sana karşı hissettiklerimin değişmeyeceğini söylemiştim. Sonra günler boyunca sana farklı farklı şeyler anlattım. Sende sevdiğim tarafları, seni nasıl gördüğümü, seni özlediğimde aklımdan geçeceğini düşündüğüm şeyleri, gelecekte seninle yaşamak istediğim sıradan günleri.

Ve sen bütün bunların sonuna geldiğinde sana söylemek istediğim şey muhtemelen çok daha basit olacak: Seni görmek için sabırsızlanıyorum.

Sen bunu okurken kavuşmamıza tam olarak ne kadar kalacağını bilmiyorum ama artık günleri sayarken sayı küçülüyor olacak. Nedense son birkaç gün bana ilk günlerden bile daha uzun gelecekmiş gibi hissediyorum. İnsan bir şeye yaklaştıkça daha sabırsız oluyor galiba.

Şimdiden seni ilk gördüğüm anı düşünüyorum. Nerede olacağız bilmiyorum. Sen beni önce mi göreceksin, ben mi seni göreceğim bilmiyorum. Muhtemelen sana doğru yürürken içimden yüz tane şey geçecek ama yanına gelince hiçbirini söylemeyip direkt sana sarılacağım. Ya da eve gelirsin ve sarılmaktan bırakamam seni.

Ve büyük ihtimalle gereğinden biraz fazla uzun sarılacağım. Şimdiden söylüyorum, kaçış yok. 14 günün belki daha da fazlasının sarılma borcu olacak.

Sonra biraz geri çekilip yüzüne bakmak isteyeceğim. Çünkü fotoğraflarını görmek başka, görüntülü konuşmak başka ama seni gerçekten karşımda görmek bambaşka olacak. Yüzündeki ifadeyi, gözlerini, konuşurken yaptığın küçücük hareketleri tekrar görmek isteyeceğim.

Saçlarını okşayıp kokunu çekmek isteyeceğime eminim uzun zaman sonra.

Belki sana uzun uzun ne kadar özlediğimi anlatırım. Belki de anlatamam. Muhtemelen "özledim seni" diyip tekrar sarılırım. Zaten bu 14 not boyunca yeterince konuşmuş olacağım, biraz da yüz yüze susma hakkım var bence.

Bu iki hafta bana muhtemelen sadece seni ne kadar özlediğimi göstermeyecek. Hayatımın içinde ne kadar fazla yer kapladığını da gösterecek. Çünkü seni göremediğim günlerde bile günümün içinde olacağını biliyorum. Bir şey gördüğümde muhtemelen aklıma geleceksin, bir şey yaşadığımda sana anlatmak isteyeceğim, güzel bir şey olduğunda keşke yanımda olsan diyicem. Bazen hiçbir şey olmadan bile seni düşünücem.

Belki bu notları hazırlarken en çok istediğim şey de buydu. Sen bu günleri geçirirken yanında fiziksel olarak olamasam bile sana küçük küçük bir şeyler bırakmak. Beni özlediğinde okuyacağın, kendinden şüphe ettiğinde açacağın, bazen duygulanacağın, bazen de bu salak bana neler yazmış diye güleceğin şeyler.

Ama hepsinde aynı kişi var: sen.

Çünkü bunların hiçbirini yapmak zorunda değildim. Her gün için oturup bir şeyler yazmak zorunda değildim. Ama yapmak istedim. Seni sevmenin bende oluşturduğu şeylerden biri de bu sanırım. Sana iyi gelecek bir şey yapmak, sen yanımda yokken bile sana ulaşabilecek küçücük bir şey bırakmak istemek.

Ve sen bu sayfanın sonuna geldiğinde bile sana anlatmak istediklerimin sonuna gelmiş olmıyıcam. Hatta muhtemelen daha yeni başladığımı hissedicem. Çünkü seni tanıdıkça söylemek istediğim yeni şeyler çıkıyor. Yeni bir yanını görüyorum, yeni bir anımız oluyor, senin hakkında başka bir şey öğreniyorum ve kafamda yine sana söylemek istediğim yeni bir cümle oluşuyor.

O yüzden bu son mektup aslında pek de son değil. Sadece bundan sonrasını yazmak yerine yanında söylemek istiyorum. Yüzüne bakarak, elini tutarak, belki bir yerde yürürken, belki bir bankta otururken, belki de hiçbir özelliği olmayan sıradan bir günde.

Çünkü bu 14 gün boyunca sana yazdığım her şeyden sonra yapmak isteyeceğim şey çok basit: Seninle zaman geçirmek.

Birlikte sinemaya gitmek istiyorum.

Mesela bime girelim. Sonra bir şeyler alıp yürüyelim, bir yerde oturalım. Bana bu 14 nottan hangisini en çok sevdiğini anlat. Hangisinde duygulandın, hangisinde güldün, hangisinde bu çocuk beni seviyor dedin, hepsini bilmek istiyorum.

Sonra bana sen anlat. Bu iki haftada neler yaptın, neleri düşündün, ben yokken neler oldu. Saçma detayları bile. Çünkü seni özlerken en çok fark edeceğim şeylerden birinin, senin hayatının küçük ayrıntılarını bile bilmek istediğim olacağını düşünüyorum.

Belki de hiçbirini yapmayız, sadece yürürüz. Hiç fark etmez. Çünkü planın kendisinden çok, sonunda tekrar yan yana olduğumuz bir günün içinde olmak istiyorum.

Bu site burada bitiyor bebeğim ama sana anlatmak istediklerim bitmiyor. Bundan sonraki cümleyi mektupla değil, yanında söylemek istiyorum.

O yüzden sana son bir şey bırakıyorum. Bu sefer okuman için değil, birlikte yapmamız için:

KUPON

1 adet uzun sarılma — süre sınırı yok.
1 adet beraber kitapçı gezisi.
1 adet uzun yürüyüş.
1 adet sinemaya gitme.
1 adet senin seçtiğin şiiri karşılıklı okuma.
1 adet benden istediğin herhangi bir küçük plan.

Kullanım tarihi: Kavuştuğumuz andan itibaren.
Son kullanma tarihi: Yok.

Ve evet, kuponun şartlarını ben yazdığım için itiraz hakkın bulunmamaktadır.😛

Şaka bir yana, ilk gün senden uzaklaşırken içimde muhtemelen garip bir boşluk olacak. Sen bu son nota geldiğinde ise aynı boşluğu hissetmiyor olacağımı umuyorum. Onun yerine heyecan olacak. Çünkü artık senden uzaklaşmayı değil, sana geri gelmeyi düşünüyor olacağım.

Az kalmış olacak.

Ve seni tekrar gördüğümde bu 14 günün sonunda yapmak istediğim ilk şey muhtemelen çok basit olacak:

Sarılacağım sana.

Gerisini yanında anlatırım.`,
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