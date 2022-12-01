import { TestBed } from '@angular/core/testing';
import { MatXtndLoadingButtonComponent } from '../loading-button.component';
import { MatXtndBusyComponent } from './busy.component';

describe('MatXtndBusyComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MatXtndBusyComponent
      ],
    }).overrideComponent(MatXtndBusyComponent, { add: { providers: [{ provide: MatXtndLoadingButtonComponent }] } }).compileComponents();
  });

  it('should be created', () => {
    const fixture = TestBed.createComponent(MatXtndBusyComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
