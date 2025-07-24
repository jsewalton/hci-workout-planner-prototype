# FitSync - Workout App Prototype 2

## High-Fidelity Mobile Prototype

This is an enhanced, high-fidelity prototype of the FitSync workout planning application, designed specifically for mobile interfaces. The prototype demonstrates a complete user onboarding flow that personalizes workout schedules based on user preferences and calendar integration.

## Features

### 🎯 Goal Setting
- Interactive goal selection with visual feedback
- Multiple fitness goals: Weight Loss, Muscle Gain, Endurance, Flexibility, General Fitness, and Stress Relief
- Progress tracking throughout the setup process

### 🏋️ Workout Preferences
- Customizable workout type selection (Cardio, Strength Training, Yoga, Pilates, HIIT, Dance Fitness)
- Time preference selection (Morning, Afternoon, Evening)
- Duration preferences (15, 30, 45, 60+ minutes)
- Real-time validation and button state management

### 📅 Calendar Integration
- Seamless sync with Google Calendar, Outlook, and iCloud
- Simulated connection process with loading states
- Skip option for manual setup

### 🗓️ Personalized Weekly Schedule
- Auto-generated workout calendar based on user preferences
- Visual weekly view with color-coded workout types
- Rest day recommendations
- Workout statistics and summary

### ✨ Enhanced User Experience
- Smooth screen transitions with CSS animations
- Hover effects and micro-interactions
- Progress bar indicating setup completion
- Success animations and feedback
- Responsive design for various screen sizes

## Technical Implementation

### Technologies Used
- **HTML5**: Semantic markup with accessibility considerations
- **CSS3**: Advanced styling with gradients, animations, and responsive design
- **Vanilla JavaScript**: Clean, modular ES6+ code with class-based architecture
- **Font Awesome**: Icons for enhanced visual communication
- **Google Fonts**: Inter font family for modern typography

### Key Components

#### Screen Management
- State-based navigation system
- Smooth transitions between screens
- Progress tracking and validation

#### User Preferences Engine
- Centralized state management
- Real-time preference tracking
- Validation logic for form completion

#### Calendar Simulation
- Mock API integration demonstration
- Realistic loading states and feedback
- Personalized schedule generation algorithm

#### Responsive Design
- Mobile-first approach
- Flexible grid systems
- Touch-friendly interactions

## Setup Instructions

1. **Clone or Download**: Get the prototype files
2. **Open**: Navigate to the `prototype-2` folder
3. **Launch**: Open `index.html` in a modern web browser
4. **Experience**: Test the full user flow on desktop or mobile

## User Flow

1. **Goal Selection**: Choose one or more fitness goals
2. **Preferences**: Select workout types, preferred times, and duration
3. **Calendar Sync**: Connect to your preferred calendar service
4. **Schedule Review**: View your personalized weekly workout plan
5. **Success**: Complete setup and start your fitness journey

## Design Principles

### Visual Hierarchy
- Clear typography scale and spacing
- Consistent color palette with blue primary colors
- Strategic use of gradients and shadows

### User Experience
- Progressive disclosure of information
- Clear feedback for all interactions
- Intuitive navigation patterns
- Accessibility considerations

### Mobile Optimization
- Touch-friendly button sizes (44px minimum)
- Appropriate spacing for finger navigation
- Readable text sizes
- Optimized layouts for portrait orientation

## Future Enhancements

### Potential Features
- Real calendar API integration
- Advanced workout recommendation algorithms
- User profile and progress tracking
- Social features and sharing
- Offline capability with service workers
- Push notifications for workout reminders

### Technical Improvements
- Backend API integration
- Database for user preferences
- Advanced analytics and tracking
- A/B testing framework
- Performance optimization

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive breakpoints for tablets and desktop

## File Structure

```
prototype-2/
├── index.html          # Main application markup
├── styles.css          # Complete styling and animations
├── script.js           # Application logic and interactions
└── README.md          # This documentation file
```

## Performance Considerations

- Optimized CSS animations using transform and opacity
- Minimal DOM manipulation
- Efficient event handling
- Compressed assets and clean code structure

---

*Created for CS6750 - Human-Computer Interaction*
*Georgia Institute of Technology*
