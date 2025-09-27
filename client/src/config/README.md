# Card Gradients Configuration

This directory contains the global configuration for card gradients used across all sections of the website.

## Usage

### Basic Usage
```typescript
import { sectionConfig, getGradientByIndex, getRandomGradients } from '@/config/cardGradients';

// Use predefined section configurations
const keyPointGradient = sectionConfig.about.keyPoints[0]?.gradient;

// Get gradient by index
const serviceGradient = getGradientByIndex(0, 'primary')?.gradient;

// Get random gradients
const randomGradients = getRandomGradients(3, 'alternative');
```

### Available Palettes

1. **Primary Palette** - Vibrant and modern gradients
2. **Alternative Palette** - Softer and more subtle gradients  
3. **Extended Palette** - More variety and unique combinations

### Changing Color Palettes

To change the color palette for all cards globally, modify the `defaultPalette` in `cardGradients.ts`:

```typescript
export const defaultPalette: 'primary' | 'alternative' | 'extended' = 'alternative';
```

### Section-Specific Configuration

Each section has its own configuration in `sectionConfig`:

- `sectionConfig.about.keyPoints` - For key points cards
- `sectionConfig.about.teamMembers` - For team member cards
- `sectionConfig.services.services` - For service cards
- `sectionConfig.portfolio.projects` - For portfolio project cards

### Adding New Gradients

To add new gradients, extend the appropriate palette array:

```typescript
export const primaryGradients: CardGradient[] = [
  // ... existing gradients
  {
    name: "new-gradient",
    gradient: "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500",
    description: "Custom blue to pink gradient"
  }
];
```

## Benefits

- **Consistency**: All cards use the same gradient system
- **Maintainability**: Change colors globally from one file
- **Flexibility**: Easy to switch between different color palettes
- **Type Safety**: Full TypeScript support with proper typing
- **Fallbacks**: Graceful fallbacks if gradients are not found
