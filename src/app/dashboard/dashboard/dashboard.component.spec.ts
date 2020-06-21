import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
   let component: DashboardComponent;
   let fixture: ComponentFixture<DashboardComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [DashboardComponent],
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
   it(`should have title as 'Dashboard Page'`, () => {
      expect(component.title).toBe('Dashboard Page');
   });
   it('should render title', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('h1.title').textContent).toContain(
         'Dashboard Page'
      );
   });
});
