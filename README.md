# ⌚ Wrist-AR

<p align="center">
  <h3 align="center">Real-time Wrist Augmented Reality Tracking using TensorFlow and WebGL</h3>
  <p align="center">
    Browser-based AR watch visualization powered by machine learning, computer vision, and real-time 3D rendering.
  </p>
</p>

---

## 🌌 Overview

Wrist-AR is an experimental browser-based augmented reality project that enables real-time wrist tracking and interactive 3D watch visualization directly from a device camera.

Using TensorFlow-powered hand and wrist landmark detection, the application estimates wrist position, orientation, and movement in real time, then dynamically aligns 3D watch models onto the user's hand using WebGL rendering.

The project demonstrates how modern web technologies can create immersive wearable AR experiences without requiring native mobile applications or specialized hardware.

Wrist-AR focuses on lightweight browser-native AR experimentation, combining:

- Real-time machine learning inference
- Computer vision tracking
- 3D rendering pipelines
- Web-based augmented reality interaction
- Wearable visualization systems

The entire experience runs directly in the browser using standard camera access APIs.

---

# ✨ Features

## 🧠 Real-Time Wrist Tracking

- Live wrist and hand landmark detection
- Real-time wrist orientation estimation
- Motion-aware tracking updates
- Dynamic positional alignment
- Continuous frame-by-frame tracking

## ⌚ Browser-Based AR Watch Rendering

- Interactive 3D watch visualization
- Wrist-attached model rendering
- Real-time rotational alignment
- Scaled wearable positioning
- Smooth AR movement simulation

## 🌐 Fully Web-Based

- No native app installation required
- Runs directly in supported browsers
- Instant deployment and accessibility
- Lightweight frontend architecture
- Cross-platform compatibility

## 📱 Mobile-Friendly Experience

- Optimized for mobile camera usage
- Responsive rendering pipeline
- Touch-friendly interaction
- Real-time camera integration

## 🎨 Multiple Watch Models

Includes multiple luxury-inspired watch demonstrations with individual wrist visualization pages.

## 🔧 Debugging & Visualization Tools

- Wrist landmark viewers
- Rotation alignment debugging
- Marker visualization helpers
- 3D viewer utilities
- Tracking stability testing

---

# 📸 Preview

## Wrist Tracking & AR Visualization

