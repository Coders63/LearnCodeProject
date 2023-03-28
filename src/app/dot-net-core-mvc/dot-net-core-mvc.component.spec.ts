import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNetCoreMvcComponent } from './dot-net-core-mvc.component';

describe('DotNetCoreMvcComponent', () => {
  let component: DotNetCoreMvcComponent;
  let fixture: ComponentFixture<DotNetCoreMvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotNetCoreMvcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotNetCoreMvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
