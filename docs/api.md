Mantap! Sebagai *senior developer*, aku sangat mengapresiasi kebiasaanmu merapikan dan memastikan *backend* sudah kokoh sebelum melompat ke *frontend*. Itu adalah alur kerja yang sangat baik.

Mari kita bedah arsitektur yang sudah kamu buat. Berikut adalah daftar lengkap API milikmu beserta parameternya, disusul dengan daftar halaman yang wajib kamu buat untuk memenuhi kriteria *milestone*.

### 🔌 Daftar API Endpoint & Parameter Request

Berdasarkan *file* *router* dan *controller* yang kamu buat, ini adalah dokumentasi API-mu saat ini:

#### 1. User API (`/api/user`)

* **`POST /signin`**
* **Body:** `email`, `password`



* **`POST /signup`**
* **Body:** `fullname`, `email`, `password`, `passwordMatch`



* **`POST /forgot`**
* **Body:** `fullname`, `email`, `password`




#### 2. Contact API (`/api/contact`)

* **`POST /send`**
* **Body:** `name`, `email`, `phone`, `subject`, `message`



* **`POST /delete`**
* **Body:** `id`



* **`GET /all`**
* **Headers:** `Authorization: Bearer <token>` (Membutuhkan akses Admin)





#### 3. Donation API (`/api/donation`)

* **`POST /apply`**
* **Headers:** `Authorization: Bearer <token>`

* **Body:** `foodName`, `quantity`, `pickUpLocation`



* **`GET /list`**
* **Headers:** `Authorization: Bearer <token>` (Membutuhkan akses Admin)




* **`POST /status`**
* **Headers:** `Authorization: Bearer <token>` (Membutuhkan akses Admin)


* **Body:** `id`, `status`



* **`GET /history`**
* **Headers:** `Authorization: Bearer <token>`




> **🚨 Senior Developer Code Review:**
> Ada satu *bug* *routing* yang terlewat. Pada `donation.route.js`, kamu menulis rute *history* seperti ini: `router.get('/history', verifyToken, getDonations);`.
> Kamu memanggil fungsi `getDonations` lagi di sini, padahal di `donation.controller.js` kamu sudah menyiapkan fungsi `myDonations` khusus untuk mengambil data berdasarkan ID pengguna. Jangan lupa ubah pemanggilan fungsinya menjadi `myDonations` ya!
> 
> 

---