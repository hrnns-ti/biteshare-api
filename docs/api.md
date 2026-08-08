### List of API Endpoint & Parameter Request

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
* **Headers:** `Authorization: Bearer <token>` (Admin level access)





#### 3. Donation API (`/api/donation`)

* **`POST /apply`**
* **Headers:** `Authorization: Bearer <token>`

* **Body:** `foodName`, `quantity`, `pickUpLocation`



* **`GET /list`**
* **Headers:** `Authorization: Bearer <token>` (Admin level access)




* **`POST /status`**
* **Headers:** `Authorization: Bearer <token>` (Admin level access)


* **Body:** `id`, `status`



* **`GET /history`**
* **Headers:** `Authorization: Bearer <token>`
---