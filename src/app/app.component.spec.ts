import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
   let app: AppComponent;
   let fixture: ComponentFixture<AppComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [RouterTestingModule],
         declarations: [AppComponent],
      }).compileComponents();
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.componentInstance;
   }));

   it('should create the app', () => {
      expect(app).toBeTruthy();
   });

   it(`should have as title 'My App'`, () => {
      expect(app.title).toEqual('My App');
   });

   it('should render title', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('span.title').textContent).toContain(
         'My App'
      );
   });
});
