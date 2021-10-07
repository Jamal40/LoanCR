import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSnackBarComponent } from './delete-snack-bar.component';

describe('DeleteSnackBarComponent', () => {
  let component: DeleteSnackBarComponent;
  let fixture: ComponentFixture<DeleteSnackBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSnackBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
