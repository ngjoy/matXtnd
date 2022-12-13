import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatXtndLoadingMessageComponent } from './loading-message.component';


describe('MatXtndLoadingMessageComponent', () => {

  let fixture: ComponentFixture<MatXtndLoadingMessageComponent>;
  let component: MatXtndLoadingMessageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MatXtndLoadingMessageComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatXtndLoadingMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
 

});
