import { Injectable } from '@angular/core';
import { Goals } from '../goal-service/goals';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals(){
    return Goals
  }

  constructor() { }
}