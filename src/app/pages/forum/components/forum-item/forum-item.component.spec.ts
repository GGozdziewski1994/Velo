import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumItemComponent } from './forum-item.component';

describe('ForumItemComponent', () => {
  let component: ForumItemComponent;
  let fixture: ComponentFixture<ForumItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ForumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
