import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonsComponent } from './persons.component';

describe('PersonsComponent', () => {
  let component: PersonsComponent;
  let fixture: ComponentFixture<PersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonsComponent]  // ✅ standalone component must be in imports
    }).compileComponents();

    fixture = TestBed.createComponent(PersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