![Wrist AR Preview 1](https://github.com/user-attachments/assets/8da5dbab-4028-4d9d-b897-3059d7087f16)

![Wrist AR Preview 2](https://github.com/user-attachments/assets/d88bfd71-0753-448e-9467-649643992106)

---

# 🧪 Demo Utilities

The project includes visualization helpers and debugging environments for testing tracking behavior, rotation alignment, and rendering calibration.

## Marker & Helper Viewer

Used for:

- Wrist landmark visualization
- Rotation testing
- Camera alignment debugging
- 3D model inspection
- Tracking validation

### Demo

https://theneoverse.web.app/#threeviewer&&watch

---

# 🚀 Live Wrist Demos

Experience multiple watch models directly in browser-based AR mode.

## Rolex Collection

### Air-King
https://theneoverse.web.app/#wrist-demo&&air_king

### Datejust
https://theneoverse.web.app/#wrist-demo&&datejust

### Day-Date
https://theneoverse.web.app/#wrist-demo&&daydate

### Daytona
https://theneoverse.web.app/#wrist-demo&&daytona

### Deepsea
https://theneoverse.web.app/#wrist-demo&&deepsea

### Explorer
https://theneoverse.web.app/#wrist-demo&&explorer

### Explorer II
https://theneoverse.web.app/#wrist-demo&&explorer_II

### GMT-Master II
https://theneoverse.web.app/#wrist-demo&&GMT_master_II

### Lady-Datejust
https://theneoverse.web.app/#wrist-demo&&lady_datejust

### Perpetual Oyster
https://theneoverse.web.app/#wrist-demo&&perpetual_oyster

### Perpetual 1908
https://theneoverse.web.app/#wrist-demo&&perpetual-1908

### Sea-Dweller
https://theneoverse.web.app/#wrist-demo&&sea_dweller

### Sky-Dweller
https://theneoverse.web.app/#wrist-demo&&sky_dweller

### Submariner
https://theneoverse.web.app/#wrist-demo&&submariner

### Submariner Date
https://theneoverse.web.app/#wrist-demo&&submariner_date

### Yacht-Master
https://theneoverse.web.app/#wrist-demo&&yachtmaster

---

# 🧠 How It Works

The application uses computer vision and machine learning to detect wrist landmarks from a live camera feed.

Detected wrist coordinates are transformed into 3D positional data that drives the placement and orientation of wearable watch models.

The rendering system continuously updates model transformations to maintain stable wrist alignment during movement.

---

## Tracking Pipeline

### 1. Camera Initialization

The application requests access to the device camera using browser media APIs.

### 2. Wrist Landmark Detection

TensorFlow.js processes incoming video frames and identifies wrist and hand landmarks in real time.

### 3. Position Estimation

Detected wrist coordinates are converted into spatial positioning data.

### 4. Rotation Alignment

Orientation calculations estimate wrist rotation for realistic model placement.

### 5. 3D Rendering

Three.js and WebGL render the selected watch model directly onto the tracked wrist position.

### 6. Continuous Updates

Tracking and rendering update continuously every frame to maintain AR stability.

---

# 🛠️ Tech Stack

## Frontend Technologies

- JavaScript
- HTML5
- CSS3
- WebGL
- Three.js

## Machine Learning & Tracking

- TensorFlow.js
- Hand Landmark Detection
- Real-Time Pose Estimation

## Rendering

- Real-time 3D transformations
- Camera-space alignment
- Dynamic object positioning

## Deployment

- Firebase Hosting

---

# 📱 Device Compatibility

For the best AR experience:

- Use a modern Chromium-based browser
- Enable camera permissions
- Use in good lighting conditions
- Ensure the wrist remains visible to the camera
- Mobile devices are recommended

---

## Recommended Browsers

### Desktop

- Google Chrome
- Microsoft Edge
- Brave Browser

### Mobile

- Chrome for Android
- Samsung Internet
- Edge Mobile

---

# ⚙️ Local Development

## Clone Repository

```bash
git clone https://github.com/your-username/wrist-ar.git
```

## Navigate to Project

```bash
cd wrist-ar
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

---

# 📂 Project Goals

This project explores browser-native wearable AR systems and experimental web-based visualization technologies.

Main goals include:

- Real-time wearable visualization
- Lightweight web-based AR experiences
- Computer vision integration in browsers
- Machine learning-powered tracking
- Accessible AR experimentation
- Real-time 3D rendering pipelines

---

# 🔬 Debugging & Testing

The project includes several internal visualization and debugging tools.

## Available Testing Utilities

### Wrist Landmark Debugging

Visualize detected hand and wrist points in real time.

### Rotation Alignment Testing

Inspect orientation calculations and transformation accuracy.

### Marker Visualization

Validate object positioning and alignment helpers.

### 3D Model Inspection

Preview and inspect models independently from tracking systems.

### Tracking Stability Validation

Test positional consistency and rendering stability during movement.

---

# 📦 Future Improvements

Planned enhancements include:

## Tracking Improvements

- Enhanced wrist stability
- Smoother interpolation
- Better low-light performance
- Faster landmark estimation

## Rendering Enhancements

- Dynamic shadows
- Realistic lighting
- Environment reflections
- Improved material rendering

## AR Features

- Gesture interaction
- Multi-hand support
- Occlusion handling
- Advanced wearable positioning

## User Experience

- Screenshot support
- Video recording
- UI customization
- Watch selection menus

## Performance

- Mobile rendering optimizations
- Reduced inference latency
- Adaptive rendering quality

---

# 🤝 Contributing

Contributions and experimentation ideas are welcome.

You can contribute by:

- Improving wrist tracking
- Optimizing rendering performance
- Adding additional watch models
- Enhancing AR alignment
- Creating debugging tools
- Improving mobile support
- Refactoring rendering pipelines

---

# 📄 License

This project is intended for educational, experimental, and demonstration purposes.

Please ensure proper rights and permissions for any third-party assets or watch models used within derivative projects.

---

# 🌌 The Neoverse

Developed as part of immersive browser-based AR, visualization, and experimental real-time rendering research.

Focused on exploring the intersection of:

- Web-based augmented reality
- Computer vision
- Machine learning
- Interactive 3D graphics
- Real-time browser rendering
