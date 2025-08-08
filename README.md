# EatWise 🧊

*Smart fridge temperature optimization for the modern kitchen*

[![Smart India Hackathon 2024](https://img.shields.io/badge/Smart%20India%20Hackathon-2024-blue)](https://sih.gov.in/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)

## What is EatWise?

**EatWise** is an intelligent fridge management system that calculates the **optimal temperature** for your refrigerator based on the specific items you're storing. Instead of settling for a one-size-fits-all temperature, EatWise uses a sophisticated **weighted average algorithm** to find the sweet spot that keeps all your food fresh for as long as possible.

Developed by **Team Debug Thugs** for Smart India Hackathon 2024, this project tackles the real-world problem of food spoilage and energy efficiency in household refrigeration.

## 🎯 The Problem We Solved

Traditional refrigerators operate at a fixed temperature (usually around 37-40°F), but different foods have vastly different optimal storage temperatures and varying sensitivity to temperature changes. Delicate items like berries and fresh herbs deteriorate rapidly at temperatures that work perfectly for carrots or citrus fruits. This leads to:

- **Premature food spoilage** - Sensitive items spoil faster than necessary
- **Food waste** - Up to 40% of food is wasted due to improper storage
- **Energy inefficiency** - Running colder than needed wastes electricity
- **One-size-fits-all fallacy** - Ignoring the diverse needs of different foods

## 💡 Our Solution

EatWise introduces a smart cooling algorithm that:

1. **Analyzes your fridge contents** - Track what you're storing, quantities, and expiry dates
2. **Considers temperature sensitivity** - Each food item has a sensitivity rating (0.1 to 1.0) reflecting spoilage rate
3. **Calculates optimal temperature** - Uses weighted averages where more sensitive items have greater influence
4. **Provides real-time recommendations** - Temperature updates automatically as you add or remove items

## ✨ Features

- 🌡️ **Smart Temperature Calculator**: Real-time optimal temperature calculation using weighted averages
- 📊 **Comprehensive Food Database**: Temperature and sensitivity data for 25+ common food items
- 📱 **Item Tracking**: Add, edit, and remove fridge contents with expiry date monitoring
- 🎨 **Responsive Design**: Clean, modern interface that works on desktop and mobile
- 💾 **Data Persistence**: Your fridge inventory is saved locally and restored on reload
- 📖 **Reference Guide**: Built-in temperature table for quick lookup

## 🔬 How It Works

The magic happens in our weighted average algorithm:

```math
Optimal Temperature = \frac{Σ(Temperature × Sensitivity)}{Σ(Sensitivity)}
```

Items with higher sensitivity ratings (like fresh meat at 1.0 or berries at 0.9) have more influence on the final temperature than less sensitive items (like soft drinks at 0.1 or carrots at 0.3). This ensures your most perishable items get the protection they need while maintaining overall efficiency.

### Example Calculation:
- **Chicken** (33°F, sensitivity: 1.0) + **Berries** (34°F, sensitivity: 0.9) + **Carrots** (38°F, sensitivity: 0.3)
- **Result**: 34.2°F - optimized for the sensitive items while accounting for everything

## 🛠️ Tech Stack

- **Frontend**: Pure HTML5, CSS3, and JavaScript (ES6+)
- **Storage**: localStorage for client-side data persistence
- **Design**: Custom CSS with modern dark theme and responsive layout
- **Icons**: Font Awesome for consistent UI elements
- **No dependencies**: Zero external frameworks or libraries

## 👥 Team Debug Thugs

- **[Poran Dip](https://github.com/poran-dip)** - Core Developer & Algorithm Designer
- **Prasurjya** - Team Lead & Project Coordination
- **[Pinaki](https://github.com/PinakiCha)** - System Architect & Brand Identity
- **Anushuya** - Feature Developer & Quality Assurance
- **Poulami** - Documentation & Presentations
- **Sumanta** - Research & Technical Support

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/eatwise.git
   cd eatwise
   ```

2. **Serve the files** (required for ES6 modules)
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Or use any local server
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

4. **Start optimizing!**
   - Add your fridge items using the "+ Add Item" button
   - Watch the optimal temperature update in real-time
   - Check the "Temperature Guide" for food-specific recommendations

> **Note**: File protocol (`file://`) won't work due to ES6 module restrictions. Use a local server instead.

## 🌟 Project Impact

EatWise demonstrates how simple algorithms can solve everyday problems with real-world impact:

- **Reduces food waste** by optimizing storage conditions
- **Saves energy** by avoiding unnecessary over-cooling
- **Extends food freshness** through scientific temperature management
- **Educates users** about proper food storage practices

## 🔮 Future Development

The concept behind EatWise is being evolved into **[CryoKeep](https://github.com/poran-dip/cryokeep)** - a more advanced smart cooling system with IoT integration, machine learning predictions, and commercial applications.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

## 🏆 Acknowledgments

- Smart India Hackathon 2024 for the platform and opportunity
- Food science research that informed our temperature and sensitivity data

---

**Developed with ❄️ by Team Debug Thugs for Smart India Hackathon 2024**

*Because every degree matters when it comes to keeping your food fresh.*
