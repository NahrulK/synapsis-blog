<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://synapsisblog.vercel.app">
    <img src="https://synapsis.id/wp-content/uploads/2022/09/logo.png" alt="Logo" width="250">
  </a>

  <h3 align="center">Synapsis Blog | Nahrul Khayattullah</h3>

  <p align="center">
    Front End Developer Challenge | PT Synapsis Sinergi Digital
    <br />
    <h3>
    <a href="https://synapsisblog.vercel.app">View Demo</a>
    </h3>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About 💡

<a href="https://synapsisblog.vercel.app">
    <img src="https://i.ibb.co/jMXk63z/synapis-blog.png" alt="Logo" width="100%">
</a>

---

Hai, Saya Nahrul Khayattullah, Saya seorang junior front developer.

Izinkan saya untuk memaparkan sekilas mengenai repository atau aplikasi kali ini. Proyek sederhana ini merupakan web aplikasi blog yang dibuat untuk memenuhi challenge test dari PT Synapsis Sinergi Digital dalam program seleksi peserta magang Front End.

Dalam project ini, beberapa persyaratan yang diperlukan untuk aplikasi sehingga dapat dikatan sesuai berdasarkan kriteria challenge adalah sebagai berrikut :

1. Aplikasi merupakan web app blog single page aplication yang buat menggunakan NEXT.Js atau NUXT.Js
2. Menggunakan API dari [gorest.co.in](https://gorest.co.in/) untuk data dari blog.
3. Terdapat fitur-fitur :
   - Daftar Post dari Blog
   - Detail Post yang berisi user pemilik post, conten post, dan komen dari post
   - User dari API, yang dapat di CREATE, READ, UPDATE, DELETE, dan SEARCH
4. Terdapat informasi dari project melalui readme.md
5. Menghosting aplikasi melalui Vercel atau Netlify.

## Daftar Fitur

Adapun fitur-fitur sesuai ketentuan diatas dapat diakses melalui link berikut :

- [x] Daftar Post dari blog - [KLIK DISINI](https://synapsisblog.vercel.app/)
- [x] Contoh Detail Post - [KLIK DISINI](https://synapsisblog.vercel.app/posts/6859461/118844)
- [x] Daftar User - [KLIK DISINI](https://synapsisblog.vercel.app/users/list)
- [x] Membuat User - [KLIK DISINI](https://synapsisblog.vercel.app/users/create)
- [x] Contoh Edit User - [KLIK DISINI](https://synapsisblog.vercel.app/users/edit/6862165)
- [x] Search User - [KLIK DISINI](https://synapsisblog.vercel.app/users/list?name=erwin)
- [x] Delete User
- [x] Pagination

### Built With

- [![Next][Next.js]][Next-url]

<!-- GETTING STARTED -->

## Getting Started

Berikut adalah langkah-langkah yang perlu dilakukan untuk menginstall project ini di lokal komputer dan menjalankan-nya.

### Persyaratan kebutuhan

Untuk menjalankan proyek ini diperlukan terlebih dahulu untuk menginstall node package manager.

- buka terminal / command prompt dan install dengan perintah berikut :
  ```sh
  npm install npm@latest -g
  ```
  anda juga bisa melakukan download NPM melalui website resminya di - [nodejs.org](https://nodejs.org/en/download/). lakukan instalasi file hasil download.

### Instalasi

_Lakukan langkah-langkah dibawah ini untuk mulai melakukan instalasi aplikasi di lokal komputer._

1. Clone the repo aplikasi ini :
   ```sh
   git clone https://github.com/nahrulk/synapsis-blog.git
   ```
2. Masuk ke folder
   ```sh
   cd synapsis-blog
   ```
3. Lakukan instalasi dengan npm
   ```sh
   npm i 
   ```
   _atau_
   ```
   npm install
   ```
4. Buat file baru bernama `.env` dan masukan variable seperti contoh dibawah ini :
   ```js
   NEXT_PUBLIC_BASE_URL= //(masukuan API yang anda digunakan)
   NEXT_PUBLIC_TOKEN= //(masukan token anda)
   ```
   Token bisa di dapatkan dengan melakukan pendaftaran akun di website [gorest.co.in](https://gorest.co.in/) 

5. Jalankan aplikasi dengan perintah:
 - Development : 
    ```js
   npm run dev
   ```
 - Build & Production
   ```js
   npm run build
   ```
   lalu jalankan perintah
   ```js
   npm run start
   ```

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Saya juga menggunakan beberapa sumber daya yang sangat membantu dalam proyek ini, terima kasih kepada:

- [Shadcn.Ui](https://ui.shadcn.com/)
- [Headless UI](https://headlessui.com/)
- [Tailwind Css](https://tailwindcss.com/)

Dan sumber daya lainnya yang secara otomatis berada didalam 3 list package penting di atas.

<!-- MARKDOWN LINKS & IMAGES -->
---
# TERIMA KASIH

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/