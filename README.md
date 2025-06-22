# TaskManagerApp

A clean and functional **Task Manager App** built with **React Native CLI** and **TypeScript**, featuring offline storage using **Realm DB**, task filtering, and a polished UI with card-style task items.

---

## 🚀 Features

- ✅ **View Tasks** — List all tasks with status labels
- ➕ **Add New Tasks**
- 🔁 **Toggle Task Status** (Completed / Pending)
- ❌ **Delete Tasks**
- 🔍 **Filter Tasks**:
  - All
  - Completed
  - Pending
- 🗂️ **FlatList** for performance with large lists
- 💾 **Offline Storage with Realm DB**
- ⚛️ **Context API for State Management**
- 🎨 **Modern Card UI for Tasks**
- 🧱 **TypeScript + Functional Components**

---

## 📁 Folder Structure

```
TaskManagerApp/
├── src/
│   ├── components/        # Reusable UI components
│   ├── context/           # Global state with Context API
│   ├── db/                # Realm DB setup
│   ├── screens/           # App screens
│   ├── types/             # TypeScript interfaces
├── App.tsx                # Entry point
```

---

## 📦 Tech Stack

- **React Native CLI**
- **TypeScript**
- **Realm DB**
- **Context API**
- **@react-native-community/checkbox**
- **@react-native-picker/picker**

---

## 🔧 Getting Started

### ✅ Prerequisites

Ensure the following are installed:

- Node.js (LTS)
- npm or yarn
- React Native CLI
- Android Studio / Xcode (for emulators)
- JDK & Android SDK

---

### 📥 Installation

```bash
# Clone this repository
git clone https://github.com/ParthRaval1970/TaskManagerApp.git
cd TaskManagerApp

# Install dependencies
npm install
# or
yarn
```

---

### 📱 Running the App

#### 📲 Android

```bash
npx react-native run-android
```

#### 🍏 iOS (macOS only)

```bash
cd ios && pod install && cd ..
npx react-native run-ios
```

---

## 🧪 Optional Enhancements

- ⏰ Task due dates or reminders
- 🔔 Push/local notifications
- 📂 Task categorization by tags or priority
- 🌙 Light/Dark mode toggle
- ✨ Animations or swipe gestures for delete

---

## 🤝 Contributing

Contributions are welcome!  
Please fork the repo and submit a pull request for any improvements or features.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Parth Raval**  
🔗 [GitHub](https://github.com/ParthRaval1970)  
📧 parth.raval1970@gmail.com