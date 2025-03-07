---
title: "Bileton"
date: "7/12/2023"
description: "Bileton, bootcamp projesidir. Liderliğimde geliştirilen bir bilet satış sitesidir. Frontend, Backend ve Admin Panel içerir."
liveText: "Canlı"
codeText: "Kod"
live: "https://bileton.vercel.app/"
code: "https://github.com/emirtetik/Bileton"
---
## **Proje Hakkında**

Bileton final projesi olarak bizden istenilen bir bilet satış sitesidir. Backend ve frontend taraflı 4 kişilik ekipler halinde kendi projemizi geliştirdiğimiz admin paneli olan bir projedir.

## **Proje Özellikleri**

Bileton, kullanıcıların etkinlik biletlerini kolayca alabileceği bir platform olarak tasarlanmıştır. Projenin sunduğu bazı önemli özellikler:

- **Kullanıcı Dostu Arayüz**: MUI ve React ile modern ve kolay kullanımlı bir arayüz geliştirilmiştir.
- **Admin Panel**: Admin paneli sayesinde etkinlikler, kullanıcılar ve bilet satışları kolayca yönetilebilir.
- **Bilet Satış Süreci**: Kullanıcılar etkinlikleri gezebilir, detayları inceleyebilir ve bilet satın alabilirler.
- **Veri Yönetimi**: Redux ve Axios kullanılarak veri yönetimi yapılmış, API çağrıları ile backend ile entegrasyon sağlanmıştır.

## **Teknoloji Seçimi**

- **React ve MUI (Material UI)**: React ile hızlı ve dinamik bir kullanıcı arayüzü oluşturulmuş, MUI ile kullanıcı arayüzü bileşenleri özelleştirilmiştir.
- **Redux Toolkit**: Uygulama durumu yönetimi için Redux Toolkit tercih edilmiştir. Kullanıcı girişleri, etkinlikler ve bilet satışları gibi işlemler Redux ile yönetilmektedir.
- **Axios**: Backend API ile iletişim için Axios kullanılmıştır. Kullanıcılar etkinlikler ve biletler hakkında bilgi almak için bu API'ye isteklerde bulunabilirler.
- **Leaflet**: Harita üzerinde etkinliklerin konumlarını göstermek için Leaflet kullanılmıştır.

## **Uygulamanın Admin Paneli**

Admin paneli, yönetici kullanıcılarının tüm etkinlikleri, bilet satışlarını ve kullanıcı işlemlerini kolayca yönetmesini sağlar. Adminler etkinlik ekleyebilir, silebilir veya düzenleyebilir. Ayrıca kullanıcı ve bilet verilerini görüntüleyebilirler.

## **Kullanıcı Deneyimi**

Bileton, kullanıcı deneyimini ön planda tutarak kullanıcıların etkinlikleri hızlıca bulabilmesini ve bilet satın alabilmesini sağlar. Etkinliklerin detayları, tarihleri, fiyatları ve konumları gibi bilgileri görsel olarak sunarak, kullanıcıların en iyi etkinlikleri kolayca seçmelerine yardımcı olur.

## **Performans ve Hız**

Proje, kullanıcı deneyimini iyileştirmek için performans odaklı geliştirilmiştir. Özellikle sayfa geçişlerinde ve içerik yüklemelerinde hız ön planda tutulmuştur. `react-virtualized` gibi kütüphanelerle büyük veri setlerinin hızlı ve verimli şekilde gösterilmesi sağlanmıştır.

## **Teknolojiler**

```json
{
  "@emotion/react",
  "@emotion/styled",
  "@headlessui/react",
  "@mui/icons-material",
  "@mui/material",
  "@mui/x-data-grid",
  "@reduxjs/toolkit",
  "aos",
  "axios",
  "classnames",
  "date-fns",
  "leaflet",
  "react",
  "react-datepicker",
  "react-dom",
  "react-helmet",
  "react-icons",
  "react-leaflet",
  "react-redux",
  "react-router-dom",
  "react-share",
  "react-virtualized",
  "swiper",
  "swr"
}
