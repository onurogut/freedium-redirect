# Freedium Redirector Chrome/Firefox Extension

Bu tarayıcı eklentisi, Medium.com veya Medium altyapısını kullanan sitelerdeki yazıları otomatik olarak Freedium.cfd üzerinden açmanızı sağlar.

## Özellikler

- Artık otomatik yönlendirme yok.
- Eğer bir yazı sadece üyeler içinse veya giriş yapmış olsanız bile "Become a member to read this story, and all of Medium." veya "Create an account to read the full story." mesajı çıkıyorsa, bu mesajın hemen altına "Read it via Freedium" butonu eklenir.
- Butona tıkladığınızda yazı Freedium üzerinden yeni sekmede açılır.

## Kurulum

### Chrome için

1. Bu repoyu bilgisayarınıza indirin (veya doğrudan .zip olarak da indirebilirsiniz)
2. Chrome tarayıcınızda `chrome://extensions/` adresine gidin
3. Sağ üst köşedeki "Geliştirici modu"nu aktif edin
4. "Paketlenmemiş öğe yükle" butonuna tıklayın
5. İndirdiğiniz klasörü seçin

### Firefox için

1. Bu repoyu bilgisayarınıza indirin (veya .zip olarak indirin ve çıkarın)
2. `manifest_firefox.json` dosyasının adını `manifest.json` olarak değiştirin
3. Firefox'ta adres çubuğuna `about:debugging#/runtime/this-firefox` yazıp enter'a basın
4. "Geçici Eklenti Yükle" butonuna tıklayın
5. Klasörünüzdeki yeni `manifest.json` dosyasını seçin

## Kullanım

Eklenti kurulu iken, Medium'da bir yazı okurken aşağıdaki mesajlardan biriyle karşılaşırsanız:
- "Create an account to read the full story."
- "Become a member to read this story, and all of Medium."

Bu mesajın hemen altında "Read it via Freedium" butonu çıkar. Butona tıklayarak yazıyı Freedium üzerinden okuyabilirsiniz.

---

# Freedium Redirector Chrome/Firefox Extension (English)

This browser extension allows you to easily read Medium.com articles via Freedium.cfd.

## Features

- No more automatic redirects.
- If you see a paywall message like "Create an account to read the full story." or "Become a member to read this story, and all of Medium.", a "Read it via Freedium" button will appear right below that message.
- Clicking the button opens the article in Freedium in a new tab.

## Installation

### For Chrome

1. Download this repository to your computer (or download it directly as a .zip file)
2. Go to `chrome://extensions/` in your Chrome browser
3. Enable "Developer mode" in the top right corner
4. Click the "Load unpacked" button
5. Select the folder you downloaded

### For Firefox

1. Download this repository to your computer (or download and extract the .zip file)
2. Rename the `manifest_firefox.json` file to `manifest.json`
3. Go to `about:debugging#/runtime/this-firefox` in your Firefox browser
4. Click the "Load Temporary Add-on" button
5. Select the new `manifest.json` file in your folder

## Usage

While reading an article on Medium, if you see one of these paywall messages:
- "Create an account to read the full story."
- "Become a member to read this story, and all of Medium."

a "Read it via Freedium" button will appear right below the message. Click the button to read the article via Freedium.


