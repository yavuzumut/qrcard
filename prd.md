# 🚀 PRD: QR VCF (Dijital Kartvizit) Oluşturucu

| Meta Veri | Detaylar |
| :--- | :--- |
| **Ürün Sahibi** | Umut |
| **Tarih** | 11 mart 2026 |
| **Durum** | Taslak (Draft) |
| **Versiyon** | 1.0 |

---

## 1. Ürün Özeti (Executive Summary)
Bu uygulama, kullanıcıların herhangi bir üyelik veya zorunlu alan gerektirmeden, kişisel iletişim ve sosyal medya bilgilerini içeren bir **dijital kartvizit (VCF)** oluşturmalarını sağlayan mini bir web aracıdır. Kullanıcı verileri girdiği anda tarayıcı üzerinde bir **QR Kod** üretilir ve bu kod taratıldığında bilgiler karşı tarafın rehberine otomatik olarak eklenir.

## 2. Hedef Kitle (Target Audience)
* **Öğrenciler:** Sosyal medya hesaplarını tek bir karekodla paylaşmak isteyenler.
* **Freelancerlar:** Müşterilerine hızlıca iletişim bilgilerini vermek isteyenler.
* **Etkinlik Katılımcıları:** Fiziksel kartvizit taşımadan network yapmak isteyenler.

## 3. Kullanıcı Hikayeleri (User Stories)

| Rol | İstek | Amaç |
| :--- | :--- | :--- |
| **Kullanıcı** | Sadece adımı yazıp diğer alanları boş bırakabilmek istiyorum. | Hızlıca sadece gerekli bilgiyi paylaşmak için. |
| **Kullanıcı** | GitHub, LinkedIn ve X profillerimi eklemek istiyorum. | Profesyonel ağımı paylaşmak için. |
| **Kullanıcı** | "Oluştur" dediğimde anında QR kod görmek istiyorum. | Beklemeden paylaşım yapabilmek için. |
| **Ziyaretçi** | QR kodu telefonumla okutmak istiyorum. | Kişiyi tek tuşla rehberime kaydetmek için. |

## 4. Teknik Gereksinimler & Özellikler

### A. Veri Giriş Formu (Input)
Uygulama tek sayfalık bir yapıya sahip olacaktır. Aşağıdaki alanları içermelidir:
> **Kritik Kural:** Hiçbir alan "Zorunlu" (Required) değildir. Boş bırakılan alanlar VCF dosyasında yer kaplamamalıdır.

* **Kişisel:** Ad, Soyad, Telefon, E-posta, Unvan/Şirket.
* **Sosyal Medya:** LinkedIn URL, GitHub URL, Instagram URL, X (Twitter) URL, Website URL.

### B. VCF (vCard) Motoru (Logic)
* Girilen veriler, istemci tarafında (client-side) `vCard 3.0` standartlarına uygun bir metin bloğuna dönüştürülecektir.
* **Örnek VCF Yapısı:**
  ```vcard
  BEGIN:VCARD
  VERSION:3.0
  N:Yılmaz;Umut;;;
  FN:Umut Yılmaz
  TEL;TYPE=CELL:+905551234567
  URL;TYPE=GitHub:[https://github.com/](https://github.com/)
  END:VCARD