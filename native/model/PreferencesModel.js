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
    }
  
    getPreferences() {
      return this.preferences;
    }
  }
  