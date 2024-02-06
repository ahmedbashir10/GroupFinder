export default class PreferencesModel {
    constructor() {
      this.preferences = {
        location: 'Remote', // Default value
        grade: 'Flexible', // Default value
        specific: '',
        groupSize: { min: '', max: '' },
      };
    }
  
    savePreferences(preferences) {
      this.preferences = preferences;
      // Save to persistent storage if necessary
    }
  
    getPreferences() {
      // Load from persistent storage if necessary
      return this.preferences;
    }
  }
  