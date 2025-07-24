// App State Management
class WorkoutApp {
    constructor() {
        this.currentScreen = 0;
        this.screens = ['goals-screen', 'preferences-screen', 'sync-screen', 'calendar-screen', 'success-screen'];
        this.selectedGoals = new Set();
        this.selectedWorkouts = new Set();
        this.selectedTime = null;
        this.selectedDuration = null;
        this.connectedCalendar = null;
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateButtonStates();
    }

    bindEvents() {
        // Goal selection
        document.querySelectorAll('.goal-card').forEach(card => {
            card.addEventListener('click', (e) => this.toggleGoal(e.currentTarget));
        });

        // Next button for goals screen
        document.getElementById('goals-next').addEventListener('click', () => {
            if (this.selectedGoals.size > 0) {
                this.nextScreen();
            }
        });

        // Workout type selection
        document.querySelectorAll('.workout-type input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => this.handleWorkoutTypeChange(e));
        });

        // Time slot selection
        document.querySelectorAll('.time-slot input[type="radio"]').forEach(radio => {
            radio.addEventListener('change', (e) => this.handleTimeSlotChange(e));
        });

        // Duration selection
        document.querySelectorAll('.duration-option input[type="radio"]').forEach(radio => {
            radio.addEventListener('change', (e) => this.handleDurationChange(e));
        });

        // Next button for preferences screen
        document.getElementById('preferences-next').addEventListener('click', () => {
            if (this.validatePreferences()) {
                this.nextScreen();
            }
        });

        // Calendar sync buttons
        document.querySelectorAll('.btn-sync').forEach(button => {
            button.addEventListener('click', (e) => this.handleCalendarSync(e));
        });

        // Back buttons
        document.querySelectorAll('.btn-back').forEach(button => {
            button.addEventListener('click', () => this.goBack());
        });

