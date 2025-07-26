# EatWise 🧊

*Smart fridge temperature optimization for the modern kitchen*

## What is EatWise?

EatWise is an intelligent fridge management system that calculates the optimal temperature for your refrigerator based on the specific items you're storing. Instead of settling for a one-size-fits-all temperature, EatWise uses a sophisticated weighted average algorithm to find the sweet spot that keeps all your food fresh for as long as possible.

Developed by **Team Debug Thugs** for Smart India Hackathon 2024, this project tackles the real-world problem of food spoilage and energy efficiency in household refrigeration.

## The Problem We Solved

Traditional refrigerators run at a fixed temperature (usually around 37-40°F), but different foods have different optimal storage temperatures and varying sensitivity to temperature changes. Delicate items like berries and fresh herbs suffer at temperatures that work fine for carrots or citrus fruits. This leads to:

- Premature food spoilage
- Unnecessary food waste
- Suboptimal energy consumption
- One-size-fits-all approach to diverse storage needs

## Our Solution

EatWise introduces a smart cooling algorithm that:

1. **Analyzes your fridge contents** - Track what you're storing, quantities, and expiry dates
2. **Considers temperature sensitivity** - Each food item has a sensitivity rating (0.1 to 1.0) that reflects how quickly it spoils with temperature variations
3. **Calculates optimal temperature** - Uses weighted averages where more sensitive items have greater influence on the final temperature
4. **Provides real-time recommendations** - The optimal temperature updates automatically as you add or remove items

## Features

- **Smart Temperature Calculator**: Real-time optimal temperature calculation using weighted averages
- **Food Database**: Comprehensive temperature and sensitivity data for common food items
- **Item Tracking**: Add, edit, and remove fridge contents with expiry date monitoring
- **Responsive Design**: Clean, dark-themed interface that works on desktop and mobile
- **Data Persistence**: Your fridge inventory is saved locally and restored on page reload
- **Reference Guide**: Built-in temperature table for 25+ common food items

## How It Works

The magic happens in our weighted average algorithm:

```math
Optimal Temperature = \frac{Σ(Temperature × Sensitivity)}{Σ(Sensitivity)}
```

Items with higher sensitivity ratings (like fresh meat at 1.0 or berries at 0.9) have more influence on the final temperature than less sensitive items (like soft drinks at 0.1 or carrots at 0.3). This ensures your most perishable items get the protection they need.

## Tech Stack

- **Frontend**: Pure HTML5, CSS3, and JavaScript
- **Storage**: localStorage for client-side data persistence
- **Design**: Custom CSS with modern dark theme
- **Icons**: Font Awesome for UI elements

## Team Debug Thugs

- **Poran Dip** - Lead Developer & Algorithm Architect
- **Prasurjya** - Team Lead & Coordination
- **Pinaki** - UI/UX Designer & Branding
- **Anushuya** - Feature Developer & QA
- **Poulami** - Presentations & Documentation
- **Sumanta** - Research & Support

## Getting Started

1. Clone or download the repository
2. Open `eatwise_index.html` in your web browser
3. Start adding your fridge items using the "+ Add Item" button
4. Watch as the optimal temperature updates in real-time
5. Check the "Optimal Temperature" tab for food-specific temperature guidelines

No installation, no setup, no dependencies - just open and use!

## Future Development

The concept behind EatWise is being further developed into **CryoKeep**, a more advanced version of this smart cooling system. Follow the development at [github.com/poran-dip/cryokeep](https://github.com/poran-dip/cryokeep).

## Project Impact

This project demonstrates how simple algorithms can solve everyday problems. By optimizing fridge temperatures based on actual contents rather than arbitrary settings, EatWise can help reduce food waste, save energy, and keep food fresher for longer.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

Developed for Smart India Hackathon 2024 by Team Debug Thugs.

---

*Because every degree matters when it comes to keeping your food fresh.*
