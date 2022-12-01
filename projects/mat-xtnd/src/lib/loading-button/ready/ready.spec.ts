import { TestBed } from '@angular/core/testing';
import { MatXtndLoadingButtonComponent } from '../loading-button.component';
import { MatXtndReadyComponent } from './ready.component';

describe('MatXtndReadyComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MatXtndLoadingButtonComponent
      ],
    }).overrideComponent(MatXtndReadyComponent, { add: { providers: [{ provide: MatXtndLoadingButtonComponent }] } }).compileComponents();
  });

  it('should be created', () => {
    const fixture = TestBed.createComponent(MatXtndReadyComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