        // Workout slot interactions
        document.querySelectorAll('.workout-slot').forEach(slot => {
            slot.addEventListener('click', (e) => this.handleWorkoutSlotClick(e));
        });
    }

    toggleGoal(card) {
        const goal = card.dataset.goal;
        
        if (this.selectedGoals.has(goal)) {
            this.selectedGoals.delete(goal);
            card.classList.remove('selected');
        } else {
            this.selectedGoals.add(goal);
            card.classList.add('selected');
        }
        
        this.updateButtonStates();
        this.animateSelection(card);
    }

    handleWorkoutTypeChange(e) {
        const value = e.target.value;
        if (e.target.checked) {
            this.selectedWorkouts.add(value);
        } else {
            this.selectedWorkouts.delete(value);
        }
        this.updateButtonStates();
    }

    handleTimeSlotChange(e) {
        this.selectedTime = e.target.value;
        this.updateButtonStates();
    }

    handleDurationChange(e) {
        this.selectedDuration = e.target.value;
        this.updateButtonStates();
    }

    handleCalendarSync(e) {
        const card = e.target.closest('.sync-card');
        const provider = card.dataset.provider;
        
        // Simulate connection process
        this.simulateCalendarConnection(card, provider);
    }

    simulateCalendarConnection(card, provider) {
        const button = card.querySelector('.btn-sync');
        const originalText = button.innerHTML;
        
        // Show connecting state
        card.classList.add('connecting');
        button.innerHTML = '<div class="loading"></div> Connecting...';
        button.disabled = true;
        
        // Simulate connection delay
        setTimeout(() => {
            card.classList.remove('connecting');
            card.classList.add('connected');
            button.innerHTML = '<i class="fas fa-check"></i> Connected';
            button.disabled = false;
            this.connectedCalendar = provider;
            
            // Auto-advance after brief delay
            setTimeout(() => {
                this.nextScreen();
            }, 1500);
        }, 2000);
    }

    handleWorkoutSlotClick(e) {
        const slot = e.currentTarget;
        
        // Add click animation
        slot.style.transform = 'scale(0.95)';
        setTimeout(() => {
            slot.style.transform = '';
        }, 150);

        // Show workout details (could expand to show more info)
        this.showWorkoutDetails(slot);
    }

    showWorkoutDetails(slot) {
        const time = slot.querySelector('.workout-time').textContent;
        const title = slot.querySelector('.workout-title').textContent;
        const duration = slot.querySelector('.workout-duration').textContent;
        
        // Simple alert for now - could be enhanced with a modal
        console.log(`Workout Details: ${title} at ${time} for ${duration}`);
    }

    validatePreferences() {
        return this.selectedWorkouts.size > 0 && this.selectedTime && this.selectedDuration;
    }

    updateButtonStates() {
        // Goals screen button
        const goalsButton = document.getElementById('goals-next');
        if (goalsButton) {
            goalsButton.disabled = this.selectedGoals.size === 0;
        }

        // Preferences screen button
        const preferencesButton = document.getElementById('preferences-next');
        if (preferencesButton) {
            preferencesButton.disabled = !this.validatePreferences();
        }
    }

    nextScreen() {
        if (this.currentScreen < this.screens.length - 1) {
            this.transitionToScreen(this.currentScreen + 1);
        }
    }

    goBack() {
        if (this.currentScreen > 0) {
            this.transitionToScreen(this.currentScreen - 1);
        }
    }

    transitionToScreen(screenIndex) {
        const currentScreenEl = document.getElementById(this.screens[this.currentScreen]);
        const nextScreenEl = document.getElementById(this.screens[screenIndex]);
        
        // Remove active class from current screen
        currentScreenEl.classList.remove('active');
        currentScreenEl.classList.add(screenIndex > this.currentScreen ? 'prev' : 'next');
        
        // Add active class to next screen
        setTimeout(() => {
            nextScreenEl.classList.remove('prev', 'next');
            nextScreenEl.classList.add('active');
        }, 50);
        
        this.currentScreen = screenIndex;
        
        // Update progress bar
        this.updateProgressBar();
        
        // Handle screen-specific logic
        this.handleScreenTransition(screenIndex);
    }

    updateProgressBar() {
        const progressBars = document.querySelectorAll('.progress-fill');
        const progress = ((this.currentScreen + 1) / (this.screens.length - 1)) * 100;
        
        progressBars.forEach(bar => {
            bar.style.width = `${Math.min(progress, 100)}%`;
        });
    }

    handleScreenTransition(screenIndex) {
        switch (screenIndex) {
            case 2: // Sync screen
                this.generateCalendarPreview();
                break;
            case 3: // Calendar screen
                this.generateWorkoutSchedule();
                break;
            case 4: // Success screen
                this.showSuccessAnimation();
                break;
        }
    }

    generateCalendarPreview() {
        // This would normally fetch real calendar data
        console.log('Generating calendar preview with preferences:', {
            goals: Array.from(this.selectedGoals),
            workouts: Array.from(this.selectedWorkouts),
            time: this.selectedTime,
            duration: this.selectedDuration
        });
    }

    generateWorkoutSchedule() {
        // Simulate personalized schedule generation
        const scheduleData = this.createPersonalizedSchedule();
        this.updateCalendarDisplay(scheduleData);
        this.updateStatsDisplay(scheduleData);
    }

    createPersonalizedSchedule() {
        // This is a simplified example - real implementation would be more sophisticated
        const workoutTypes = Array.from(this.selectedWorkouts);
        const timePreference = this.selectedTime;
        const duration = parseInt(this.selectedDuration);
        
        return {
            totalWorkouts: 5,
            totalMinutes: 250,
            workoutTypes: workoutTypes.length,
            schedule: this.generateWeeklySchedule(workoutTypes, timePreference, duration)
        };
    }

    generateWeeklySchedule(workoutTypes, timePreference, duration) {
        // Simplified schedule generation
        const times = {
            morning: ['7:00 AM', '8:00 AM', '9:00 AM'],
            afternoon: ['1:00 PM', '2:00 PM', '3:00 PM'],
            evening: ['6:00 PM', '6:30 PM', '7:00 PM']
        };
        
        return workoutTypes.slice(0, 5).map((type, index) => ({
            day: index,
            type: type,
            time: times[timePreference][index % times[timePreference].length],
            duration: duration
        }));
    }

    updateCalendarDisplay(scheduleData) {
        // Update the calendar with generated schedule
        // This would normally update the actual DOM elements
        console.log('Updating calendar with schedule:', scheduleData.schedule);
    }

    updateStatsDisplay(scheduleData) {
        // Update statistics in the calendar view
        const statNumbers = document.querySelectorAll('.stat-number');
        if (statNumbers.length >= 3) {
            statNumbers[0].textContent = scheduleData.totalWorkouts;
            statNumbers[1].textContent = scheduleData.totalMinutes;
            statNumbers[2].textContent = scheduleData.workoutTypes;
        }
    }

    showSuccessAnimation() {
        // Trigger success animations
        const successIcon = document.querySelector('.success-icon');
        if (successIcon) {
            successIcon.style.animation = 'successPulse 2s ease-in-out infinite';
        }
    }

    animateSelection(element) {
        // Add selection animation
        element.style.transform = 'scale(0.95)';
        setTimeout(() => {
            element.style.transform = '';
        }, 150);
    }

    skipSync() {
        this.nextScreen();
    }

    completeSetup() {
        this.nextScreen();
    }

    resetApp() {
        // Reset the app to the beginning
        this.currentScreen = 0;
        this.selectedGoals.clear();
        this.selectedWorkouts.clear();
        this.selectedTime = null;
        this.selectedDuration = null;
        this.connectedCalendar = null;
        
        // Reset UI
        document.querySelectorAll('.goal-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        document.querySelectorAll('input[type="checkbox"]').forEach(input => {
            input.checked = false;
        });
        
        document.querySelectorAll('input[type="radio"]').forEach(input => {
            input.checked = false;
        });
        
        document.querySelectorAll('.sync-card').forEach(card => {
            card.classList.remove('connected', 'connecting');
        });
        
        // Show first screen
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active', 'prev', 'next');
        });
        
        document.getElementById('goals-screen').classList.add('active');
        
        this.updateButtonStates();
        this.updateProgressBar();
    }
}

