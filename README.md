# Freedium Redirector Chrome/Firefox Extension

Bu tarayıcı eklentisi, Medium.com veya Medium altyapısını kullanan sitelerdeki yazıları otomatik olarak Freedium.cfd üzerinden açmanızı sağlar.

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

Eklenti kurulduktan sonra, Medium.com veya Medium altyapılı bir siteye girdiğinizde otomatik olarak Freedium.cfd üzerinden yönlendirilirsiniz.

---

# Freedium Redirector Chrome/Firefox Extension

This browser extension automatically redirects articles on Medium.com or sites using the Medium infrastructure to Freedium.cfd for a cleaner reading experience.

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

Once the extension is installed, whenever you visit Medium.com or a site using the Medium infrastructure, you will be automatically redirected to Freedium.cfd.
