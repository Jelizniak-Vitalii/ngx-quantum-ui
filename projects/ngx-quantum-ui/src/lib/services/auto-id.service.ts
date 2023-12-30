import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxQuantumUiAutoIdService {
  private static autoId = 0;

  generate(): string {
    return `${NgxQuantumUiAutoIdService.autoId++}${Date.now()}`;
  }
}
