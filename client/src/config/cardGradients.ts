export interface CardGradient {
  name: string;
  gradient: string;
  description: string;
}

// Blue gradient for all cards
export const cardBlueGradient = "bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300";

// Primary gradients array contains only the blue gradient
export const primaryGradients: CardGradient[] = [
  {
    name: "blue-card",
    gradient: cardBlueGradient,
    description: "Each card has a blue gradient; section stays black"
  }
];

// All gradients include primary gradients (only blue here)
export const allGradients = [...primaryGradients];

// Section configuration uses primary gradients for all card groups
export const sectionConfig = {
  about: {
    keyPoints: primaryGradients,
    teamMembers: primaryGradients
  },
  services: {
    services: primaryGradients
  },
  portfolio: {
    projects: primaryGradients
  }
};

// Functions to get gradient by index or name, returning the blue gradient
export const getGradientByIndex = () => cardBlueGradient;
export const getGradientByName = () => cardBlueGradient;

// Default palette
export const defaultPalette: 'primary' = 'primary';
