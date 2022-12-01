import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatXtndLoadingButtonComponent } from './loading-button.component';


describe('MatXtndLoadingButtonComponent', () => {

  let fixture: ComponentFixture<MatXtndLoadingButtonComponent>;
  let component: MatXtndLoadingButtonComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MatXtndLoadingButtonComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatXtndLoadingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should not have busy state', () => {
    expect(component.busy).toBeFalsy();
  });

  it('should not have disable state', () => {
    expect(component.disabled).toBeFalsy();
  })

  it('busy state should be disable', () => {
    component.busy = true;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('button')?.hasAttribute('disabled')).toBeTruthy();
  });

});
