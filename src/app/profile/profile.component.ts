import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { UserProfile } from '../interfaces/user-profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userProfile!: UserProfile;
  @Output() toggleEvent = new EventEmitter<void>();

  constructor(private router: Router, private profileService: ProfileService) {}

  ngOnInit(): void {
    this.getProfilesFromService();
    console.log(this.userProfile);
  }

  getProfilesFromService = (): void => {
    this.userProfile = this.profileService.getUserProfile();
    console.log(this.userProfile);
  };

  // emitToggle = (user: UserProfile): void => {
  //   this.toggleEvent.emit(user);
  //   this.router.navigate(['edit-profile']);
  // };
}