// Global functions for button handlers
function goBack() {
    app.goBack();
}

function skipSync() {
    app.skipSync();
}

function completeSetup() {
    app.completeSetup();
}

function resetApp() {
    app.resetApp();
}

// Enhanced interactions
function addInteractionEffects() {
    // Add hover effects for cards
    document.querySelectorAll('.goal-card, .sync-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('selected')) {
                this.style.transform = '';
            }
        });
    });

    // Add click ripple effect
    document.querySelectorAll('.btn-primary, .btn-secondary, .btn-sync').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        .btn-primary, .btn-secondary, .btn-sync {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the app
    window.app = new WorkoutApp();
    
    // Add enhanced interactions
    addInteractionEffects();
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === 'Enter') {
            const activeButton = document.querySelector('.footer .btn-primary:not(:disabled)');
            if (activeButton) {
                activeButton.click();
            }
        } else if (e.key === 'ArrowLeft' || e.key === 'Escape') {
            const backButton = document.querySelector('.btn-back');
            if (backButton) {
                backButton.click();
            }
        }
    });
    
    // Preload next screen images/content for smoother transitions
    function preloadContent() {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
    
    preloadContent();
});

// Service worker registration for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}

// Analytics and user tracking (placeholder)
function trackUserAction(action, data = {}) {
    console.log('User action:', action, data);
    // This would normally send data to analytics service
}

// Usage examples:
// trackUserAction('goal_selected', { goal: 'weight-loss' });
// trackUserAction('workout_type_selected', { type: 'cardio' });
// trackUserAction('calendar_synced', { provider: 'google' });
