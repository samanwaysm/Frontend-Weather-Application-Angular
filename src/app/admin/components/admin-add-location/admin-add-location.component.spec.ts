import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddLocationComponent } from './admin-add-location.component';

describe('AdminAddLocationComponent', () => {
  let component: AdminAddLocationComponent;
  let fixture: ComponentFixture<AdminAddLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAddLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAddLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
