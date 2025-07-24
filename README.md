# FitSync - Workout App Prototype 2

This high fidelity prototype was generated for CS6750 HCI at Georgia Tech with the help of GitHub Copilot.

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

## GitHub Copilot Prompts

**Prompt 1: Help me generate a high-fidelity prototype for a workout app. On the home page, users are able to toggle their fitness goals. When they click “Next”, they are taken to another page that asks them to select their preferred workouts and workout times. Afterwards, they can then sync to their Google, Outlook, or iCloud calendars which will lead them to a view of a personalized weekly workout calendar generated by taking into account user preferences and their weekly calendars.**

GitHub Copilot: I'll help you create a high-fidelity prototype for your workout app. Here are the HTML files for each screen:

1. Home Page - Fitness Goals Selection
{Generated HTML code}
2. Workout Preferences Page
{Generated HTML code}
3. Calendar Sync Page
{Generated HTML code}
4. Personalized Workout Calendar
{Generated HTML code}

To use this prototype:
1. Save each file with the suggested filename (index.html, workout-preferences.html, calendar-sync.html, workout-calendar.html)
2. Open `index.html` in a browser to start the user flow
3. The prototype includes interactive elements, smooth transitions, and a complete user journey
The design features:
- Modern, clean UI with gradient backgrounds
- Interactive toggles for goals and preferences
- Calendar sync simulation with loading states
- Fully functional calendar view with personalized workouts
- Responsive design that works on different screen sizes
- Statistics dashboard showing workout progress

Each page flows naturally to the next, creating a complete high-fidelity prototype experience.

A second similar prompt was used that built off the first iteration:

**Prompt 2: Help me make a final high-fidelity prototype in the prototype-2 folder for a workout app on a mobile phone interface. On the home page, users are able to toggle their fitness goals. When they click “Next”, they are taken to another page that asks them to select their preferred workouts and workout times. Afterwards, they can then sync to their Google, Outlook, or iCloud calendars which will lead them to a view of a personalized weekly workout calendar generated by taking into account user preferences and their weekly calendars.**

GitHub Copilot: I'll help you create a high-fidelity prototype for your workout app in the prototype-2 folder. Let me first examine the current workspace structure and then create the new prototype.

Read workout-app-prototype

Read prototype-2

Now I'll create a comprehensive high-fidelity prototype with all the screens you requested. I'll build upon your existing styles but create an improved version for the prototype-2 folder.

Created index.html

Created styles.css

Created script.js

Created README.md

Perfect! I've created a comprehensive high-fidelity prototype for your workout app in the prototype-2 folder. Here's what I've built for you:

🎯 Complete Prototype Features
1. Home Page - Fitness Goals
Interactive goal selection cards with beautiful animations
6 different fitness goals: Weight Loss, Muscle Gain, Endurance, Flexibility, General Fitness, and Stress Relief
Visual feedback with hover effects and selection states
Progress bar showing completion status
2. Preferences Screen
Workout Types: Choose from Cardio, Strength Training, Yoga, Pilates, HIIT, and Dance Fitness
Time Preferences: Morning, Afternoon, or Evening sessions with specific time ranges
Duration Selection: 15, 30, 45, or 60+ minute workout options
Smart validation that enables the "Next" button only when preferences are selected
3. Calendar Sync Screen
Integration options for Google Calendar, Outlook, and iCloud
Realistic connection simulation with loading animations
"Skip for now" option for manual setup
Visual feedback during the connection process
4. Weekly Calendar View
Personalized workout schedule based on user preferences
Color-coded workout types (morning=orange, afternoon=green, evening=purple)
Rest day recommendations
Weekly statistics showing total workouts, minutes, and variety
Interactive workout slots with hover effects
5. Success Screen
Celebration animation and completion feedback
Preview of the next scheduled workout
Call-to-action to start the fitness journey
🎨 Enhanced Design Features
Mobile-First Design: Optimized for 375px width (iPhone size)
Smooth Animations: CSS transitions and micro-interactions
Modern UI: Gradients, shadows, and contemporary styling
Accessibility: Proper contrast ratios and touch-friendly buttons
Progressive Enhancement: Works without JavaScript for basic functionality
🛠 Technical Highlights
State Management: Clean JavaScript class-based architecture
Responsive Design: Adapts to different screen sizes
Performance Optimized: Efficient animations and minimal DOM manipulation
User Experience: Progress tracking, validation, and clear feedback
🚀 How to Use
Navigate to the prototype-2 folder
Open index.html in any modern web browser
Experience the full user flow from goal setting to calendar creation
Test the interactions and animations
The prototype demonstrates a complete user onboarding experience that would collect user preferences and generate a personalized workout schedule. All interactions are functional, and the design follows modern mobile app conventions with beautiful animations and responsive design.

You can now test this prototype to gather user feedback and validate your design concepts for the workout app!

From the HTML / CSS / JS code generated with the help of GitHub Copilot, the team updated the prototype to produce a final version.

---

*Created for CS6750 - Human-Computer Interaction*
*Georgia Institute of Technology*
