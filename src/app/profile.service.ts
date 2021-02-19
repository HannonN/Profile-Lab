import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userProfile: UserProfile = {
    name: 'Nathan Hannon',
    contact: 'nathanhannon@icloud.com',
    bio: 'Land of 1,000 Buddhas',
  };

  constructor() {}

  getUserProfile = (): UserProfile => {
    return this.userProfile;
  };

  setUserProfile = (updatedProfile: UserProfile) => {
    this.userProfile.name = updatedProfile.name;
    this.userProfile.contact = updatedProfile.contact;
    this.userProfile.bio = updatedProfile.bio;
  };
}
