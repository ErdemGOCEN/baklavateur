# Baklavateur v4.26

## Çalıştırma ve performans ölçümü

```sh
npm install
npm start
```

http://localhost:5173/tr adresinde Lighthouse çalıştırabilirsiniz. `npm start`, üretim sürümünü derler ve sunar. Geliştirme için `npm run dev` kullanılır; geliştirme puanı üretim puanı değildir.

## Görsel temizliği

Aynı fotoğrafın asıl, 360 px ve 720 px kopyaları arasından dosya boyutu en küçük olan tutuldu. Tüm bağlantılar tek kopyaya yönlendirildi; eski varyant klasörleri kaldırıldı. Birbirinden farklı galeri fotoğrafları korundu. Görseller WebP, video yaklaşık 2,1 MB MP4 ve 0,75 oynatma hızındadır.

## Paket

ZIP, kaynak kodu ve public içindeki tekil medya dosyalarını içerir. Görsellerin ikinci kez bulunmaması için dist ve node_modules eklenmez. `npm run build` hazır HTML içeren 412 sayfayı ve dist klasörünü yeniden oluşturur.

Yeni Lighthouse puanı burada ölçülmedi.
