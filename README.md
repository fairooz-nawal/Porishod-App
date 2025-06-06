

# 💼 Porishod — Bill Management Web Application

**Live URL:** [https://porishod-syeda-fairooz-nawal.netlify.app/](https://porishod-syeda-fairooz-nawal.netlify.app/)

---

## 📌 Overview

**Porishod** is a modern and responsive utility **Bill Management Web App** designed to streamline the way users handle and pay for essential services like electricity, gas, water, internet, and more. Built using a powerful tech stack centered around **React** and **Firebase**, this platform focuses on ease of use, strong security, and a clean, responsive interface suitable for all devices.

With seamless user authentication, real-time balance tracking, and duplicate payment prevention, Porishod ensures utility payments are not only simpler but also more secure and organized.

---

## 🚀 Key Features

* 🔐 **User Authentication**

  * Email & Password Login/Register
  * Google Social Login
  * Forget Password (no email verification)

* 📱 **Responsive UI**

  * Fully optimized for mobile, tablet, and desktop

* 💳 **Utility Bill Management**

  * Pay for electricity, water, gas, internet, etc.
  * Secure balance-based transaction system

* 📂 **Payment History Tracking**

  * View detailed history of past bill payments

* 🔄 **Real-Time Data Display**

  * Live balance in navbar
  * Real-time updates on payment

* 🧾 **Profile Management**

  * View & update user profile

* 🧠 **Smart Validation**

  * Prevents duplicate payments for the same bill

* 🔐 **Protected Routes**

  * Role-based access using authentication

* 🧭 **Smooth Navigation**

  * React Router for seamless user experience

* 🌀 **Interactive UI Elements**

  * Carousel for feature highlights
  * Card grids for bill categories

* 🔍 **Data Filtering**

  * Filter bills based on category/type

---

## 🛠️ Technologies Used

| Category             | Tech Stack                                     |
| -------------------- | ---------------------------------------------- |
| **Frontend**         | React, TailwindCSS, SwiperJS                   |
| **Authentication**   | Firebase Authentication                        |
| **State Management** | React Context API                              |
| **Data Handling**    | JSON (for Bill Data), Firebase Realtime DB     |
| **Routing**          | React Router DOM                               |
| **Animations**       | react-awesome-reveal                           |
| **Icons**            | react-icons                                    |
| **Deployment**       | Netlify (Frontend), Firebase (Data + Auth API) |

---

## 📸 Screenshots

![Screenshot 2025-06-06 221757](https://github.com/user-attachments/assets/9d622e20-859d-4167-ab78-d2386999dc2c)
![Screenshot 2025-06-06 221827](https://github.com/user-attachments/assets/0ee558b6-1219-4a09-a701-935bd645334d)
![Screenshot 2025-06-06 221852](https://github.com/user-attachments/assets/da14e3fd-801b-42d8-95da-7b3e23eb483e)
![Screenshot 2025-06-06 221922](https://github.com/user-attachments/assets/7edf1ed6-003a-4b5b-8d41-7c4acd61d2fb)
![Screenshot 2025-06-06 222007](https://github.com/user-attachments/assets/2ce59f14-cca8-4624-92cb-d8c70df306d4)
![Screenshot 2025-06-06 222028](https://github.com/user-attachments/assets/a883606f-ce99-4790-a5bd-87d5b70bef21)

## ⚙️ How to Run Locally


```bash
# Clone the Repository
git clone https://github.com/fairooz-nawal/porishod.git
cd porishod

# Install Dependencies
npm install

# Start Development Server
npm run dev
```

> Make sure to set up Firebase credentials in a `.env.local` file (instructions below).

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory and add the following Firebase configuration:

```env
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
```

---

## 🧠 Lessons Learned

* Built real-world app structure using modular components and reusable hooks.
* Mastered Firebase Authentication and conditional routing using Context API.
* Emphasized secure payment flow logic and validation for a robust UX.
* Applied design principles to make a clean, accessible, and mobile-first UI.

---

## 📦 Future Improvements

* 🔄 Integrate real-time APIs for utility services
* 🧾 Downloadable invoice generation (PDF)
* 📊 Admin dashboard for bill tracking & analytics
* 🌐 Multi-language support (i18n)
* 💬 Push notifications for upcoming payments

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

This project is open-source and free to use under the [MIT License](LICENSE).

---

## 👤 Author

**Syeda Fairooz Nawal**
[GitHub](https://github.com/fairooz-nawal) | [LinkedIn](https://www.linkedin.com/in/syeda-fairooz-nawal-softwaredeveloper/)

---

Let me know if you'd like a matching portfolio page or demo video pitch script to go with this README!

