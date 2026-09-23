# 🚀 ShopNexus: Personal Work Documentation & Contribution Portfolio

**Student / Member Name:** Shahriar Kabir  
**Role:** Full-Stack & Telemetry Systems Engineer  
**Track:** Real-Time Telemetry, Live Visitor Analytics, Cross-Tab Auth & Bilingual Engine  
**Personal Branch:** `mdshariarkabir`  
**GitFlow Lifecycle:** `mdshariarkabir` ➔ `dev` (Code Review & PR Merge) ➔ `main` (Production Release)  
**Project:** ShopNexus — Next-Gen E-Commerce & AI Commerce Ecosystem  

---

### 🌐 Production & Repository Quick Access

| Resource | Branch / Access Link | Description |
| :--- | :--- | :--- |
| ⚡ **Live Production App** | [shop-nexus-frontend-ten.vercel.app](https://shop-nexus-frontend-ten.vercel.app) | Live Cloud Deployment (Vercel) |
| 🌿 **My Personal Branch (Frontend)** | [Branch: `mdshariarkabir`](https://github.com/Saad7528/ShopNexus-Frontend/tree/mdshariarkabir) | Personal Telemetry & Auth Sync Commits |
| 🌿 **My Personal Branch (Backend)** | [Branch: `mdshariarkabir`](https://github.com/Saad7528/ShopNexus-Backend/tree/mdshariarkabir) | Personal Serverless Telemetry Commits |
| 🔄 **Development Branch (`dev`)** | [Frontend `dev`](https://github.com/Saad7528/ShopNexus-Frontend/tree/dev) / [Backend `dev`](https://github.com/Saad7528/ShopNexus-Backend/tree/dev) | Team Integration & Staging |
| 🚀 **Production Branch (`main`)** | [Frontend `main`](https://github.com/Saad7528/ShopNexus-Frontend/tree/main) / [Backend `main`](https://github.com/Saad7528/ShopNexus-Backend/tree/main) | Production Release on Vercel |

---

## 📑 Table of Contents
1. [Executive Summary & Role Definition](#1-executive-summary--role-definition)
2. [Special Differentiator Features Owned](#2-special-differentiator-features-owned)
3. [Core Technical Architecture & Telemetry Pipeline](#3-core-technical-architecture--telemetry-pipeline)
4. [Comprehensive Codebase & File Mapping](#4-comprehensive-codebase--file-mapping)
5. [Step-by-Step Implementation Timeline](#5-step-by-step-implementation-timeline)

---

## 1. Executive Summary & Role Definition

As the **Full-Stack & Telemetry Systems Engineer** for ShopNexus, I was responsible for engineering real-time platform observability, multi-tab session synchronization, hardware-precision visitor analytics, and the zero-delay bilingual localization engine.

> [!NOTE]
> My core architectural goal was to eliminate session desynchronization across multi-tab browsing while delivering real-time telemetry analytics without costly third-party subscriptions.

### 🎯 Key Performance Indicators (KPIs):
* **Heartbeat Telemetry Frequency:** 10-second non-blocking telemetry beacons via `navigator.sendBeacon()`.
* **Zero-Reload Localization:** 0ms instantaneous switching between English and Bengali across 100% of DOM nodes.
* **Multi-Tab Sync Latency:** Instant cross-tab broadcast dispatching via HTML5 BroadcastChannel API.
* **Hardware Detection Accuracy:** Automated client hardware recognition (iPhone, Samsung Galaxy, Xiaomi MIUI, iPad, Desktop).

---

## 2. Special Differentiator Features Owned

### 🌟 1. Real-Time Hardware-Precision Visitor Telemetry
* **Problem Statement:** Gaining instant visibility into live storefront traffic, visitor devices, and session duration without third-party tracking delays.
* **Solution Developed:**
  - Built `StorefrontTelemetryTracker.tsx` which transmits heartbeat signals at 10-second intervals.
  - Implemented user-agent regex parsing to identify specific hardware devices (iPhone, Samsung Galaxy, Xiaomi MIUI, iPad, Desktop).
  - Integrated `navigator.sendBeacon()` on page unload and visibility changes to ensure reliable exit event transmission even when users close browser tabs abruptly.
* **Code Reference:** `src/components/analytics/StorefrontTelemetryTracker.tsx`, `src/app/api/telemetry/heartbeat/route.ts`, `src/store/useVisitorAnalyticsStore.ts`.

### 🌟 2. 100% Real-Time Bilingual Localization Engine
* **Problem Statement:** Providing native Bengali language support for local consumers alongside English, with instantaneous switching and zero page reload.
* **Solution Developed:**
  - Developed `useLanguageStore.ts` with local storage persistence and reactive state broadcasting.
  - Translated all storefront and admin strings into natural Bengali terminology.
  - Built a one-click language toggle in the navigation header that updates the entire DOM tree in zero milliseconds without triggering full page refresh.
* **Code Reference:** `src/store/useLanguageStore.ts`, `src/components/layout/Navbar.tsx`.

### 🌟 3. Cross-Tab Authentication Synchronization
* **Problem Statement:** Preventing security and state inconsistencies when a user logs in, logs out, or switches accounts across multiple open browser tabs.
* **Solution Developed:**
  - Integrated the `BroadcastChannel('shopnexus_auth_sync')` API within `useAuthStore.ts`.
  - Configured message dispatchers for login, logout, and token expiration events.
  - Open tabs listen to the broadcast channel and update their authentication state and navigation elements immediately.
* **Code Reference:** `src/store/useAuthStore.ts`, `src/components/auth/AuthBackground.tsx`.

### 🌟 4. Live Visitor Geolocation Console
* **Problem Statement:** Giving store administrators real-time insights into active user traffic and geographic distribution across Bangladesh.
* **Solution Developed:**
  - Designed the admin dashboard at `src/app/admin/visitors/page.tsx` displaying live visitor counts, bounce rates, and regional traffic (Dhaka, Chittagong, Sylhet, Rajshahi, Khulna).
  - Integrated device distribution charts, active sessions counter, and session duration metrics.
* **Code Reference:** `src/app/admin/visitors/page.tsx`, `src/app/api/telemetry/live-sessions/route.ts`.

---

## 3. Core Technical Architecture & Telemetry Pipeline

### 🏗️ Telemetry & Multi-Tab Observability Pipeline

| Pipeline Layer | Core Technologies & Components | Primary Responsibility |
| :--- | :--- | :--- |
| **Telemetry Beacon** | `navigator.sendBeacon()`, React `useEffect` | Non-blocking Heartbeat Dispatch & Page-Exit Capture |
| **Inter-Tab Bus** | HTML5 `BroadcastChannel` API | Multi-Tab Auth State Sync & Immediate Session Termination |
| **Localization Engine**| Zustand (`useLanguageStore.ts`) | Reactive Dictionary Mapping (EN / BN) with Zero-CLS |
| **Admin Observability**| Serverless Telemetry Routes & Recharts | Real-Time Visitor Geospatial Heatmap & Device Diagnostics |

---

## 4. Comprehensive Codebase & File Mapping

| Category | File Path | Functional Responsibility |
| :--- | :--- | :--- |
| **Live Visitors Console** | `ShopNexus-Frontend/src/app/admin/visitors/page.tsx` | Active visitor counters, device charts, city metrics |
| **Storefront Tracker** | `ShopNexus-Frontend/src/components/analytics/StorefrontTelemetryTracker.tsx` | Heartbeat dispatcher and hardware parser |
| **Telemetry Store** | `ShopNexus-Frontend/src/store/useVisitorAnalyticsStore.ts` | Active session state and hardware analytics |
| **Bilingual Store** | `ShopNexus-Frontend/src/store/useLanguageStore.ts` | Localization dictionary and language switch logic |
| **Auth Sync Store** | `ShopNexus-Frontend/src/store/useAuthStore.ts` | BroadcastChannel events and multi-tab session sync |
| **Heartbeat Endpoint** | `ShopNexus-Frontend/src/app/api/telemetry/heartbeat/route.ts` | Serverless telemetry receiver and session storage |
| **Live Sessions API** | `ShopNexus-Frontend/src/app/api/telemetry/live-sessions/route.ts` | Active sessions aggregator endpoint |
| **User Profile Hub** | `ShopNexus-Frontend/src/app/profile/page.tsx` | Profile settings, avatar selector, address management |

---

## 5. Step-by-Step Implementation Timeline

| Milestone / Sprint | Phase Scope | Key Deliverables & Achievements |
| :--- | :--- | :--- |
| **Sprint 1 (Week 1)** | Auth & Profile Base | Built `useAuthStore`, user profile view, and avatar selection component. |
| **Sprint 2 (Week 2)** | Multi-Tab Sync | Implemented `BroadcastChannel` auth synchronization and storage event listeners. |
| **Sprint 3 (Week 3)** | Bilingual Engine | Developed `useLanguageStore` and mapped Bengali translations across storefront/admin. |
| **Sprint 4 (Week 4)** | Telemetry Beacon | Created `StorefrontTelemetryTracker`, device model regex parsing, and `sendBeacon`. |
| **Sprint 5 (Week 5)** | Visitor Console | Completed `/admin/visitors` dashboard with live charts and geolocation telemetry. |
